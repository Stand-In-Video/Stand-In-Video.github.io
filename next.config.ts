import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // 关闭 Image Optimization API，适配 next export
  },
  eslint: {
    ignoreDuringBuilds: true, // ← 构建时忽略 ESLint 错误
  },
};

export default nextConfig;
