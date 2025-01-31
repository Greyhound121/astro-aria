/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};

// tailwind.config.js
module.exports = {
	// ... other config
	theme: {
		extend: {
			animation: {
				scroll: 'scroll 20s linear infinite',
			},
		},
	},
}
