/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sf: ["SF Pro Display", "sans-serif"],
				start: "'Press Start 2P'",
				Inter: ["Inter", "sans-serif"],
				monument: 'monument',
				obra: 'obrazec',
				sherika: 'sherika',
			},
		},
	},
	plugins: [],
};
