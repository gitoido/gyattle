/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  output: 'export',
  basePath: '/gyattle',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
