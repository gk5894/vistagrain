'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
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
  const [visible, setVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY === 0) {
        setVisible(true)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setVisible(false)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 py-5 transition-transform duration-300 ease-in-out"
      >
        {/* Brand identity */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-[family-name:var(--font-silkscreen)] text-sm tracking-[0.15em] uppercase text-[#f5f5f0]">
            vistagrain
          </span>
          <span className="text-[9px] tracking-[0.18em] uppercase text-[#f5f5f0]/45 mt-[3px] font-sans">
            Light. Color. Memory.
          </span>
          <span className="text-[9px] tracking-[0.14em] text-[#f5f5f0]/30 mt-[2px] font-sans">
            by Gaurav Kshirsagar
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`text-[11px] tracking-[0.15em] uppercase font-sans transition-colors duration-200 ${
                  isActive ? 'text-[#FFE234]' : 'text-[#f5f5f0]/70 hover:text-[#FFE234]'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex flex-col gap-1.5 p-1"
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
