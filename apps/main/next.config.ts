import type { NextConfig } from "next";

const DOCS_URL = 'http://localhost:8001';  // docs app is running here
const nextConfig: NextConfig = {
	assetPrefix: '/docs-static',
	async rewrites() {
		return [
			{
				source: '/docs',
				destination: `${DOCS_URL}/docs`,  // This should correctly route the /docs path
			},
			{
				source: '/docs/:path*',
				destination: `${DOCS_URL}/docs/:path*`,  // Ensure the path is passed correctly
			},
			{
				source: '/docs-static/:path*',
				destination: `${DOCS_URL}/docs-static/:path*`,  // Static files must be accessible from this path
			},
		]
	},
};

export default nextConfig;
