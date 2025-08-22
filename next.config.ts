import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },

  /* other config options here */
};

module.exports = nextConfig;