import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "containers/App";
import { GlobalStyle } from "styles";
import { theme } from "styles";
import "@fontsource/roboto";

import { BrowserRouter, Route } from "react-router-dom";
import { QueryParamProvider } from "use-query-params";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<QueryParamProvider ReactRouterRoute={Route}>
					<App />
					<GlobalStyle />
				</QueryParamProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
