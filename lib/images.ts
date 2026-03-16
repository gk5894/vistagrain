export type Category = 'ASTRO' | 'FILM' | 'URBAN' | 'STREET' | 'LANDSCAPES'

export interface GalleryImage {
  id: number
  src: string
  width: number
  height: number
  category: Category
  alt: string
  caption?: string
}

// Picsum photos seeded by ID for consistency
// Real images: drop into /public/images/ and update src to '/images/filename.jpg'
export const galleryImages: GalleryImage[] = [
  // ASTRO
  { id: 1, src: 'https://picsum.photos/seed/astro1/1200/800', width: 1200, height: 800, category: 'ASTRO', alt: 'Milky Way over Hudson Valley', caption: 'Hudson Valley, NY — 2024' },
  { id: 2, src: 'https://picsum.photos/seed/astro2/800/1200', width: 800, height: 1200, category: 'ASTRO', alt: 'Star trails over lake', caption: 'Adirondacks, NY — 2024' },
  { id: 3, src: 'https://picsum.photos/seed/astro3/1200/900', width: 1200, height: 900, category: 'ASTRO', alt: 'Night sky with nebula', caption: 'Catskills, NY — 2023' },
  { id: 4, src: 'https://picsum.photos/seed/astro4/900/1200', width: 900, height: 1200, category: 'ASTRO', alt: 'Long exposure stars', caption: 'Upstate NY — 2023' },
  { id: 5, src: 'https://picsum.photos/seed/astro5/1400/900', width: 1400, height: 900, category: 'ASTRO', alt: 'Comet over ridge', caption: 'Shawangunk Ridge, NY — 2024' },
  // FILM
  { id: 6, src: 'https://picsum.photos/seed/film1/800/1000', width: 800, height: 1000, category: 'FILM', alt: 'Analog portrait on Kodak Portra', caption: 'Brooklyn, NY — 2024' },
  { id: 7, src: 'https://picsum.photos/seed/film2/1000/700', width: 1000, height: 700, category: 'FILM', alt: 'Film grain cityscape', caption: 'Lower East Side, NY — 2024' },
  { id: 8, src: 'https://picsum.photos/seed/film3/700/1000', width: 700, height: 1000, category: 'FILM', alt: 'Double exposure on Ilford HP5', caption: 'Williamsburg, NY — 2023' },
  { id: 9, src: 'https://picsum.photos/seed/film4/1100/800', width: 1100, height: 800, category: 'FILM', alt: 'Window light portrait', caption: 'Manhattan, NY — 2023' },
  { id: 10, src: 'https://picsum.photos/seed/film5/800/1100', width: 800, height: 1100, category: 'FILM', alt: 'Street corner on Fuji 400H', caption: 'Chelsea, NY — 2024' },
  { id: 11, src: 'https://picsum.photos/seed/film6/1200/850', width: 1200, height: 850, category: 'FILM', alt: 'Sunset on slide film', caption: 'Coney Island, NY — 2023' },
  // URBAN
  { id: 12, src: 'https://picsum.photos/seed/urban1/1200/800', width: 1200, height: 800, category: 'URBAN', alt: 'NYC skyline at dusk', caption: 'Brooklyn Bridge, NY — 2024' },
  { id: 13, src: 'https://picsum.photos/seed/urban2/800/1200', width: 800, height: 1200, category: 'URBAN', alt: 'Subway architecture', caption: 'Grand Central, NY — 2024' },
  { id: 14, src: 'https://picsum.photos/seed/urban3/1100/750', width: 1100, height: 750, category: 'URBAN', alt: 'Fire escape geometry', caption: 'SoHo, NY — 2023' },
  { id: 15, src: 'https://picsum.photos/seed/urban4/750/1100', width: 750, height: 1100, category: 'URBAN', alt: 'Rain reflections on pavement', caption: 'Midtown, NY — 2024' },
  { id: 16, src: 'https://picsum.photos/seed/urban5/1300/870', width: 1300, height: 870, category: 'URBAN', alt: 'Brutalist facade study', caption: 'Bronx, NY — 2023' },
  { id: 17, src: 'https://picsum.photos/seed/urban6/870/1300', width: 870, height: 1300, category: 'URBAN', alt: 'Neon signs in rain', caption: 'Times Square, NY — 2024' },
  // STREET
  { id: 18, src: 'https://picsum.photos/seed/street1/1000/700', width: 1000, height: 700, category: 'STREET', alt: 'Morning commuters', caption: 'Penn Station, NY — 2024' },
  { id: 19, src: 'https://picsum.photos/seed/street2/700/1000', width: 700, height: 1000, category: 'STREET', alt: 'Vendor at dusk', caption: 'Chinatown, NY — 2024' },
  { id: 20, src: 'https://picsum.photos/seed/street3/1200/800', width: 1200, height: 800, category: 'STREET', alt: 'Silhouette in fog', caption: 'Prospect Park, NY — 2023' },
  { id: 21, src: 'https://picsum.photos/seed/street4/800/1200', width: 800, height: 1200, category: 'STREET', alt: 'Kids on stoop', caption: 'Harlem, NY — 2024' },
  { id: 22, src: 'https://picsum.photos/seed/street5/1100/800', width: 1100, height: 800, category: 'STREET', alt: 'Midnight diner', caption: 'East Village, NY — 2023' },
  { id: 23, src: 'https://picsum.photos/seed/street6/800/1100', width: 800, height: 1100, category: 'STREET', alt: 'Skater under bridge', caption: 'DUMBO, NY — 2024' },
  { id: 24, src: 'https://picsum.photos/seed/street7/1400/900', width: 1400, height: 900, category: 'STREET', alt: 'Jazz musician on corner', caption: 'Washington Square, NY — 2024' },
  // LANDSCAPES
  { id: 25, src: '/images/6B1A4133.JPG', width: 6343, height: 3568, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 26, src: '/images/6B1A4222.JPG', width: 5666, height: 3187, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 27, src: '/images/6B1A4280.JPG', width: 5832, height: 3281, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 28, src: '/images/6B1A4356.jpg', width: 6596, height: 3710, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 29, src: '/images/6B1A4417.jpg', width: 5534, height: 3113, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 30, src: '/images/6B1A4455.JPG', width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 31, src: '/images/6B1A4518.JPG', width: 4682, height: 2634, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 32, src: '/images/6B1A4526.jpg', width: 6694, height: 3765, category: 'LANDSCAPES', alt: 'Landscape' },
]

export const heroImage: GalleryImage = {
  id: 0,
  src: '/images/Homep/IMG_1692.JPG',
  width: 3089,
  height: 2048,
  category: 'LANDSCAPES',
  alt: 'vistagrain hero',
}
