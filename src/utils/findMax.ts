import { ConvertedChartProps } from "../components/Chart/interfaces";

export default function findMax(arg: ConvertedChartProps[]) {
	let max: number = 0;
	arg.map((item: ConvertedChartProps) => {
		if(max < item.price) {
			max = item.price;
		};
	});
	return max;
};
