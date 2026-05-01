export type Category = 'FILM' | 'LANDSCAPES' | 'STREET' | 'PEOPLE'

export interface GalleryImage {
  id: number
  src: string
  width: number
  height: number
  category: Category
  alt: string
  caption?: string
}

// Images are interleaved across categories so the home page gallery
// shows a mixed feed rather than one category at a time.
export const galleryImages: GalleryImage[] = [
  { id: 1,  src: '/images/Landscapes/6B1A1436%20Edited.JPG',      width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape photograph — wide vista, natural light' },
  { id: 2,  src: '/images/Film/IMG_0231.JPG',                      width: 3089, height: 2048, category: 'FILM',       alt: 'Film photograph — analog grain, New York City' },
  { id: 52, src: '/images/People/6B1A3972.jpg',                    width: 2259, height: 3388, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 3,  src: '/images/Landscapes/6B1A0842.jpg',                width: 5861, height: 4322, category: 'LANDSCAPES', alt: 'Landscape photograph — natural scenery' },
  { id: 4,  src: '/images/People/6B1A1517.JPG',                    width: 6720, height: 4480, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 5,  src: '/images/Landscapes/6B1A2392-HDR.jpg',            width: 6234, height: 3507, category: 'LANDSCAPES', alt: 'HDR landscape — wide sky, natural scenery' },
  { id: 6,  src: '/images/Film/IMG_0244.JPG',                      width: 3089, height: 2048, category: 'FILM',       alt: 'Film photograph — Kodak color negative' },
  { id: 53, src: '/images/People/6B1A4391%20Edited%202.JPG',       width: 6065, height: 4116, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 7,  src: '/images/Landscapes/6B1A1133.jpg',                width: 6062, height: 4480, category: 'LANDSCAPES', alt: 'Landscape photograph — natural light' },
  { id: 8,  src: '/images/People/Tezza-0826.JPG',                  width: 5775, height: 3851, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 9,  src: '/images/Landscapes/6B1A3407.jpg',                width: 5425, height: 3408, category: 'LANDSCAPES', alt: 'Landscape — open terrain, natural light' },
  { id: 54, src: '/images/People/6B1A4528%20Edited%202.JPG',       width: 3193, height: 3282, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 10, src: '/images/Film/IMG_0256.jpg',                      width: 2048, height: 3089, category: 'FILM',       alt: 'Film photograph — portrait orientation, analog' },
  { id: 11, src: '/images/Landscapes/6B1A2185.jpg',                width: 6718, height: 3779, category: 'LANDSCAPES', alt: 'Landscape photograph — open sky' },
  { id: 12, src: '/images/Street/IMG_0232.jpg',                    width: 2268, height: 4032, category: 'STREET',     alt: 'Street photograph — New York City' },
  { id: 55, src: '/images/People/6B1A4698%20Edited%202.JPG',       width: 4038, height: 2980, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 13, src: '/images/Landscapes/6B1A4133.JPG',                width: 6343, height: 3568, category: 'LANDSCAPES', alt: 'Wide landscape photograph — sky and horizon' },
  { id: 14, src: '/images/Film/IMG_1690.jpg',                      width: 2839, height: 1893, category: 'FILM',       alt: 'Film photograph — color negative, New York City' },
  { id: 15, src: '/images/People/Tezza-1111.JPG',                  width: 6720, height: 4480, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 16, src: '/images/Landscapes/6B1A2323.JPG',                width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape photograph — wide panorama' },
  { id: 56, src: '/images/People/6B1A4871%20Edited%202.JPG',       width: 3043, height: 4627, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 17, src: '/images/Film/IMG_3004.jpg',                      width: 2373, height: 1948, category: 'FILM',       alt: 'Film photograph — medium format, analog' },
  { id: 18, src: '/images/Landscapes/6B1A4222.JPG',                width: 5666, height: 3187, category: 'LANDSCAPES', alt: 'Landscape photograph — natural scenery, wide angle' },
  { id: 19, src: '/images/People/Tezza-1113.JPG',                  width: 5798, height: 3201, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 20, src: '/images/Landscapes/6B1A2373.jpg',                width: 6571, height: 3696, category: 'LANDSCAPES', alt: 'Landscape photograph — natural light, open terrain' },
  { id: 57, src: '/images/People/6B1A4932%20Edited%202.jpg',       width: 4626, height: 4480, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 21, src: '/images/Film/IMG_3008.JPG',                      width: 3089, height: 2048, category: 'FILM',       alt: 'Film photograph — color negative, New York City' },
  { id: 22, src: '/images/Landscapes/6B1A4280.JPG',                width: 5832, height: 3281, category: 'LANDSCAPES', alt: 'Landscape photograph — open vista, natural light' },
  { id: 23, src: '/images/People/Tezza-6786.JPG',                  width: 5957, height: 4081, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 24, src: '/images/Landscapes/6B1A2843.jpg',                width: 6428, height: 3616, category: 'LANDSCAPES', alt: 'Landscape photograph — wide horizon' },
  { id: 58, src: '/images/People/6B1A7504%20Edited.JPG',           width: 5600, height: 4480, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 25, src: '/images/Film/IMG_3049.JPG',                      width: 3089, height: 2048, category: 'FILM',       alt: 'Film photograph — analog, color negative' },
  { id: 26, src: '/images/Landscapes/6B1A4356.jpg',                width: 6596, height: 3710, category: 'LANDSCAPES', alt: 'Wide landscape — sky and terrain photography' },
  { id: 27, src: '/images/Street/IMG_9659.JPG',                    width: 4032, height: 3024, category: 'STREET',     alt: 'Street photograph — New York City street scene' },
  { id: 59, src: '/images/People/Tezza-1159.jpg',                  width: 6720, height: 4480, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 28, src: '/images/Landscapes/6B1A3117.jpg',                width: 6271, height: 4181, category: 'LANDSCAPES', alt: 'Landscape photograph — natural scenery' },
  { id: 29, src: '/images/Film/IMG_3074.jpg',                      width: 2046, height: 3086, category: 'FILM',       alt: 'Film photograph — portrait frame, analog' },
  { id: 30, src: '/images/People/Tezza-7499.JPG',                  width: 5547, height: 3495, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 31, src: '/images/Landscapes/6B1A4417.jpg',                width: 5534, height: 3113, category: 'LANDSCAPES', alt: 'Landscape photograph — natural scene, wide frame' },
  { id: 60, src: '/images/People/Tezza-2208.JPG',                  width: 2987, height: 4480, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 32, src: '/images/Film/IMG_3076.JPG',                      width: 3089, height: 2048, category: 'FILM',       alt: 'Film photograph — horizontal, Kodak emulsion' },
  { id: 33, src: '/images/Landscapes/6B1A3913.JPG',                width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape photograph — natural light, wide frame' },
  { id: 34, src: '/images/People/Tezza-9861.JPG',                  width: 2525, height: 3230, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 35, src: '/images/Landscapes/6B1A4455.JPG',                width: 6720, height: 3780, category: 'LANDSCAPES', alt: 'Landscape photograph — golden light, open terrain' },
  { id: 61, src: '/images/People/Tezza-3536.JPG',                  width: 2319, height: 2976, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 36, src: '/images/Film/IMG_9278.jpg',                      width: 2046, height: 3086, category: 'FILM',       alt: 'Film photograph — portrait orientation, analog' },
  { id: 37, src: '/images/Landscapes/6B1A8507-3.JPG',              width: 6583, height: 3703, category: 'LANDSCAPES', alt: 'Landscape photograph — wide vista' },
  { id: 38, src: '/images/Landscapes/6B1A4518.JPG',                width: 4682, height: 2634, category: 'LANDSCAPES', alt: 'Landscape photograph — wide horizon, natural scenery' },
  { id: 62, src: '/images/People/Tezza-4812%202.JPG',              width: 4480, height: 6419, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 39, src: '/images/Film/IMG_9313.JPG',                      width: 3089, height: 2048, category: 'FILM',       alt: 'Film photograph — wide frame, color negative' },
  { id: 40, src: '/images/Landscapes/6B1A4526.jpg',                width: 6694, height: 3765, category: 'LANDSCAPES', alt: 'Landscape photograph — open sky, wide vista' },
  { id: 41, src: '/images/Landscapes/IMG_1995.JPG',                width: 3840, height: 2160, category: 'LANDSCAPES', alt: 'Landscape photograph — wide frame' },
  { id: 63, src: '/images/People/Tezza-6399.JPG',                  width: 2409, height: 3011, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 42, src: '/images/Landscapes/6B1A8464.JPG',                width: 6629, height: 3729, category: 'LANDSCAPES', alt: 'Landscape photograph — natural light, wide frame' },
  { id: 43, src: '/images/Landscapes/IMG_2992.jpg',                width: 2359, height: 2950, category: 'LANDSCAPES', alt: 'Landscape photograph — portrait orientation' },
  { id: 44, src: '/images/Landscapes/6B1A1635%20Edited.JPG',       width: 6720, height: 2856, category: 'LANDSCAPES', alt: 'Landscape photograph — panoramic edit' },
  { id: 64, src: '/images/People/Tezza-7192.JPG',                  width: 4480, height: 6720, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 45, src: '/images/Landscapes/IMG_4624.JPG',                width: 3356, height: 4480, category: 'LANDSCAPES', alt: 'Landscape photograph — vertical frame' },
  { id: 46, src: '/images/Landscapes/IMG_4973.JPG',                width: 5027, height: 3375, category: 'LANDSCAPES', alt: 'Landscape photograph — natural scenery, open vista' },
  { id: 47, src: '/images/Landscapes/IMG_5000.jpg',                width: 4660, height: 3297, category: 'LANDSCAPES', alt: 'Landscape photograph — wide frame' },
  { id: 65, src: '/images/People/Tezza-9637.JPG',                  width: 5639, height: 4326, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 48, src: '/images/Landscapes/32BACDC7-871F-4188-8652-7904F5D52C43.JPG', width: 2883, height: 3603, category: 'LANDSCAPES', alt: 'Landscape photograph — portrait orientation' },
  { id: 49, src: '/images/Landscapes/6402D33E-C93B-42C0-8FF2-72CC9B52D0E5.JPG', width: 3734, height: 3645, category: 'LANDSCAPES', alt: 'Landscape photograph — natural scenery' },
  { id: 50, src: '/images/Landscapes/IMG_6509-1.JPG',              width: 3029, height: 2020, category: 'LANDSCAPES', alt: 'Landscape photograph — wide frame' },
  { id: 66, src: '/images/People/Tezza-9932%202.jpg',              width: 4480, height: 4673, category: 'PEOPLE',     alt: 'Portrait photograph' },
  { id: 51, src: '/images/Landscapes/Photo_1080295426_DJI_2_jpg_2990722_0_202011865212_photo_original.jpg', width: 3731, height: 1376, category: 'LANDSCAPES', alt: 'Aerial landscape photograph — drone photography' },

  // NOTE: Remaining Street images are HEIC format — not supported in Chrome/Firefox.
  // Convert to JPG and uncomment to enable.
  // { src: '/images/Street/IMG_0097.heic',  width: 2201, height: 3913, category: 'STREET', alt: 'Street photograph — NYC, vertical frame' },
  // { src: '/images/Street/IMG_1061.heic',  width: 3024, height: 4032, category: 'STREET', alt: 'Street photograph — New York City' },
  // { src: '/images/Street/IMG_1235.heic',  width: 6048, height: 8064, category: 'STREET', alt: 'Street photograph — NYC, high resolution' },
  // { src: '/images/Street/IMG_1810.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street photograph — New York City' },
  // { src: '/images/Street/IMG_2033.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street photograph — NYC urban scene' },
  // { src: '/images/Street/IMG_2552.heic',  width: 3024, height: 3780, category: 'STREET', alt: 'Street photograph — New York City' },
  // { src: '/images/Street/IMG_2896.heic',  width: 3024, height: 4032, category: 'STREET', alt: 'Street photograph — NYC' },
  // { src: '/images/Street/IMG_2974.heic',  width: 4185, height: 7440, category: 'STREET', alt: 'Street photograph — NYC, tall vertical frame' },
  // { src: '/images/Street/IMG_4320.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street photograph — New York City' },
  // { src: '/images/Street/IMG_4354.HEIC',  width: 3024, height: 4032, category: 'STREET', alt: 'Street photograph — NYC street scene' },
  // NOTE: IMG_4233.heic in Landscapes is HEIC format — convert to JPG to enable.
]

export const heroImage: GalleryImage = {
  id: 0,
  src: '/images/Homep/IMG_1692.JPG',
  width: 3089,
  height: 2048,
  category: 'LANDSCAPES',
  alt: 'Vistagrain — landscape photography by Gaurav Kshirsagar, New York',
}
