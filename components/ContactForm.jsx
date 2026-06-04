'use client';

import { useState, useEffect } from 'react';

export default function ContactForm({ dark = false }) {
  const inputClass = dark
    ? 'w-full bg-white/6 border border-white/12 rounded-lg px-4 py-2.5 font-dmsans text-white text-[0.88rem] focus:outline-none focus:border-[#00BCD4] focus:bg-white/10 transition-colors duration-200 placeholder:text-white/25'
    : 'w-full bg-white/70 border border-black/10 rounded-lg px-4 py-2.5 font-dmsans text-[#37474F] text-[0.88rem] focus:outline-none focus:border-[#00838F] focus:bg-white transition-colors duration-200';
  const labelClass = dark
    ? 'block font-dmsans font-bold uppercase text-[0.6rem] tracking-widest text-white/30 mb-1.5'
    : 'block font-dmsans font-bold uppercase text-[0.6rem] tracking-widest text-[#0D1557]/45 mb-1.5';
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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const prodParam = params.get('product');
      if (prodParam) {
        let matched = '';
        if (prodParam.startsWith('3.5')) matched = '3.5mm INDARC E6013';
        else if (prodParam.startsWith('4.5')) matched = '4.5mm INDARC E6013';
        else if (prodParam.startsWith('4')) matched = '4mm INDARC E6013';
        
        if (matched) {
          setForm((f) => ({ ...f, product: matched }));
        }
      }
    }
  }, []);

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Company Name</label>
          <input name="company" type="text" required value={form.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
        </div>
        <div>
          <label className={labelClass}>Your Name</label>
          <input name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Full name" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Phone Number</label>
          <input name="phone" type="tel" required value={form.phone} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" />
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          rows={3}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Delivery location, lead time requirements, special notes..."
        />
      </div>
      <button
        type="submit"
        className="w-full font-dmsans font-semibold text-[0.82rem] tracking-[0.1em] uppercase text-white py-3.5 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-px"
        style={{ background: dark ? 'linear-gradient(135deg, #00838F, #00BCD4)' : 'linear-gradient(135deg, #00838F, #00BCD4)' }}
      >
        Send Bulk Enquiry →
      </button>
    </form>
  );
}
