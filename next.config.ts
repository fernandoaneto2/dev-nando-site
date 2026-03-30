import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Opcional: Se você usa imagens do Next.js (<Image />),
  // o export estático não suporta a otimização padrão.
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
