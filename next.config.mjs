/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required if you're using `next export` (static HTML)
  },
  output: 'standalone', // Critical for Render deployments
  trailingSlash: true, // Helps with static hosting compatibility
}

export default nextConfig