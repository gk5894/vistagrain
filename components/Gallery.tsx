'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import type { GalleryImage } from '@/lib/images'
import ImageCard from './ImageCard'

const Lightbox = dynamic(() => import('./Lightbox'), { ssr: false })

interface GalleryProps {
  images: GalleryImage[]
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null)

  const currentIndex = lightboxImage ? images.findIndex((img) => img.id === lightboxImage.id) : -1

  const handlePrev = () => {
    if (currentIndex > 0) setLightboxImage(images[currentIndex - 1])
  }

  const handleNext = () => {
    if (currentIndex < images.length - 1) setLightboxImage(images[currentIndex + 1])
  }

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-1 space-y-1">
        {images.map((image, index) => (
          <div key={image.id} className="break-inside-avoid">
            <ImageCard
              image={image}
              onClick={setLightboxImage}
              index={index}
            />
          </div>
        ))}
      </div>

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          onClose={() => setLightboxImage(null)}
          onPrev={currentIndex > 0 ? handlePrev : undefined}
          onNext={currentIndex < images.length - 1 ? handleNext : undefined}
        />
      )}
    </>
  )
}
