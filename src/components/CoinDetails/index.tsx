import React, { useEffect, useState } from 'react';
import ChartBlock from '../CoinBlock/Chart';

const CoinDetails = (props: any) => {
	const [coinDetails, setCoinDetails] = useState<any>();

	useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/${props.match.params.id}?market_data=false`)
				.then(res => res.json())
				.then(res => {
					setCoinDetails(res);
					console.log(`coin details`, res);
				})
		} catch (err) {
			console.log(err);
		};
	}, [props.match.params.id]);

	return (
		<>
			{coinDetails ? (
				<>
					<div>
						<h4>{coinDetails.id}</h4>
						<p>{coinDetails.description.en}</p>
					</div>
					<div>
						<ChartBlock coin={coinDetails} />
					</div>
				</>
			) : null }
		</>
	)
};

export default CoinDetails;
