import dynamic from 'next/dynamic'
import { heroImage, galleryImages } from '@/lib/images'
import Gallery from '@/components/Gallery'

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false })

export default function HomePage() {
  return (
    <>
      {/* Hero — clean full-bleed image with water ripple shader */}
      <section className="relative h-screen w-full overflow-hidden">
        <HeroScene
          imageSrc={heroImage.src}
          imageWidth={heroImage.width}
          imageHeight={heroImage.height}
        />
      </section>

      {/* Gallery */}
      <section className="px-1 py-1">
        <Gallery images={galleryImages} />
      </section>
    </>
  )
}
