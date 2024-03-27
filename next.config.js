/** @type {import('next').NextConfig} */

const nextConfig = {

  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'socios.excellencebusinessclub.com'
      }

    ]
  }

}

module.exports = nextConfig
