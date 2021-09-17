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

	console.log(coins[0]);

	return (
		<CoinsContainer>
			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Price</th>
						<th>24h %</th>
						<th>7d %</th>
						<th>Market Cap</th>
						<th>Circulating supply</th>
						<th>Last 7 Days</th>
					</tr>
				</thead>
				<tbody>
				{coins && coins.map(c => (
					<tr key={c.id}>
						<td>{c.market_cap_rank}</td>
						<td id="coin-icon">
							<tr>
								<img src={c.image} alt="icon" />
								<td>{c.name}</td>
							</tr>
						</td>
						<td>${c.current_price}</td>
						<td>{c.price_change_percentage_24h}</td>
						<td>{Math.floor(c.price_change_percentage_7d_in_currency)}</td>
						<td>{c.market_cap}</td>
						<td>{c.circulating_supply}</td>
					</tr>
				))}
				</tbody>
			</table>
		</CoinsContainer>
	)
};

export default Menu;
