import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/msk-precision',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;
