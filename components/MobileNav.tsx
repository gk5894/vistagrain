'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  pathname: string
}

export default function MobileNav({ isOpen, onClose, links, pathname }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#0e0e0e] flex flex-col"
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-white/5">
            <Link href="/" className="font-serif text-lg tracking-widest uppercase" onClick={onClose}>
              vistagrain
            </Link>
            <button
              onClick={onClose}
              className="text-[#f5f5f0]/60 hover:text-[#f5f5f0] text-2xl leading-none"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col justify-center flex-1 px-10">
            <ul className="space-y-8">
              {links.map(({ href, label }, i) => {
                const isActive = pathname === href
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      href={href}
                      onClick={onClose}
                      className={`font-serif text-4xl tracking-wide transition-colors ${
                        isActive ? 'text-[#f5f5f0]' : 'text-[#f5f5f0]/40 hover:text-[#f5f5f0]'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </nav>

          <div className="px-10 py-8 border-t border-white/5 space-y-2">
            <a href="mailto:hello@vistagrain.com" className="block text-xs tracking-widest text-[#f5f5f0]/30 uppercase">
              hello@vistagrain.com
            </a>
            <a href="https://instagram.com/vistagrain" target="_blank" rel="noopener noreferrer" className="block text-xs tracking-widest text-[#f5f5f0]/30 uppercase">
              @vistagrain
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
