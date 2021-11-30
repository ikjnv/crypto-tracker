import React from 'react';
import * as d3 from 'd3';
import { ChartProps } from './interfaces';
import findMax from '../../utils/findMax';
import { ChartBlockDiv } from './styled';

const MiniChartBlock = (chartData: ChartProps[]) => {
	const ref = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (chartData) {
			const margin = { top: 20, right: 30, bottom: 30, left: 40 };
			const height = window.innerHeight / 2;
			const width = window.innerWidth / 2;
			const currentElement = ref.current;

			const documentElement = d3.select(currentElement)
				.call(g => g.select('svg').remove())
				.append('svg')
				.attr('viewBox', `0, 0, ${width}, ${height}`)
				.attr("preserveAspectRatio", "xMinYMin meet");

			const data = Object.values(chartData).map((ch: any) => ({
				date: new Date(ch[0]),
				price: ch[1]
			}));

			const d3Type: Function = d3.line()
				.x((value: any) => x(value.date))
				.y((value: any) => y(value.price));

			const xDomain = [
				new Date(Object.values(chartData)[0][0]),
				new Date(Object.values(chartData)[Object.values(chartData).length - 1][0])
			];

			const x = d3.scaleUtc()
				.domain(xDomain)
				.range([margin.left, width - margin.right]);

			let yMax: number = findMax(data);

			const y = d3.scaleLinear()
				.domain([0, yMax]).nice()
				.range([height - margin.bottom, margin.top]);

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
			<ChartBlockDiv ref={ref} className="chart">
			</ChartBlockDiv>
		</>
	);
}

export default MiniChartBlock;
