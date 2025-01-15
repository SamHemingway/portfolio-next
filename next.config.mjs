import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  experimental: {
    turbo: true,
  },
})({});

export default nextConfig;
