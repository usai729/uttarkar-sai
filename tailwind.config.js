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
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
