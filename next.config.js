/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://react-test-starwars.vercel.app/api/:path*`,
      },
      {
        source: '/images/:path*',
        destination: `https://react-test-starwars.vercel.app/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
