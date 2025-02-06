import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co", // Eğer placeholder resimleri kullanıyorsan
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // Amazon'dan gelen resimler için
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io", // ImageKit kullanıyorsan
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary resimleri için
      },
      {
        protocol: "https",
        hostname: "cdn.example.com", // Yeni kullandığın görsel kaynağı buraya ekle
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
