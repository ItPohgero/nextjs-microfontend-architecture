import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	assetPrefix: '/docs-static',
	experimental: {
		turbo: {},
	},
};

export default nextConfig;
