/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  },
  images: {
    domains: [],
    unoptimized: true
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'out',
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  assetPrefix: '',
  basePath: '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig