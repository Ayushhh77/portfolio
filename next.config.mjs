/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export', // Forces static HTML export
  trailingSlash: true, // Better compatibility with static hosts
}

export default nextConfig