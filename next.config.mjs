/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev-wordpress-ninjas.pantheonsite.io',
      },
    ],
  },
};

export default nextConfig; // Use `export default` instead of `module.exports`
