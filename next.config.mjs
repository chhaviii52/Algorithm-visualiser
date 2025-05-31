//  @type {import('next').NextConfig}

// Detect deployment environment
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const isProduction = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
    images: {
        unoptimized: true
    },
    // Apply GitHub Pages configuration only when needed
    ...(isGithubPages && {
        output: 'export',
        distDir: './build',
        assetPrefix: '/AlgorithmVisualizer',
        basePath: '/AlgorithmVisualizer',
    })
}
   
export default nextConfig;