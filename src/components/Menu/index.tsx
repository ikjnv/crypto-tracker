import { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';
import { CoinsContainer, Loading } from './styled';
import Coin from '../CoinBlock/index';

const Menu = () => {
	const [coins, setCoins] = useState<CoinsProps>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
		.then((res) => res.json())
		.then((res) => setCoins(res))
		.catch(err => console.log(err))
		.then(() => setTimeout(() => setLoading(false), 1000));
	}, []);

	return (
		<CoinsContainer>
			{loading ? (
				<Loading>Loading...</Loading>
			) : (
				<table>
					<thead>
						<tr>
							<th id="name">Name</th>
							<th>Price</th>
							<th>24h%</th>
							<th>7d%</th>
							<th>Market Cap</th>
							<th id="minichart">Last 7 days</th>
						</tr>
					</thead>
					<tbody id="body">
						{coins && coins.map(c => (
							<Coin {...c} key={c.id} />
						))}
					</tbody>
				</table>
			)}
		</CoinsContainer>
	)
};

export default Menu;
