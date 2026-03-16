import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Notes on photography, process, and light.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 px-6 md:px-10 pb-16">
      <h1 className="font-serif text-4xl md:text-5xl tracking-wide mb-2">Journal</h1>
      <p className="text-sm text-[#f5f5f0]/40 mb-12">Notes on photography, process, and light.</p>

      {posts.length === 0 ? (
        <p className="text-sm text-[#f5f5f0]/40">No posts yet.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
