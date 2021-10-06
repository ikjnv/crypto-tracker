import React, { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';
import { CoinsContainer } from './styled';
import Coin from '../CoinBlock';

const Menu = () => {

	const [coins, setCoins] = useState<CoinsProps>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		try {
			fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h%2C24h%2C7d')
				.then((res) => res.json())
				.then((res) => setCoins(res))
		} catch(e) {
			console.log(e);
		}
	}, []);

	return (
		<CoinsContainer>
			<table>
				<thead>
					<tr className="header">
						<th className="general mobile table-header">Name</th>
						<th className="general mobile table-header"></th>
						<th className="general mobile table-header">Price</th>
						<th className="general additional">24h%</th>
						<th className="general additional">7d%</th>
						<th className="general additional">Market Cap</th>
						<th className="general additional">Supply</th>
					</tr>
				</thead>
				<tbody>
				{coins && coins.map(c => (
					<tr key={c.id}>
						<Coin coin={c} />
					</tr>
				))}
				</tbody>
			</table>
		</CoinsContainer>
	)
};

export default Menu;
