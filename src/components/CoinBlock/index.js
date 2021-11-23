import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChartBlock from './Chart';

const Coin = (props) => {
	return (
		<>
			<td>
				<Link to={`/${props.item.id}`}>
					{props.item.name}
				</Link>
			</td>
		</>
	);
};

export default Coin;
