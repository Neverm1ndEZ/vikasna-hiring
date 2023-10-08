/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				SF: ["SF Pro Display", "sans-serif"],
				PS2P: ["Press Start 2P", "cursive"],
				Inter: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
