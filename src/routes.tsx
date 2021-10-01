import React from 'react';
import Menu from './components/Menu';
import CoinDetails from './components/CoinDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Menu} exact />
				<Route path="/:id" component={CoinDetails} exact />	
			</Switch>
		</BrowserRouter>
	)
};

export default Routes;
