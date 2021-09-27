import React, { useState, useEffect } from 'react';
import { CoinProps } from './interfaces';

const Coin = () => {

	const [data, setData] = useState<CoinProps>([]);

	useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily`)
				.then(res => res.json())
				.then(res => setData(res))
		} catch(err) {
			console.log(err);
		}
	})

	return (
		<>
		</>
	);
};

export default Coin;
