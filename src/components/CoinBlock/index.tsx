import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CoinProps } from '../Menu/interfaces';

const Coin = (props: any) => {

	const [data, setData] = useState([]);

	useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily`)
				.then(res => res.json())
				.then(res => setData(res))
		} catch(err) {
			console.log(err);
		}
	}, []);

	console.log(data[0]);

	return (
		<>
			<td className="general mobile" id="coin-icon"><img src={props.coin.image} alt="icon" /></td>
			<td className="general mobile" id="coin-name"><Link to={`/${decodeURIComponent(props.coin.id)}`}>{props.coin.name}</Link></td>
			<td className="general mobile" id="price">{props.coin.current_price}</td>
			<td className="general additional">{Math.floor(props.coin.price_change_percentage_24h)}</td>
			<td className="general additional">{Math.floor(props.coin.price_change_percentage_7d_in_currency)}</td>
			<td className="general additional">{Math.floor(props.coin.market_cap)}</td>
			<td className="general additional">{Math.floor(props.coin.circulating_supply)}</td>
		</>
	);
};

export default Coin;
