/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
