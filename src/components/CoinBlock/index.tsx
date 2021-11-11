import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChartBlock from './Chart';

const Coin = (props: any) => {
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
