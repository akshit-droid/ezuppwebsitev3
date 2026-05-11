/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  transpilePackages: ["three"],
  async redirects() {
    return [
      { source: "/solutions/fleet", destination: "/solutions/sales-fleet", permanent: true },
      { source: "/solutions/distributor", destination: "/solutions/distributor_app", permanent: true },
      { source: "/solutions/supply", destination: "/solutions/supply-chain", permanent: true },
      { source: "/solutions/loyalty", destination: "/solutions/loyalty-app", permanent: true },
      { source: "/solutions/ai", destination: "/solutions/enterprise-ai", permanent: true },
      { source: "/solutions/crm", destination: "/solutions/crm-sales-support", permanent: true },
      { source: "/solutions/warranty", destination: "/solutions/digital-warranty", permanent: true },
    ];
  },
};

export default nextConfig;
