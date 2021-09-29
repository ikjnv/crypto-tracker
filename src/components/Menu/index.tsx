import React, { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';
import { CoinsContainer } from './styled';

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
					<tr>
						<th className="mobile table-header">Name</th>
						<th className="mobile table-header"></th>
						<th className="mobile table-header">Price</th>
						<th className="additional">24h %</th>
						<th className="additional">7d %</th>
						<th className="additional">Market Cap</th>
						<th className="additional">Circulating supply</th>
					</tr>
				</thead>
				<tbody>
				{coins && coins.map(c => (
					<tr key={c.id}>
						<td className="mobile" id="coin-icon"><img src={c.image} alt="icon" /></td>
						<td className="mobile" id="coin-name">{c.name}</td>
						<td className="mobile" id="price">${Math.floor(c.current_price)}</td>
						<td className="additional">{Math.floor(c.price_change_percentage_24h)}</td>
						<td className="additional">{Math.floor(c.price_change_percentage_7d_in_currency)}</td>
						<td className="additional">{Math.floor(c.market_cap)}</td>
						<td className="additional">{Math.floor(c.circulating_supply)}</td>
					</tr>
				))}
				</tbody>
			</table>
		</CoinsContainer>
	)
};

export default Menu;
