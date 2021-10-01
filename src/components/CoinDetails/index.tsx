import React, { useEffect, useState } from 'react';

const CoinDetails = (props: any) => {

	const [coinDetails, setCoinDetails] = useState<any>();

	useEffect(() => {
		fetch(`https://api.coingecko.com/api/v3/coins/${props.match.params.id}?market_data=true`)
			.then(res => res.json())
			.then(res => setCoinDetails(res))
			.catch((err) => console.log(err))
	}, [props.match.params.id]);

	return (
		<>
			{coinDetails ? (
					<div>
						<h4>{coinDetails.id}</h4>
						<p>{coinDetails.description.en}</p>
					</div>
			) : null }
		</>
	)
};

export default CoinDetails;
