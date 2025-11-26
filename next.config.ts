import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["app.instantspinz.com",],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app.instantspinz.com',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
  async rewrites() {
    const backendUrl = process.env.NEXT_PUBLIC_BASE_URL || ""
    return [
      {
        source: '/api/backend/:path*',
        destination: `${backendUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
