import { Link } from 'react-router-dom';
import { coinProps } from './interfaces';

const Coin = (props: coinProps) => {
	return (
		<>
			<td><Link to={`/${props.id}`}>{props.name}</Link></td>
			<td>{props.current_price}</td>
			<td>{props.price_change_percentage_24h}</td>
			<td>{props.total_supply}</td>
			<td>{props.total_volume}</td>
		</>
	);
};

export default Coin;
