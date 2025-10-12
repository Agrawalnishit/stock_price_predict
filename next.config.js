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
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  }
}

module.exports = nextConfig