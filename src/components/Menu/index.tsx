import { useState, useEffect } from 'react';
import { CoinsProps } from './interfaces';
import { CoinsContainer, Loading, ErrorMessage, Pagination, BodyBlock } from './styled';
import Coin from '../CoinBlock/index';

const Menu = () => {
	const [coins, setCoins] = useState<CoinsProps>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>('');
	const [page, setPage] = useState<number>(1);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`)
			.then((res) => res.json())
			.then((res) => setCoins(res))
			.catch(err => setError(err.message))
			.then(() => setTimeout(() => setLoading(false), 1000));
	}, [page]);

	const goPrev = () => {
		setTimeout(() => setPage(Math.max(1, page - 1)), 60000);
	};

	const goNext = () => {
		setTimeout(() => setPage(Math.min(113, page + 1)), 60000);
	};

	return (
		<CoinsContainer>
			{error ? (
				<ErrorMessage>
					{error}
				</ErrorMessage>
			) : ( 
			loading ? (
				<Loading>Loading...</Loading>
			) : (
			!error && coins &&	(
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
						{coins.map(c => (
							<Coin {...c} key={c.id} />
						))}
					</tbody>
				</table>
			)))}
		</CoinsContainer>
	)
};

export default Menu;
