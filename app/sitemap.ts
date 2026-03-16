import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const blogEntries = posts.map((post) => ({
    url: `https://vistagrain.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    { url: 'https://vistagrain.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://vistagrain.com/work', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://vistagrain.com/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://vistagrain.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://vistagrain.com/contact', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.5 },
    ...blogEntries,
  ]
}
