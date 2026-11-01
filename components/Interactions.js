'use client';

import { useEffect, useState } from 'react';

export function ProductGallery({ items, filters = false }) {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const categories = ['All', 'GRC', 'GRP'];
  const visibleItems = filter === 'All' ? items : items.filter((item) => item.category === filter);

  useEffect(() => {
    if (!selected) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', closeOnEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      {filters && <div className="filter-tabs" role="group" aria-label="Filter products">
        {categories.map((category) => <button key={category} type="button" className={filter === category ? 'filter-tab selected' : 'filter-tab'} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
      </div>}
      <div className="gallery-grid">
        {visibleItems.map((item) => <button className="gallery-item" key={item.title} type="button" onClick={() => setSelected(item)} aria-label={`Open image: ${item.title}`}>
          <span className="gallery-image"><img src={item.image} alt={item.alt} loading="lazy" width="720" height="480" /></span>
          <span className="gallery-caption"><strong>{item.title}</strong><span>{item.caption}</span></span>
        </button>)}
      </div>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
        <button type="button" className="lightbox-close" aria-label="Close image" onClick={() => setSelected(null)}>×</button>
        <figure onClick={(event) => event.stopPropagation()}>
          <img src={selected.image} alt={selected.alt} />
          <figcaption><strong>{selected.title}</strong><span>{selected.caption}</span></figcaption>
        </figure>
      </div>}
    </>
  );
}

export function FacilitySearchTable({ equipment }) {
  const [query, setQuery] = useState('');
  const rows = equipment.filter((item) => `${item.description} ${item.unit}`.toLowerCase().includes(query.trim().toLowerCase()));

  return <>
    <label className="table-search">Search equipment
      <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by equipment name" />
    </label>
    <div className="table-scroll">
      <table className="data-table">
        <thead><tr><th scope="col">Description</th><th scope="col">Unit</th><th scope="col">Qty</th></tr></thead>
        <tbody>{rows.map((item) => <tr key={item.description}><td>{item.description}</td><td>{item.unit || 'Nos.'}</td><td>{item.quantity}</td></tr>)}</tbody>
      </table>
      {rows.length === 0 && <p className="empty-state">No equipment matches “{query}”.</p>}
    </div>
    <p className="table-count" aria-live="polite">Showing {rows.length} of {equipment.length} equipment items</p>
  </>;
}

export function ContactForm() {
  const [status, setStatus] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Website enquiry: ${data.get('interest')}`);
    const body = encodeURIComponent([
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Product interest: ${data.get('interest')}`,
      '',
      data.get('message'),
    ].join('\n'));
    setStatus('Your email app will open with the inquiry details.');
    window.location.href = `mailto:alsannatank@gmail.com?subject=${subject}&body=${body}`;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-grid">
      <label>Name<input name="name" autoComplete="name" required /></label>
      <label>Company<input name="company" autoComplete="organization" required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
      <label className="form-wide">Product interest<select name="interest" defaultValue="" required>
        <option value="" disabled>Select a product</option><option>GRC</option><option>GRP</option><option>Tanks</option><option>Sheds</option><option>Other</option>
      </select></label>
      <label className="form-wide">Message<textarea name="message" rows="5" required /></label>
    </div>
    <button className="button button-blue" type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
    <p className="form-status" aria-live="polite">{status}</p>
  </form>;
}

export function WhatsAppLink() {
  return <a className="whatsapp-link" href="https://wa.me/971556441028" target="_blank" rel="noreferrer" aria-label="Chat with Al Sanna on WhatsApp">WhatsApp</a>;
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 450);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return visible ? <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button> : null;
}
