/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				white: '#f5eded',
				red: '#d72323',
				turquoise: '#44d9e6',
				darkGray: '#3e3636',
			},
			spacing: {
				2: '0.5rem',
				4: '1rem',
				6: '1.5rem',
				8: '2rem',
			},
			fontSize: {
				sm: '1rem',
				md: '1.6rem',
				lg: '1.85rem',
				xl: '2rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [],
};
