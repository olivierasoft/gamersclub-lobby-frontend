/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			height: {
				"657px": "657px"
			},
			width: {
				"540px": "540px"
			},
			colors: {
				navbar: "#1f1f1f",
				white: "#fff",
				optionHover: "rgba(255, 255, 255, 0.04)"
			},
			fontFamily: {
				sora: "Sora",
				archivo: "Archivo"
			},
			backgroundImage: {
				"login-gamersclub": "url('./src/assets/login-gc-bg.jpg')"
			}
		}
	},
	plugins: []
};
