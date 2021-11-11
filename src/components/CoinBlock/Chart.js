import React, { useState, useEffect } from 'react';
import { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, XYChart } from '@visx/xychart';
import convertToIsoDate from '../../utils/convertDate';

export function useChartData(items) {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {            
    if (items) {               
      const temp = [];         
      items.forEach((r) => {
				const data = {
					x: convertToIsoDate(r[0]),
					y: r[1]
				};
				temp.push(data);
      });
			setChartData(temp);
    }
  }, [items]);
  
  return [chartData, setChartData];
}

const accessors = {
	xAccessor: (d) => new Date(`${d.x}T00:00:00`),
	yAccessor: (d) => d.y
};

const ChartBlock = (props) => {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		try {
			fetch(`https://api.coingecko.com/api/v3/coins/${props.coin.id}/market_chart?vs_currency=usd&days=7`)
				.then((res) => res.json())
				.then((res) => {
					setChartData(res.prices);
				});
		} catch (err) {
			console.log('chart error', err);
		}
	}, []);

	const [data] = useChartData(chartData);

	console.log('my chart data', data);

	return (
		<>
			<XYChart height={300} xScale={{ type: "band" }} yScale={{ type: "linear" }} >
				<AnimatedAxis
					orientation="bottom"
				/>
				<AnimatedAxis
					orientation="left"
				/>
				<AnimatedGrid
					columns={false}
					numTicks={2}
				/>
				<AnimatedLineSeries
					dataKey="Line 1"
					data={data}
					{...accessors}
				/>
			</XYChart>
		</>
	)
};

export default ChartBlock;
