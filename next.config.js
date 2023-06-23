const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});
const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */

const nextConfig = withTwin(
  withBundleAnalyzer({ 
    reactStrictMode: false,
    swcMinify: true,
    images: {
          domains: ['www.notion.so'],
        },
  })
);

module.exports = nextConfig
