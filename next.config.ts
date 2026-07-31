import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    // Next 16 n'autorise que les qualités déclarées ici.
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
