import Image from 'next/image'
import { heroImage, galleryImages } from '@/lib/images'
import Gallery from '@/components/Gallery'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          quality={90}
          priority
          loading="eager"
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-start justify-center pl-10 md:pl-16">
          <h1 className="font-[family-name:var(--font-silkscreen)] text-4xl md:text-6xl lg:text-7xl tracking-[0.15em] uppercase text-[#f5f5f0] animate-fade-in">
            vistagrain
          </h1>
          <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#f5f5f0]/60">
            Light. Color. Memory.
          </p>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#f5f5f0]/30">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#f5f5f0]/30 to-transparent" />
        </div>
      </section>

      {/* Gallery */}
      <section className="px-4 md:px-8 py-16 lg:py-24">
        <Gallery images={galleryImages} />
      </section>
    </>
  )
}
