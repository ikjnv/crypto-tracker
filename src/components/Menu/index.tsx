import React, { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';

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
		<div>
			{coins && coins.map(c => (
				<div key={c.id}>
					<span>{c.name} </span>
					<span>{c.symbol} </span>
					<span>{c.current_price} </span>
					<span>{c.price_change_percentage_24h} </span>
				</div>
			))}
		</div>
	)
};

export default Menu;
