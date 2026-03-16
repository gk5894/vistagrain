'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-transparent border-b border-white/20 focus:border-[#c8a96e] outline-none py-3 text-sm text-[#f5f5f0] placeholder:text-[#f5f5f0]/30 transition-colors duration-200'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 mb-2">Name</label>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className="block text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 mb-2">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
        </div>
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 mb-2">Subject</label>
        <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Inquiry subject" className={inputClass} />
      </div>
      <div>
        <label className="block text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 mb-2">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
      </div>

      {status === 'success' && (
        <p className="text-sm text-[#c8a96e] tracking-wide">Message sent. I&apos;ll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-400/70 tracking-wide">Something went wrong. Please try again or email directly.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="text-[11px] tracking-[0.2em] uppercase border border-[#f5f5f0]/20 hover:border-[#c8a96e] text-[#f5f5f0]/60 hover:text-[#c8a96e] px-8 py-3 transition-all duration-200 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
