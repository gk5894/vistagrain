import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Vistagrain — Light. Color. Memory.',
    template: '%s | Vistagrain',
  },
  description:
    'Vistagrain is the portfolio of Gaurav Kshirsagar, a New York City photographer working across film, street, astrophotography, and landscapes.',
  openGraph: {
    title: 'Vistagrain — Light. Color. Memory.',
    description:
      'Portfolio of Gaurav Kshirsagar — NYC photographer working across film, street, and landscape photography.',
    url: 'https://vistagrain.com',
    siteName: 'Vistagrain',
    images: [
      {
        url: 'https://vistagrain.com/images/Homep/IMG_1692.JPG',
        width: 3089,
        height: 2048,
        alt: 'Vistagrain — photography portfolio by Gaurav Kshirsagar',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vistagrain — Light. Color. Memory.',
    description: 'Portfolio of Gaurav Kshirsagar — NYC photographer.',
    images: ['https://vistagrain.com/images/Homep/IMG_1692.JPG'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-[#f0ede8] font-sans antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
