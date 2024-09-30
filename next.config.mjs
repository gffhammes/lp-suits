/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.studiodireto.com.br',
      },  {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },};

export default nextConfig;
