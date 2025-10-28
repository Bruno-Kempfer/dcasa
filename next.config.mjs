/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

/**
 * Recommended Next.js config for deploying a static export to GitHub Pages
 * - output: 'export' to allow `next export` (static HTML)
 * - basePath + assetPrefix point to the repo subpath (e.g. /dcasa)
 * - assetPrefix is applied only in production to keep dev server normal
 * - trailingSlash makes routes folder-based which works well with gh-pages
 */
const nextConfig = {
  typescript: {
    // keep this if you want builds to succeed even with type errors
    ignoreBuildErrors: true,
  },
  images: {
    // disable Next's image optimization for static export
    unoptimized: true,
  },
  output: 'export',
  // adjust these to your GitHub repo name
  basePath: isProd ? '/dcasa' : '',
  assetPrefix: isProd ? '/dcasa' : '',
  trailingSlash: true,
}

export default nextConfig
