import React from 'react';

interface Props {
	id:		string;
	name:	string;
	symbol:	string;
};

interface ChartProps {
	x:	number;
	y:	number;
};

interface ConvertedChartProps {
	date:	Date;
	price:	number;
};

function convert(arg: ChartProps[]) {
	const temp: any = [];
	arg.map((o: any) => {
		const d = {
			date: new Date(o[0]).toISOString(),
			price: o[1]
		}
		temp.push(d);
	});
	return temp;
};

const ChartBlock = ({ id, name, symbol }: Props) => {
	const [chartData, setChartData] = React.useState<ConvertedChartProps[]>();

	React.useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
				.then((res) => res.json())
				.then((res) => convert(res.prices))
				.then((res) => setChartData(res));
		} catch (err) {
			console.error(err);
		}
	}, [id]);

	console.log('data', chartData);

	return (
		<>
			{ chartData && chartData.map((ch, i) => (
				<div key={i}>
					<p>
						<span>{ch.price}</span> - 
						<span>{ch.date}</span>
					</p>
				</div>
			))
			}
		</>
	);
}

export default ChartBlock;
