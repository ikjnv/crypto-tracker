import { useEffect, useState } from 'react';
import ChartBlock from '../Chart/index';
import { detailProps, coinProps } from './interfaces';
import { CoinDetailsContainer } from './styled';
import { ChartProps } from '../Chart/interfaces';

const CoinDetails = (props: coinProps) => {
	const [coinDetails, setCoinDetails] = useState<detailProps>();
	const [id, setId] = useState<string>('');
	const [chartData, setChartData] = useState<ChartProps[]>();

	useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/${props.match.params.id}?market_data=false`)
				.then(res => res.json())
			.then(res => {
				setCoinDetails(res);
				setId(res.id);
			});
		} catch (err) {
			console.log(err);
		};
	}, [props.match.params.id]);

	useEffect(() => {
		if(id) {
			try {
				fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
					.then(res => res.json())
				.then(res => setChartData(res.prices))
			} catch (err) {
				console.error(err);
			}
		}
	}, [id]);

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
					{chartData && (
						<div>
							<ChartBlock {...chartData} />
						</div>
					)}
				</>
			)}
		</>
	)
};

export default CoinDetails;
