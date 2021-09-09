import React, { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';

const Menu = () => {

	const [coins, setCoins] = useState<CoinsProps>();
	
	useEffect(() => {
		fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1')
			.then((res) => res.json())
			.then((res) => {
				setCoins(res);
			})
			.catch((err) => console.log(`error: ${err.message}`))
	});

	return (
		<div>
			{coins && coins.map(c => (
				<p key={c.id}>{c.name}</p>
			))}
		</div>
	)
};

export default Menu;
