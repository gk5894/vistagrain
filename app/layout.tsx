import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: {
    default: 'vistagrain — Light. Color. Memory.',
    template: '%s | vistagrain',
  },
  description:
    'vistagrain is the portfolio of a NYC-based photographer working across astrophotography, analog film, urban, and street photography.',
  openGraph: {
    title: 'vistagrain — Light. Color. Memory.',
    description:
      'NYC-based photographer working across astrophotography, analog film, urban, and street photography.',
    url: 'https://vistagrain.com',
    siteName: 'vistagrain',
    images: [
      {
        url: 'https://picsum.photos/seed/hero/1200/630',
        width: 1200,
        height: 630,
        alt: 'vistagrain portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vistagrain — Light. Color. Memory.',
    description: 'NYC-based photographer working across astrophotography, film, urban, and street.',
    images: ['https://picsum.photos/seed/hero/1200/630'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#675d52] text-white font-sans font-bold antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
