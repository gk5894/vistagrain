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
        setVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
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
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between transition-transform duration-300 ease-in-out px-4 py-3"
      >
        {/* Inner pill — rounded, semi-translucent background */}
        <div className="w-full flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/8">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="text-[14px] tracking-[0.25em] text-[#f0ede8]"
              style={{ fontFamily: 'Gloock, serif' }}
            >
              Vistagrain
            </span>
            <span className="font-sans text-[8px] tracking-[0.12em] text-[#f0ede8]/35 mt-[3px]">
              by Gaurav Kshirsagar
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  style={{ fontFamily: 'Bosch, sans-serif' }}
                  className={`text-[11px] tracking-[0.15em] transition-colors duration-200 ${
                    isActive ? 'text-[#FFE234]' : 'text-[#f0ede8]/60 hover:text-[#FFE234]'
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
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Open navigation menu"
          >
            <span className="block w-5 h-px bg-[#f0ede8]" />
            <span className="block w-3 h-px bg-[#f0ede8]" />
            <span className="block w-5 h-px bg-[#f0ede8]" />
          </button>

        </div>
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
