/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.studiodireto.com.br',
      },
    ],
  },};

export default nextConfig;
