'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import MobileNav from './MobileNav'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 h-full w-56 flex-col justify-between px-8 py-10 z-40 border-r border-white/5">
        <div>
          <Link href="/" className="block mb-12">
            <span className="font-serif text-xl tracking-widest uppercase text-[#f5f5f0]">
              vistagrain
            </span>
            <span className="block text-[10px] tracking-[0.2em] text-[#f5f5f0]/40 mt-1 uppercase">
              Light. Color. Memory.
            </span>
          </Link>

          <ul className="space-y-5">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                      isActive
                        ? 'text-[#f5f5f0] border-b border-[#c8a96e] pb-px'
                        : 'text-[#f5f5f0]/50 hover:text-[#f5f5f0]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="space-y-2">
          <a
            href="mailto:hello@vistagrain.com"
            className="block text-[10px] tracking-widest text-[#f5f5f0]/30 hover:text-[#c8a96e] transition-colors uppercase"
          >
            hello@vistagrain.com
          </a>
          <a
            href="https://instagram.com/vistagrain"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[10px] tracking-widest text-[#f5f5f0]/30 hover:text-[#c8a96e] transition-colors uppercase"
          >
            @vistagrain
          </a>
        </div>
      </nav>

      {/* Mobile header */}
      <header
        className={`lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled ? 'bg-[#0e0e0e]/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <Link href="/" className="font-serif text-lg tracking-widest uppercase">
          vistagrain
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="flex flex-col gap-1.5 p-1"
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-[#f5f5f0]" />
          <span className="block w-4 h-px bg-[#f5f5f0]" />
          <span className="block w-6 h-px bg-[#f5f5f0]" />
        </button>
      </header>

      <MobileNav
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </>
  )
}
