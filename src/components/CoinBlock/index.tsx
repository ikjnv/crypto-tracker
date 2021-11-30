import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { coinProps } from './interfaces';
import { ChartProps } from '../MiniChart/interfaces';
import MiniChartBlock from '../MiniChart';

const Coin = (props: coinProps) => {
	const [chartData, setChartData] = useState<ChartProps[]>();

	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=7`)
			.then((res) => res.json())
			.then((res) => setChartData(res.prices))
			.catch((err) => console.error(err));
	}, [props.id]);

	return (
		<tr>
			<td className="icon-name">
				<img src={props.image} alt={props.name} />
				&nbsp;
				<Link to={`/${props.id}`}>{props.name}</Link>
			</td>
			<td>${props.current_price}</td>
			<td>{props.price_change_percentage_24h}</td>
			<td>{props.total_supply}</td>
			<td>{props.total_volume}</td>
			<td>
				{chartData && (
					<MiniChartBlock {...chartData} />
				)}
			</td>
		</tr>
	);
};

export default Coin;
