import { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';
import { CoinsContainer } from './styled';
import Coin from '../CoinBlock/index';

const Menu = () => {
	const [coins, setCoins] = useState<CoinsProps>([]);

	useEffect(() => {
		fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
			.then((res) => res.json())
			.then((res) => setCoins(res))
			.catch(err => console.log(err));
	}, []);

	return (
		<CoinsContainer>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
						<th>24h%</th>
						<th>7d%</th>
						<th>Market Cap</th>
					</tr>
				</thead>
				<tbody id="body">
					{coins && coins.map(c => (
						<Coin {...c} key={c.id} />
					))}
				</tbody>
			</table>
		</CoinsContainer>
	)
};

export default Menu;
