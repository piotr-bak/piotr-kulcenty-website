/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    deviceSizes: [600, 768, 1200]
  }
}

module.exports = nextConfig;
