import React from "react";
import { Grid, Snackbar, SnackbarCloseReason } from "@material-ui/core";
import { Skeleton, Alert } from "@material-ui/lab";
import useAxios from "axios-hooks";
import PrimaryChart from "components/PrimaryChart";
import SecondaryChart from "components/SecondaryChart";
import TimeFilterButtons from "components/TimeFilterButtons";
import { SC } from "./styled";
import {DataProps} from "interfaces/DataProps";
import useWindowDimentions from "hooks/useWindowDimensions";
import { useQueryParams, StringParam } from "use-query-params";
import { MarketContext } from "store/MarketProvider";

const Market = () => {
	const {
		filteredDataState: { filteredData }
	} = React.useContext(MarketContext);

	const [queryParams] = useQueryParams({
		id: StringParam,
		name: StringParam,
	});
	const [timeFilter, setTimeFilter] = React.useState<string>("1");
	const [errorMessage, setErrorMessage] = React.useState<string>("");
	const [boxWidth, setBoxWidth] = React.useState<number>(0);
	const { height } = useWindowDimentions();
	const [{data, loading, error}, fetch] = useAxios(
		{
			url: `https://api.coingecko.com/api/v3/coins/${queryParams?.id}/market_chart?vs_currency=usd&days=${timeFilter}`,
			method: "GET",
		},
		{ manual: true }
	);
	const 	gridItemRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (queryParams.id && queryParams.name) {
			fetch();
		}
	}, [fetch, queryParams, queryParams.id, queryParams.name]);

	React.useEffect(() => {
		if (error) {
			setErrorMessage(error.message);
		}
	}, [error]);

	React.useEffect(() => {
		const handleResize = (width?: number) => {
			setBoxWidth(width || 0);
		};
		handleResize(gridItemRef.current?.clientWidth || 0);
		window.addEventListener("resize", () =>
			handleResize(gridItemRef?.current?.clientWidth || 0)
		);
		return () => {
			window.removeEventListener("resize", () => handleResize());
		}
	}, [gridItemRef]);

	const mappedData: DataProps[] = React.useMemo(() => {
		return data
			? data?.prices.map((e: any) => ({
				date: new Date(e[0]),
				price: e[1],
			}))
			: [];
	}, [data]);

	const handleError = (
		e: React.SyntheticEvent<any>,
		reason?: SnackbarCloseReason
	) => {
		setErrorMessage("");
	};

	return (
		<Grid container justify="center">
			<Grid ref={gridItemRef} item xs={12} md={10} lg={8}>
				<SC.MarketHeader>
					<SC.Title>{queryParams?.name}</SC.Title>
					<TimeFilterButtons
						value={timeFilter}
						onChange={(v) => setTimeFilter(v || "")}
					/>
				</SC.MarketHeader>
				{loading ? (
					<Skeleton
						variant="rect"
						height={Math.floor(height * 0.6)}
						width={boxWidth}
					/>
				) : mappedData?.length ? (
					<>
						<PrimaryChart
							data={filteredData ?? []}
							height={Math.floor(height * 0.4)}
							width={boxWidth}
							margin={{ top: 16, right: 16, bottom: 40, left: 48 }}
						/>
						<SecondaryChart
							data={mappedData ?? []}
							height={Math.floor(height * 0.1)}
							width={boxWidth}
							margin={{ top: 0, right: 16, bottom: 24, left: 48 }}
						/>
					</>
				) : null}
			</Grid>
			<Snackbar open={!!errorMessage} onClose={handleError}>
					<Alert onClose={handleError} severity="error">
						{errorMessage}
					</Alert>
			</Snackbar>
		</Grid>
	)
}

export default Market;