import { createGlobalStyle, DefaultTheme } from "styled-components";

export enum ColorsEnum {
	primary = "#808a9d",
	secondary = "#cfd6e4",
	lapislazuli = "#26619c",
	lime = "#32cd32",
	red = "#ff4136",
};

export type ColorsType = keyof typeof ColorsEnum;

export const theme: DefaultTheme = {
	colors: ColorsEnum,
	font: {
		size: {
			xxs: "0.75rem",
			xs: "0.875rem",
			sm: "1rem",
			md: "1.5rem",
			lg: "3rem",
			xl: "6rem",
		},
		weight: {
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
			black: 700,
		}
	},
	padding: {
		xs: "0.5rem",
		sm: "0.75rem",
		md: "1rem",
		lg: "1.5rem"
	},
	margin: {
		xs: "0.5rem",
		sm: "0.75rem",
		md: "1rem",
		lg: "1.5rem",
	},
	line: {
		height: {
			xs: "1rem",
			sm: "1.5rem",
			md: "1.75rem",
			lg: "3.5625rem",
			xl: "7.0625rem",
		},
	},
	zIndex: {
		modal: "10",
		navbar: "200",
		dropdown: "1050",
	},
	boxShadow: {
		one: "0 2px 4px 0 rgba(0, 0, 0, 0.16)",
		two: "0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0, -9px 28px 0 rgba(0, 0, 0, 0.05)",
	},
	mediaQuery: {
		mobile: {
			screenSize: "575px",
			fontSize: "4px",
		},
		tablet: {
			screenSize: "767px",
			fontSize: "6px",
		},
		laptop: {
			screenSize: "991px",
			fontSize: "7px",
		},
		desktop: {
			screenSize: "1199px",
			fontSize: "8.5px",
		},
		lgDesktop: {
			screenSize: "1599px",
			fontSize: "12px",
		},
		xlDesktop: {
			screenSize: "1600px",
			fontSize: "15px",
		},
	},
};

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Roboto'
	}
`
