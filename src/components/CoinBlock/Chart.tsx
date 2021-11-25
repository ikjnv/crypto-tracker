import React from 'react';
import * as d3 from 'd3';

interface CoinProps {
	id:		string;
	name:	string;
	symbol:	string;
};

interface ChartProps {
	0:	number;
	1:	number;
};

interface ConvertedChartProps {
	date:	Date;
	price:	number;
};

function findMax(arg: ConvertedChartProps[]) {
	let m: number = 0;
	arg.map((ch: ConvertedChartProps) => {
		if(m < ch.price) {
			m = ch.price;
		}
	});
	return m;
};

const ChartBlock = ({ id, name, symbol }: CoinProps) => {
	const [chartData, setChartData] = React.useState<ChartProps[]>();
	const ref = React.useRef<HTMLDivElement>(null);
	const height = 300;

	React.useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
				.then((res) => res.json())
				.then((res) => setChartData(res.prices));
		} catch (err) {
			console.error(err);
		}
	}, [id]);

	React.useEffect(() => {
		if (chartData) {
			const margin = { top: 20, right: 30, bottom: 30, left: 40 };
			const width = height / .6;
			const currentElement = ref.current;
			const svg = d3.select(currentElement);

			const documentElement = d3.select(currentElement)
				.call(g => g.select('svg').remove())
				.append('svg')
				.attr('viewBox', `0, 0, ${width}, ${height}`);

			const parseDate: any = d3.timeParse("%Y-%m-%d");

			const data = chartData.map((ch: any) => ({
				date: new Date(ch[0]),
				price: ch[1]
			}));

			const d3Type: Function = d3.line()
				.x((value: any) => x(value.date))
				.y((value: any) => y(value.price));

			const xDomain = [
				new Date(chartData[0][0]),
				new Date(chartData[chartData.length - 1][0])
			];

			const x = d3.scaleUtc()
				.domain(xDomain)
				.range([margin.left, width - margin.right]);

			let yMax: number = findMax(data);

			const y = d3.scaleLinear()
				.domain([0, yMax]).nice()
				.range([height - margin.bottom, margin.top]);

			const xAxis = (g: any) => g
				.attr("transform", `translate(0, ${height - margin.bottom})`)
				.call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

			documentElement.append<SVGGElement>('g')
				.call(xAxis);

			const yAxis = (g: any) => g
				.attr("transform", `translate(${margin.left}, 0)`)
				.call(d3.axisLeft(y));

			documentElement.append<SVGGElement>('g')
				.call(yAxis)
				.call(g => g.select(".domain").remove());

			documentElement.append('path')
				.datum(data)
				.attr('fill', 'none')
				.attr('stroke', 'steelblue')
				.attr('stroke-width', 1.5)
				.attr('stroke-linejoin', 'round')
				.attr('stroke-linecap', 'round')
				.attr('d', data => d3Type(data));
		}
	}, [chartData]);

	return (
		<>
			<div ref={ref} style={{ width: '100%', height: height }}>
			</div>
		</>
	);
}

export default ChartBlock;
