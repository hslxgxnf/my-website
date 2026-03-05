import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
};

export default nextConfig;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/web/css/at-rules/@:target",
        destination: "/web/css/at-rules/:target",
      },
    ];
  },
};
