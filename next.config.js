/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        domains: ['images.unsplash.com', 'tailwindui.com', 'source.unsplash.com'],
    },
    experimental: {
        serverActions: {
          bodySizeLimit: '10000mb',
        },
    },
}

module.exports = nextConfig
