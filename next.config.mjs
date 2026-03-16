/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      // Add your Cloudflare CDN domain here when deploying
      // NOTE: If your domain is proxied through Cloudflare, disable Cloudflare's
      // "Mirage" image optimization on the subdomain to avoid conflicts with
      // Next.js image optimization. Use a non-proxied (DNS-only) subdomain for
      // image assets, or use unoptimized: true and handle optimization at the edge.
    ],
  },
}

export default nextConfig
