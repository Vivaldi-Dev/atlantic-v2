/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      'api.panoramatours.co.mz',
      'localhost',
      '127.0.0.1',
      '192.168.137.128',
      '192.168.137.171',
      '10.42.0.46',
      '192.168.50.190',
      '192.168.18.160'
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.API_URL,
    NEXT_PUBLIC_BASE_IMAGE_URL: process.env.BASE_IMAGE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
