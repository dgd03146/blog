const withTwin = require('./withTwin')
/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.notion.so'],
  },
})

module.exports = nextConfig
