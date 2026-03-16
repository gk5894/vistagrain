'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { GalleryImage } from '@/lib/images'

interface ImageCardProps {
  image: GalleryImage
  onClick: (image: GalleryImage) => void
  index: number
}

export default function ImageCard({ image, onClick, index }: ImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group cursor-pointer overflow-hidden"
      onClick={() => onClick(image)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={90}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-[10px] tracking-widest text-[#f5f5f0]/80 uppercase">{image.caption}</p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
