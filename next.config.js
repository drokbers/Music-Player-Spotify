/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['https://i.imgur.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.scdn.co',
            port: '',
            pathname: '/image/**',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**',
          },
          {
            protocol: 'https',
            hostname: 'static.dw.com',
            port: '',
            pathname: '/image/**',
          },
          {
            protocol: 'https',
            hostname: '**.imgur.com',
          },
        ],
      },
}

module.exports = nextConfig
