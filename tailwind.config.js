/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			borderWidth: {
				"1p5": "1.5px",
				1: "1px",
			},
			fontFamily: {
				micro5: '"Micro 5", sans-serif',
				"press-start": '"Press Start 2P", system-ui',
				poppins: '"Poppins", sans-serif',
				roboto: '"Roboto", sans-serif',
			},
			colors: {
				c1: "#14131A",
				beech: "#F7EBEC",
				phblue: "#8AC6D0",
				darkgray: "#121212",
				lightgray: "#1F1F1F",
				btnBlue: "#BB87FD",
				powderBlue: "#99B2DD",
			},
			boxShadow: {
				sha1: "rgba(255, 255, 255, 0.2) 0px 3px 8px",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
