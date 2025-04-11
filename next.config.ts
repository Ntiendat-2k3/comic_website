import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.otruyenapi.com',
      },
    ],
  },
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
