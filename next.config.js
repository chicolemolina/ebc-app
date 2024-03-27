/** @type {import('next').NextConfig} */

const nextConfig = {

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
