import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
