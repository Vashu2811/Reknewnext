// module.exports = {
//   output: 'export', // Enables static export
//   trailingSlash: true, // Ensures proper static routing
//   images: {
//     unoptimized: true, // Disables Next.js image optimization
//   },
// };
import 'dotenv/config';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-example.com',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;