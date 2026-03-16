import Image from 'next/image'
import { heroImage, galleryImages } from '@/lib/images'
import Gallery from '@/components/Gallery'

// Water ripple effect commented out for performance — re-enable by uncommenting below:
// import dynamic from 'next/dynamic'
// const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Plain hero image — fast loading */}
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
        {/* Uncomment to re-enable water ripple shader:
        <HeroScene
          imageSrc={heroImage.src}
          imageWidth={heroImage.width}
          imageHeight={heroImage.height}
        /> */}
      </section>

      {/* Gallery */}
      <section className="px-1 py-1">
        <Gallery images={galleryImages} />
      </section>
    </>
  )
}
