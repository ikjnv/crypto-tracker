import { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';
import { CoinsContainer } from './styled';
import Coin from '../CoinBlock/index';

const Menu = () => {
	const [coins, setCoins] = useState<CoinsProps>();

	useEffect(() => {
		try {
			fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
				.then((res) => res.json())
				.then((res) => setCoins(res));
		} catch(e) {
			console.error('menu error', e);
		}
	}, []);

	return (
		<CoinsContainer>
			<table>
				<thead>
					<tr>
						<th className="mobile">Name</th>
						<th className="mobile"></th>
						<th className="mobile">Price</th>
						<th className="additional">24h%</th>
						<th className="additional">7d%</th>
						<th className="additional">Market Cap</th>
						<th className="additional">Supply</th>
					</tr>
				</thead>
				<tbody>
				{coins && coins.map(c => (
					<tr key={c.id}>
						<Coin {...c} />
					</tr>
				))}
				</tbody>
			</table>
		</CoinsContainer>
	)
};

export default Menu;
