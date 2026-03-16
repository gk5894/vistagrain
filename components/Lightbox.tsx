'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryImage } from '@/lib/images'

interface LightboxProps {
  image: GalleryImage
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}

export default function Lightbox({ image, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-white/60 hover:text-white text-2xl z-10 leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Prev */}
        {onPrev && (
          <button
            onClick={(e) => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl z-10 px-3 py-6"
            aria-label="Previous"
          >
            ←
          </button>
        )}

        {/* Next */}
        {onNext && (
          <button
            onClick={(e) => { e.stopPropagation(); onNext() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-3xl z-10 px-3 py-6"
            aria-label="Next"
          >
            →
          </button>
        )}

        {/* Image */}
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-[90vw] max-h-[85vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            quality={90}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            priority
          />
          {image.caption && (
            <p className="mt-3 text-center text-[10px] tracking-widest text-white/40 uppercase">
              {image.caption}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
