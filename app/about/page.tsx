import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About',
  description: 'NYC-based photographer working across astrophotography, film, and street.',
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
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-8">About</h1>

          <div className="space-y-5 text-[#f5f5f0]/70 leading-relaxed text-sm max-w-lg">
            <p>
              vistagrain is the work of a New York City-based photographer documenting the boundaries
              between natural and urban worlds — the Milky Way over Hudson Valley ridgelines, the
              grain of analog film running through Lower East Side alleyways, the geometry hidden in
              Bronx brutalism.
            </p>
            <p>
              The practice spans astrophotography, analog film, street, and architectural work. Every
              frame is an attempt to find stillness inside motion — to hold a moment that the eye
              passes over, the memory keeps.
            </p>
            <p>
              Based in Brooklyn. Available for editorial, commercial, and fine art commissions
              worldwide.
            </p>
          </div>

          <div className="mt-12 pt-10 border-t border-white/10">
            <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#f5f5f0]/40 mb-5">
              Selected Clients &amp; Publications
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-[#f5f5f0]/60">
              {[
                'The New York Times',
                'Aperture Magazine',
                'National Geographic',
                'New York Magazine',
                'Time',
                'Le Monde',
                'Vogue Italia',
                'The Guardian',
              ].map((client) => (
                <li key={client} className="text-xs tracking-wide">{client}</li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex gap-6">
            <a
              href="mailto:hello@vistagrain.com"
              className="text-[11px] tracking-[0.15em] uppercase text-[#f5f5f0]/50 hover:text-[#c8a96e] transition-colors"
            >
              hello@vistagrain.com
            </a>
            <a
              href="https://instagram.com/vistagrain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.15em] uppercase text-[#f5f5f0]/50 hover:text-[#c8a96e] transition-colors"
            >
              @vistagrain
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
