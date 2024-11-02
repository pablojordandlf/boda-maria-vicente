/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint checks during builds
  },
};

module.exports = nextConfig;