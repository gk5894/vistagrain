'use client'

import { useState, useRef, useEffect } from 'react'
import { galleryImages, type Category } from '@/lib/images'
import Gallery from '@/components/Gallery'

const categories: (Category | 'ALL')[] = ['ALL', 'FILM', 'LANDSCAPES', 'STREET']

export default function WorkPage() {
  const [active, setActive] = useState<Category | 'ALL'>('ALL')
  const [fading, setFading] = useState(false)
  const prevActive = useRef(active)

  const filtered = active === 'ALL'
    ? galleryImages
    : galleryImages.filter((img) => img.category === active)

  function handleFilter(cat: Category | 'ALL') {
    if (cat === active) return
    setFading(true)
    setTimeout(() => {
      prevActive.current = cat
      setActive(cat)
      setFading(false)
    }, 200)
  }

  return (
    <div className="pt-24 px-4 md:px-6 pb-16">
      <header className="mb-10 px-2">
        <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide mb-8">Work</h1>
        <div className="flex flex-wrap gap-7">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`relative font-sans text-[11px] tracking-[0.18em] uppercase transition-colors duration-200 pb-px ${
                active === cat
                  ? 'text-[#f0ede8]'
                  : 'text-[#f0ede8]/40 hover:text-[#f0ede8]/80'
              }`}
            >
              {cat}
              {active === cat && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#FFE234]" />
              )}
            </button>
          ))}
        </div>
      </header>

      <div
        style={{
          opacity: fading ? 0 : 1,
          transition: 'opacity 200ms ease',
        }}
      >
        <Gallery images={filtered} />
      </div>
    </div>
  )
}
