import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "docs", // GitHub pages uses from docs as base directory
            fallback: "index.html",
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : "/photopea-sketchfab"
        }
    }
};

export default config;
