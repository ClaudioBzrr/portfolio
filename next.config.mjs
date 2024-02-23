import process from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  distDir: 'dist',
};

process.env.NODE_ENV == 'production' ? (nextConfig.output = 'export') : null;

export default nextConfig;
