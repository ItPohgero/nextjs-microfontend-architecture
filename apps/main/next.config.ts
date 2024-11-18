import type { NextConfig } from "next";

const apps = [
	{ name: 'docs', url: 'http://localhost:8001', prefix: '/docs' },
	{ name: 'articles', url: 'http://localhost:8002', prefix: '/articles' },
];

const createRewrites = (apps: { name: string, url: string, prefix: string }[]) => {
	return apps.flatMap(app => [
		{ source: `${app.prefix}`, destination: `${app.url}${app.prefix}` },
		{ source: `${app.prefix}/:path*`, destination: `${app.url}${app.prefix}/:path*` },
		{ source: `/static/:path*`, destination: `${app.url}/static/:path*` }, // Ensure correct static asset routing
	]);
};

const nextConfig: NextConfig = {
	assetPrefix: '',
	experimental: {
		turbo: {},
	},
	async rewrites() {
		return createRewrites(apps);
	},
	staticPageGenerationTimeout: 60,
};

export default nextConfig;
