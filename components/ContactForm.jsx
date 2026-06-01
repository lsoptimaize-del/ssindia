'use client';

import { useState } from 'react';

const inputClass =
  'w-full bg-white border border-[#E8EAF6] rounded-lg px-4 py-3 font-dmsans text-[#37474F] text-[0.9rem] focus:outline-none focus:border-[#00838F] transition-colors duration-200';

const labelClass =
  'block font-dmsans font-bold uppercase text-[0.65rem] tracking-widest text-[#0D1557]/55 mb-1.5';

export default function ContactForm() {
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    orderType: '',
    message: '',
  });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = [
      `Company: ${form.company}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Product Required: ${form.product}`,
      `Quantity: ${form.quantity}`,
      `Order Type: ${form.orderType}`,
      `Message: ${form.message}`,
    ].join('\n');

    const subject = encodeURIComponent(`Bulk Enquiry – ${form.product || 'INDARC Welding Rods'} – ${form.company}`);
    const bodyEnc = encodeURIComponent(body);
    window.location.href = `mailto:contact@ssindia.in?subject=${subject}&body=${bodyEnc}`;
  }

  return (
    <div
      className="rounded-2xl p-8"
      style={{ background: '#F5F7FF', border: '1px solid #E8EAF6' }}
    >
      <h3 className="font-dmsans font-semibold text-[#0D1557] text-[1.05rem] mb-7">
        Send Your Bulk Requirement
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Company Name</label>
            <input name="company" type="text" required value={form.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
          </div>
          <div>
            <label className={labelClass}>Your Name</label>
            <input name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Full name" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Phone Number</label>
            <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" />
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Product Required</label>
            <select name="product" required value={form.product} onChange={handleChange} className={inputClass}>
              <option value="">Select size</option>
              <option value="3.5mm INDARC E6013">3.5mm INDARC</option>
              <option value="4mm INDARC E6013">4mm INDARC</option>
              <option value="4.5mm INDARC E6013">4.5mm INDARC</option>
              <option value="Multiple Sizes">Multiple Sizes</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Quantity Required</label>
            <input name="quantity" type="text" value={form.quantity} onChange={handleChange} className={inputClass} placeholder="e.g. 200 kg, 10 boxes" />
          </div>
        </div>
        <div>
          <label className={labelClass}>Order Type</label>
          <select name="orderType" value={form.orderType} onChange={handleChange} className={inputClass}>
            <option value="">Select type</option>
            <option value="One-time Order">One-time Order</option>
            <option value="Repeat Supply">Repeat Supply</option>
            <option value="Long-term Contract">Long-term Contract</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Message / Additional Requirements</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={inputClass}
            placeholder="Delivery location, lead time requirements, special notes..."
          />
        </div>
        <button
          type="submit"
          className="w-full font-dmsans font-semibold text-[0.85rem] tracking-[0.1em] uppercase text-white py-4 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
          style={{ background: 'linear-gradient(135deg, #00838F, #00BCD4)' }}
        >
          Send Bulk Enquiry →
        </button>
        <p className="font-dmsans text-[0.72rem] text-[#78909C] text-center">
          Opens your email client · Santosh or Sandeep will respond same day
        </p>
      </form>
    </div>
  );
}
