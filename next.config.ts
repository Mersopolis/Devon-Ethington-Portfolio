import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build', // Changes the build output directory to `build`
  basePath: process.env.PAGES_BASE_PATH,
}

module.exports = {
  images: {
    unoptimized: true,
  }
}
 
export default nextConfig