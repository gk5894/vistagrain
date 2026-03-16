import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for commissions, licensing, and editorial work.',
}

export default function ContactPage() {
  return (
    <div className="pt-24 px-6 md:px-10 pb-16 min-h-screen flex items-center">
      <div className="max-w-2xl w-full mx-auto lg:mx-0">
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-2">Contact</h1>
        <p className="text-sm text-[#f5f5f0]/40 mb-12">
          Available for editorial, commercial, and fine art commissions.
        </p>

        <ContactForm />

        <div className="mt-12 pt-10 border-t border-white/10 flex flex-col sm:flex-row gap-6">
          <a href="mailto:hello@vistagrain.com" className="text-[11px] tracking-[0.15em] uppercase text-[#f5f5f0]/40 hover:text-[#c8a96e] transition-colors">
            hello@vistagrain.com
          </a>
          <a href="https://instagram.com/vistagrain" target="_blank" rel="noopener noreferrer" className="text-[11px] tracking-[0.15em] uppercase text-[#f5f5f0]/40 hover:text-[#c8a96e] transition-colors">
            @vistagrain
          </a>
        </div>
      </div>
    </div>
  )
}
