const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})
const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */

const nextConfig = withTwin(
  withBundleAnalyzer({
    reactStrictMode: false,
    swcMinify: true,
    images: {
      domains: [
        'res.cloudinary.com',
        'www.notion.so',
        'notion.so',
        'images.unsplash.com',
        'pbs.twimg.com',
        'abs.twimg.com',
        's3.us-west-2.amazonaws.com',
        'transitivebullsh.it',
        'prod-files-secure.s3.us-west-2.amazonaws.com',
      ],
    },
    experimental: {
      serverActions: true,
    },
    formats: ['image/avif', 'image/webp'],
  }),
)

module.exports = nextConfig
