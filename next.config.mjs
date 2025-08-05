// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // allow static export
  output: 'export',

  // ensure paths include /SwiftPod on GitHub Pages
  basePath: '/SwiftPod',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
