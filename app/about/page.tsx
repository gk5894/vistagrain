import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'NYC-based photographer capturing light, landscapes, and moments just outside of time.',
}

export default function AboutPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Portrait */}
        <div className="relative h-[60vh] lg:h-screen lg:sticky lg:top-0">
          <Image
            src="https://picsum.photos/seed/portrait/900/1200"
            alt="Photographer portrait"
            fill
            quality={90}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Bio */}
        <div className="px-8 md:px-12 lg:px-16 py-16 lg:py-24 flex flex-col justify-center">
          <h1
            className="text-4xl md:text-5xl mb-10 text-[#f0ede8]"
            style={{ fontFamily: 'Gloock, serif', fontWeight: 400, letterSpacing: '0.01em' }}
          >
            About Me
          </h1>

          <div
            className="space-y-6 text-[#f0ede8]/80 leading-[1.85] text-[15px] md:text-[16px] max-w-lg"
            style={{ fontFamily: 'SpecialElite, serif' }}
          >
            <p>Hi, my name is Gaurav.</p>
            <p>
              I photograph what lingers — light that slips through unnoticed, spaces that feel
              paused, moments that sit just outside of time. Much of the work comes from living in
              New York, but not all of it. I carry the same instinct wherever I go.
            </p>
            <p>
              On the streets, I&apos;m drawn to people — brief encounters, passing expressions, the
              kind of characters you only notice if you&apos;re looking for them. Elsewhere, the
              focus shifts to vast landscapes, quiet cityscapes, and architectural forms, but the
              intention stays the same: to capture a feeling rather than a record.
            </p>
            <p>
              I approach images the way a painter might, shaping light, color, and atmosphere until
              the scene feels remembered rather than simply seen — influenced by Edward Hopper,
              Claude Monet, and Jacques-Louis David.
            </p>
            <p>Vistagrain is where all of it comes together.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
