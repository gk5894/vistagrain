import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="grid md:grid-cols-[2fr_3fr] gap-6 py-10 border-b border-white/10 hover:border-white/20 transition-colors">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            quality={90}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-3">
            {post.category} — {post.readTime}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide mb-3 group-hover:text-[#f5f5f0]/80 transition-colors">
            {post.title}
          </h2>
          <p className="text-sm text-[#f5f5f0]/50 leading-relaxed mb-4">{post.excerpt}</p>
          <span className="text-[10px] tracking-widest uppercase text-[#f5f5f0]/30">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
      </div>
    </Link>
  )
}
