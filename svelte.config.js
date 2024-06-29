import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs", // GitHub pages uses from docs as base directory
			fallback: "404.html",
		})
	}
};

export default config;