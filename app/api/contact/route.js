import { NextResponse } from "next/server";

export const runtime = "nodejs";

const fieldLimits = {
  name: 120,
  company: 160,
  email: 254,
  phone: 24,
  interest: 80,
  message: 5000,
};

function clean(value, maxLength) {
  if (typeof value !== "string") return null;
  return value
    .normalize("NFC")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength);
}

function jsonError(message, status) {
  return NextResponse.json(
    { error: message },
    { status, headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request) {
  const origin = request.headers.get("origin");
  const host =
    request.headers.get("x-forwarded-host")?.split(",")[0].trim() || request.headers.get("host");
  const protocol =
    request.headers.get("x-forwarded-proto")?.split(",")[0].trim() ||
    new URL(request.url).protocol.slice(0, -1);
  let originUrl;
  let expectedOrigin;
  try {
    originUrl = new URL(origin || "");
    expectedOrigin = new URL(`${protocol}://${host}`).origin;
  } catch {
    return jsonError("Request origin could not be verified.", 403);
  }
  const isLocalHost = ["localhost", "127.0.0.1", "[::1]"].includes(originUrl.hostname);
  if (
    originUrl.origin !== expectedOrigin ||
    (process.env.NODE_ENV === "production" && protocol !== "https" && !isLocalHost)
  ) {
    return jsonError("Request origin could not be verified.", 403);
  }

  const csrfCookie = request.cookies.get("contact_csrf")?.value;
  const csrfHeader = request.headers.get("x-csrf-token");
  if (!csrfCookie || !csrfHeader || csrfCookie !== csrfHeader) {
    return jsonError("Security token is missing or expired. Please reload and try again.", 403);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 16_384) return jsonError("Request is too large.", 413);

  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return jsonError("Content-Type must be application/json.", 415);
  }

  const reader = request.body?.getReader();
  if (!reader) return jsonError("Request body is required.", 400);
  const chunks = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > 16_384) {
      await reader.cancel();
      return jsonError("Request is too large.", 413);
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  let input;
  try {
    input = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
  } catch (error) {
    if (error instanceof SyntaxError) return jsonError("Request body must be valid JSON.", 400);
    if (error instanceof TypeError) return jsonError("Request body must be valid UTF-8.", 400);
    throw error;
  }

  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return jsonError("Request body must be a JSON object.", 400);
  }

  if (typeof input.website === "string" && input.website.trim()) {
    return NextResponse.json(
      { ok: true },
      { status: 202, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!Number.isFinite(input.elapsedMs) || input.elapsedMs < 1500) {
    return jsonError("Please take a moment to review the enquiry before sending.", 400);
  }

  const data = Object.fromEntries(
    Object.entries(fieldLimits).map(([field, maxLength]) => [
      field,
      clean(input[field], maxLength),
    ]),
  );

  if (
    Object.entries(fieldLimits).some(
      ([field, maxLength]) => typeof input[field] !== "string" || input[field].length > maxLength,
    ) ||
    Object.values(data).some((value) => value === null) ||
    !data.name ||
    !data.email ||
    !data.phone ||
    !data.interest ||
    !data.message ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ||
    !/^\+?[0-9][0-9 ()-]{6,20}[0-9]$/.test(data.phone) ||
    !["GRC", "GRP", "Tanks", "Sheds", "Other"].includes(data.interest)
  ) {
    return jsonError("Please check the enquiry details and try again.", 400);
  }

  const endpointValue = process.env.CONTACT_FORM_ENDPOINT;
  if (!endpointValue) {
    return jsonError(
      "Online enquiries are not configured yet. Please email alsannatank@gmail.com.",
      503,
    );
  }

  let endpoint;
  try {
    endpoint = new URL(endpointValue);
  } catch {
    return jsonError("The contact service is not configured correctly.", 503);
  }
  if (endpoint.protocol !== "https:") {
    return jsonError("The contact service must use HTTPS.", 503);
  }

  let upstream;
  try {
    upstream = await fetch(endpoint, {
      method: "POST",
      redirect: "error",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_FORM_API_KEY
          ? { Authorization: `Bearer ${process.env.CONTACT_FORM_API_KEY}` }
          : {}),
      },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("Contact service request failed:", error.message);
    return jsonError("The enquiry could not be sent. Please try again later.", 502);
  }

  if (!upstream.ok) {
    console.error("Contact service returned HTTP", upstream.status);
    return jsonError("The enquiry could not be sent. Please try again later.", 502);
  }

  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
