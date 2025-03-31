/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || ''
  },
  experimental: {
    outputFileTracingRoot: "/home/ttapp/webapps/ttapp/current"
  }
}

module.exports = nextConfig
