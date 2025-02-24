import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: "/countdown-babi", 
  basePath: "/countdown-babi", // แก้เป็นชื่อ repository ของคุณ
};

export default nextConfig;