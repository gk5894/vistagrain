'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import type { GalleryImage } from '@/lib/images'

interface ImageCardProps {
  image: GalleryImage
  onClick: (image: GalleryImage) => void
  index: number
}

export default function ImageCard({ image, onClick, index }: ImageCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Stagger delay capped so deep items don't wait forever
    const delay = Math.min(index * 40, 300)
    el.style.transitionDelay = `${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.04, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className="img-reveal group cursor-pointer"
      onClick={() => onClick(image)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={85}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
            <p className="font-sans text-[9px] tracking-[0.18em] text-white/70 uppercase">{image.caption}</p>
          </div>
        )}
      </div>
    </div>
  )
}
