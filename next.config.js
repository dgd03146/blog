const withTwin = require('./withTwin')
/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  // compiler: {
  //   styledComponents:
  //     true |
  //     {
  //       displayName: true,
  //       ssr: true,
  //     },
  // },
})

module.exports = nextConfig
