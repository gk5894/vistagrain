'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryImages, type Category } from '@/lib/images'
import Gallery from '@/components/Gallery'

const categories: (Category | 'ALL')[] = ['ALL', 'ASTRO', 'FILM', 'URBAN', 'STREET', 'LANDSCAPES']

export default function WorkPage() {
  const [active, setActive] = useState<Category | 'ALL'>('ALL')

  const filtered = active === 'ALL' ? galleryImages : galleryImages.filter((img) => img.category === active)

  return (
    <div className="pt-20 lg:pt-0 px-4 md:px-8 lg:px-12 py-16">
      <header className="mb-12">
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-8">Work</h1>
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 pb-px ${
                active === cat ? 'text-[#f5f5f0]' : 'text-[#f5f5f0]/40 hover:text-[#f5f5f0]/80'
              }`}
            >
              {cat}
              {active === cat && (
                <motion.span
                  layoutId="filter-underline"
                  className="absolute bottom-0 left-0 right-0 h-px bg-[#c8a96e]"
                />
              )}
            </button>
          ))}
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Gallery images={filtered} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
