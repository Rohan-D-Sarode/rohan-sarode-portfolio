import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // You can add more remotePatterns if you need to allow more domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**', // allows any path, or you can restrict to /djy3sowmo/** if you want
      },
    ],
  },
};

export default nextConfig;
