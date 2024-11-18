import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	assetPrefix: '/static',
	experimental: {
		turbo: {},
	},
};

export default nextConfig;
