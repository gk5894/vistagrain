export type Category = 'FILM' | 'LANDSCAPES' | 'STREET'

export interface GalleryImage {
  id: number
  src: string
  width: number
  height: number
  category: Category
  alt: string
  caption?: string
}

export const galleryImages: GalleryImage[] = [
  // FILM
  { id: 1,  src: '/images/Film/IMG_0231.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 2,  src: '/images/Film/IMG_0242.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 3,  src: '/images/Film/IMG_0243.jpg', width: 2048, height: 3089, category: 'FILM', alt: 'Film' },
  { id: 4,  src: '/images/Film/IMG_0244.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 5,  src: '/images/Film/IMG_0256.jpg', width: 2048, height: 3089, category: 'FILM', alt: 'Film' },
  { id: 6,  src: '/images/Film/IMG_0260.jpg', width: 1499, height: 1873, category: 'FILM', alt: 'Film' },
  { id: 7,  src: '/images/Film/IMG_0619.jpg', width: 4485, height: 6764, category: 'FILM', alt: 'Film' },
  { id: 8,  src: '/images/Film/IMG_0621.jpg', width: 4490, height: 6771, category: 'FILM', alt: 'Film' },
  { id: 9,  src: '/images/Film/IMG_0636.JPG', width: 6774, height: 4492, category: 'FILM', alt: 'Film' },
  { id: 10, src: '/images/Film/IMG_0637.JPG', width: 6774, height: 4492, category: 'FILM', alt: 'Film' },
  { id: 11, src: '/images/Film/IMG_1690.jpg', width: 2839, height: 1893, category: 'FILM', alt: 'Film' },
  { id: 12, src: '/images/Film/IMG_1722.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 13, src: '/images/Film/IMG_2988.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 14, src: '/images/Film/IMG_2990.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 15, src: '/images/Film/IMG_3004.jpg', width: 2373, height: 1948, category: 'FILM', alt: 'Film' },
  { id: 16, src: '/images/Film/IMG_3008.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 17, src: '/images/Film/IMG_3013.jpg', width: 2048, height: 3089, category: 'FILM', alt: 'Film' },
  { id: 18, src: '/images/Film/IMG_3015.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 19, src: '/images/Film/IMG_3049.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 20, src: '/images/Film/IMG_3052.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 21, src: '/images/Film/IMG_3058.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 22, src: '/images/Film/IMG_3059.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 23, src: '/images/Film/IMG_3062.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 24, src: '/images/Film/IMG_3072.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 25, src: '/images/Film/IMG_3074.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 26, src: '/images/Film/IMG_3076.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 27, src: '/images/Film/IMG_9278.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 28, src: '/images/Film/IMG_9280.jpg', width: 2046, height: 2558, category: 'FILM', alt: 'Film' },
  { id: 29, src: '/images/Film/IMG_9283.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 30, src: '/images/Film/IMG_9285.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 31, src: '/images/Film/IMG_9289.jpg', width: 1638, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 32, src: '/images/Film/IMG_9304.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },
  { id: 33, src: '/images/Film/IMG_9312.jpg', width: 2046, height: 3086, category: 'FILM', alt: 'Film' },
  { id: 34, src: '/images/Film/IMG_9313.JPG', width: 3089, height: 2048, category: 'FILM', alt: 'Film' },

  // LANDSCAPES
  { id: 35, src: '/images/Landscapes/6B1A1436%20Edited.JPG', width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 36, src: '/images/Landscapes/6B1A2392-HDR.jpg',      width: 6234, height: 3507, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 37, src: '/images/Landscapes/6B1A3407.jpg',          width: 5425, height: 3408, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 38, src: '/images/Landscapes/6B1A4133.JPG',          width: 6343, height: 3568, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 39, src: '/images/Landscapes/6B1A4222.JPG',          width: 5666, height: 3187, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 40, src: '/images/Landscapes/6B1A4280.JPG',          width: 5832, height: 3281, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 41, src: '/images/Landscapes/6B1A4356.jpg',          width: 6596, height: 3710, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 42, src: '/images/Landscapes/6B1A4417.jpg',          width: 5534, height: 3113, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 43, src: '/images/Landscapes/6B1A4455.JPG',          width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 44, src: '/images/Landscapes/6B1A4518.JPG',          width: 4682, height: 2634, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 45, src: '/images/Landscapes/6B1A4526.jpg',          width: 6694, height: 3765, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 46, src: '/images/Landscapes/6B1A8464.JPG',          width: 6629, height: 3729, category: 'LANDSCAPES', alt: 'Landscape' },
  { id: 47, src: '/images/Landscapes/IMG_4973.JPG',          width: 5027, height: 3375, category: 'LANDSCAPES', alt: 'Landscape' },

  // STREET
  { id: 48, src: '/images/Street/IMG_0232.jpg',  width: 2268,  height: 4032,  category: 'STREET', alt: 'Street' },
  { id: 49, src: '/images/Street/IMG_9659.JPG',  width: 4032,  height: 3024,  category: 'STREET', alt: 'Street' },
  // NOTE: The remaining Street images are HEIC format — not supported in Chrome/Firefox.
  // Convert to JPG and re-add here, or they will only display in Safari.
  // { id: 50, src: '/images/Street/IMG_0097.heic',  width: 2201, height: 3913, category: 'STREET', alt: 'Street' },
  // { id: 51, src: '/images/Street/IMG_1061.heic',  width: 3024, height: 4032, category: 'STREET', alt: 'Street' },
  // { id: 52, src: '/images/Street/IMG_1235.heic',  width: 6048, height: 8064, category: 'STREET', alt: 'Street' },
  // { id: 53, src: '/images/Street/IMG_1810.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street' },
  // { id: 54, src: '/images/Street/IMG_2033.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street' },
  // { id: 55, src: '/images/Street/IMG_2552.heic',  width: 3024, height: 3780, category: 'STREET', alt: 'Street' },
  // { id: 56, src: '/images/Street/IMG_2896.heic',  width: 3024, height: 4032, category: 'STREET', alt: 'Street' },
  // { id: 57, src: '/images/Street/IMG_2974.heic',  width: 4185, height: 7440, category: 'STREET', alt: 'Street' },
  // { id: 58, src: '/images/Street/IMG_4320.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street' },
  // { id: 59, src: '/images/Street/IMG_4354.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street' },
]

export const heroImage: GalleryImage = {
  id: 0,
  src: '/images/Homep/IMG_1692.JPG',
  width: 3089,
  height: 2048,
  category: 'LANDSCAPES',
  alt: 'vistagrain hero',
}
