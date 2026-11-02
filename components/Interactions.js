"use client";
"use strict";

import { useEffect, useState } from "react";
import { useRef } from "react";

export function ProductGallery({ items, filters = false }) {
  const [filter, setFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const returnFocusRef = useRef(null);
  const categories = ["All", "GRC", "GRP"];
  const visibleItems = filter === "All" ? items : items.filter((item) => item.category === filter);
  const selected = selectedIndex === null ? null : items[selectedIndex];

  function openGallery(index) {
    returnFocusRef.current = document.activeElement;
    setSelectedIndex(index);
  }

  function closeGallery() {
    setSelectedIndex(null);
    returnFocusRef.current?.focus();
  }

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((index) => (index + 1) % items.length);
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((index) => (index - 1 + items.length) % items.length);
      } else if (event.key === "Tab") {
        const focusable = document.querySelectorAll(".lightbox button, .lightbox a[href]");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("lightbox-open");
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("lightbox-open");
    };
  }, [selectedIndex, items.length]);

  return (
    <>
      {filters && (
        <div className="filter-tabs" role="group" aria-label="Filter products">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={filter === category ? "filter-tab filter-tab--selected" : "filter-tab"}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div className="gallery-grid">
        {visibleItems.map((item) => (
          <button
            className="gallery-item"
            key={item.title}
            type="button"
            onClick={() => openGallery(items.indexOf(item))}
            aria-label={`Open image: ${item.title}`}
          >
            <span className="gallery-image">
              <img src={item.image} alt={item.alt} loading="lazy" width="720" height="480" />
            </span>
            <span className="gallery-caption">
              <strong>{item.title}</strong>
              <span>{item.caption}</span>
            </span>
          </button>
        ))}
      </div>
      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={closeGallery}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="lightbox-close"
            aria-label="Close image"
            onClick={closeGallery}
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-prev"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex((selectedIndex - 1 + items.length) % items.length);
            }}
          >
            ‹
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={selected.image} alt={selected.alt} width="1200" height="800" />
            <figcaption>
              <strong>{selected.title}</strong>
              <span>{selected.caption}</span>
              <a
                className="button button--blue"
                href={`/contact?product=${encodeURIComponent(selected.title)}`}
              >
                Enquire about this product
              </a>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox-next"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex((selectedIndex + 1) % items.length);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

export function FacilitySearchTable({ equipment }) {
  const [query, setQuery] = useState("");
  const rows = equipment.filter((item) =>
    `${item.description} ${item.unit}`.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <>
      <label className="table-search">
        Search equipment
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by equipment name"
        />
      </label>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Unit</th>
              <th scope="col">Qty</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => (
              <tr key={item.description}>
                <td>{item.description}</td>
                <td>{item.unit || "Nos."}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {rows.length === 0 && <p className="empty-state">No equipment matches “{query}”.</p>}
      </div>
      <p className="table-count" aria-live="polite">
        Showing {rows.length} of {equipment.length} equipment items
      </p>
    </>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [interest, setInterest] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const product = new URLSearchParams(window.location.search).get("product");
    if (product) setInterest(product);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (submitting) return;
    if (!form.reportValidity()) {
      setStatus("Please correct the highlighted fields before sending your enquiry.");
      return;
    }

    const data = new FormData(form);
    const subject = encodeURIComponent(`Website enquiry: ${data.get("interest")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Company: ${data.get("company")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone")}`,
        `Product interest: ${data.get("interest")}`,
        "",
        data.get("message"),
      ].join("\n"),
    );
    setSubmitting(true);
    setStatus(
      "Your email app is opening with the enquiry details. Send the draft to complete your enquiry.",
    );
    window.location.href = `mailto:alsannatank@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      onInvalid={() =>
        setStatus("Please complete each required field and check the highlighted value.")
      }
    >
      <div className="form-grid">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Phone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            pattern={"\\x2B?[0-9](?:[0-9]| |-){7,18}[0-9]"}
            title="Enter a valid phone number, including country code if needed."
            required
          />
        </label>
        <label className="form-wide">
          Product interest
          <select
            name="interest"
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
            required
          >
            {interest && !["GRC", "GRP", "Tanks", "Sheds", "Other"].includes(interest) && (
              <option value={interest}>{interest}</option>
            )}
            <option value="" disabled>
              Select a product
            </option>
            <option>GRC</option>
            <option>GRP</option>
            <option>Tanks</option>
            <option>Sheds</option>
            <option>Other</option>
          </select>
        </label>
        <label className="form-wide">
          Message
          <textarea name="message" rows="5" required />
        </label>
      </div>
      <button className="button button--blue" type="submit" disabled={submitting}>
        {submitting ? "Opening email…" : "Send inquiry"} <span aria-hidden="true">↗</span>
      </button>
      <p className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}

export function WhatsAppLink() {
  return (
    <a
      className="whatsapp-link"
      href="https://wa.me/971556441028"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Al Sanna on WhatsApp"
    >
      WhatsApp
    </a>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 450);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <button
      className={`back-to-top${visible ? " back-to-top--visible" : ""}`}
      type="button"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
    >
      ↑
    </button>
  );
}
