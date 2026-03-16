'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  pathname: string
}

export default function MobileNav({ isOpen, onClose, links, pathname }: MobileNavProps) {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#0a0a0a]"
      style={{
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none',
        transition: 'opacity 280ms ease',
      }}
      aria-hidden={!isOpen}
    >
      {/* Header row */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif text-sm tracking-[0.3em] uppercase text-[#f0ede8] font-light"
        >
          Vistagrain
        </Link>
        <button
          onClick={onClose}
          className="font-sans text-[#f0ede8]/50 hover:text-[#f0ede8] text-lg leading-none transition-colors duration-200"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col justify-center flex-1 px-10">
        <ul className="space-y-7">
          {links.map(({ href, label }, i) => {
            const isActive = pathname === href
            return (
              <li
                key={href}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(-16px)',
                  transition: `opacity 300ms ease ${80 + i * 50}ms, transform 300ms ease ${80 + i * 50}ms`,
                }}
              >
                <Link
                  href={href}
                  onClick={onClose}
                  className={`font-serif text-3xl tracking-wide font-light transition-colors duration-200 ${
                    isActive ? 'text-[#f0ede8]' : 'text-[#f0ede8]/35 hover:text-[#FFE234]'
                  }`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-10 py-8 border-t border-white/5 space-y-2">
        <a
          href="mailto:hello@vistagrain.com"
          className="block font-sans text-[10px] tracking-[0.2em] text-[#f0ede8]/30 uppercase hover:text-[#FFE234] transition-colors duration-200"
        >
          hello@vistagrain.com
        </a>
        <a
          href="https://instagram.com/vistagrain"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-sans text-[10px] tracking-[0.2em] text-[#f0ede8]/30 uppercase hover:text-[#FFE234] transition-colors duration-200"
        >
          @vistagrain
        </a>
      </div>
    </div>
  )
}
