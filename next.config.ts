import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/your-repo-name", // แก้เป็นชื่อ repository ของคุณ
  images: {
    unoptimized: true, // จำเป็นสำหรับ Next.js Export
  },
};

export default nextConfig;