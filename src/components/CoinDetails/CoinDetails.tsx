import { useEffect, useState } from 'react';
import ChartBlock from '../Chart/index';
import { detailProps, coinProps } from './interfaces';
import { CoinDetailsContainer } from './styled';

const CoinDetails = (props: coinProps) => {
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
					<CoinDetailsContainer>
						<div className="first-block">
							<img id="icon" src={coinDetails.image.large} alt={`${coinDetails.name}`} />
							<h1>{coinDetails.name}</h1>
						</div>
					</CoinDetailsContainer>
					<div>
						<ChartBlock {...coinDetails} />
					</div>
				</>
			)}
		</>
	)
};

export default CoinDetails;
