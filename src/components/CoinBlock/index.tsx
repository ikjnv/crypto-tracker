import { Link } from 'react-router-dom';
import { coinProps } from './interfaces';

const Coin = (props: coinProps) => {
	return (
		<>
			<td>
				<Link to={`/${props.id}`}>
					{props.name}
				</Link>
			</td>
			<td>
				{props.current_price}
			</td>
		</>
	);
};

export default Coin;
