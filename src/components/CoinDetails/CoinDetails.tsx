import React, { useEffect, useState } from 'react';
import ChartBlock from '../CoinBlock/Chart';

interface CoinProps {
	id:	string;
	symbol:	string;
	name:	string;
	match: {
		params: {
			id:	string
		}
	}
};

interface detailProps {
	id: string;
	symbol:	string;
	name:	string;
};

const CoinDetails = (props: CoinProps) => {

	const [coinDetails, setCoinDetails] = useState<detailProps>();

	useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/${props.match.params.id}?market_data=false`)
				.then(res => res.json())
				.then(res => setCoinDetails(res))
		} catch (err) {
			console.log(err);
		};
	}, [props.match.params.id]);

	return (
		<>
			{coinDetails && (
				<>
					<p>{coinDetails.name}</p>
					<div style={{ width: 500 }}>
						<ChartBlock {...coinDetails} />
					</div>
				</>
			)}
		</>
	)
};

export default CoinDetails;
