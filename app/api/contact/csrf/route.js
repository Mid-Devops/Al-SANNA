import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export function GET() {
  const csrfToken = randomBytes(32).toString("base64url");
  const response = NextResponse.json({ csrfToken }, { headers: { "Cache-Control": "no-store" } });

  response.cookies.set("contact_csrf", csrfToken, {
    httpOnly: true,
    maxAge: 600,
    path: "/api/contact",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}
