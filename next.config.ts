import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 关闭 Image Optimization API，适配 next export
  },
};

export default nextConfig;
