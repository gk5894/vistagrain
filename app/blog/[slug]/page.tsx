import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <article className="pt-20 lg:pt-0">
      {/* Header image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          quality={90}
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-16 pb-12">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#c8a96e] mb-3">
            {post.category} — {post.readTime}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide max-w-2xl">{post.title}</h1>
          <p className="mt-3 text-sm text-[#f5f5f0]/50">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
      </div>

      {/* Prose */}
      <div className="max-w-2xl mx-auto px-6 py-16 prose prose-invert prose-sm md:prose-base prose-headings:font-serif prose-headings:tracking-wide prose-p:text-[#f5f5f0]/70 prose-p:leading-relaxed prose-a:text-[#c8a96e] prose-strong:text-[#f5f5f0]">
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}
