import React from "react";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useAxios from "axios-hooks";
import numeral from "numeral";
import { constantCase } from "change-case";
import CoinCart from "containers/CoinCart";
import { theme } from "styles";
import { CoinDataProps } from "./interfaces";
import { SC } from "./styled";
import { Pagination, Skeleton } from "@material-ui/lab";
import { useQueryParams, NumberParam } from "use-query-params";

const CHART_BOX_SIZE = {
	height: 40,
	width: 150,
};

const INITIAL_QUERY_PARAMS = {
	per_page: 20,
	page: 1,
};

const MAX_PAGE_COUNT = 250;

const Coins = () => {
	const history = useHistory();
	const [queryParams, setQueryParams] = useQueryParams({
		per_page: NumberParam,
		page: NumberParam,
	});

	const [{ data, loading }, refetch] = useAxios<CoinDataProps[]>(
		`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${
			queryParams?.per_page || INITIAL_QUERY_PARAMS.per_page
		}&${
			queryParams.page || INITIAL_QUERY_PARAMS.page
		}&sparkline=false&price_change_percentage=1h%24h%7d`
	);

	React.useEffect(() => {
		setQueryParams({
			per_page: queryParams?.per_page || INITIAL_QUERY_PARAMS.per_page,
			page: queryParams?.page || INITIAL_QUERY_PARAMS.page,
		});
	}, [queryParams?.page, queryParams?.per_page, setQueryParams]);

	const TableHeader = () => {
		return (
			<thead>
				<SC.TableHeaderRow>
					<th align="left">#</th>
					<th align="left">Coin</th>
					<th align="left">Price</th>
					<th align="left">24h %</th>
					<th align="left">7d %</th>
					<th align="left">24h Volume</th>
					<th align="left">Mkt Cap</th>
					<th align="left">Last 7 days</th>
				</SC.TableHeaderRow>
			</thead>
		);
	};

	const TableBody = () => {
		return (
			<tbody>
				{data?.length
					? data.map((e) => (
						<SC.TableBodyRow key={e.id}>
							<SC.TableData>{e.market_cap_rank}</SC.TableData>
							<SC.TableData>
								<div>
									<img
										height="20rem"
										width="20rem"
										src={e.image}
										alt={e.name}
									/>
								</div>
								<SC.CoinsName
									onClick={() => {
										history.push({
											pathname: `/market`,
											search: `?id=${e.id}&name=${e.name}`,
										});
									}}
								>
									{e.name}
								</SC.CoinsName>
								<div style={{ color: theme.colors.primary }}>
									{constantCase(e.symbol)}
								</div>
							</SC.TableData>
							<SC.TableData>
								{numeral(e.current_price).format("$0,0.00")}
							</SC.TableData>
							<SC.TableData
								color={
									Math.sign(e.price_change_percentage_24) >= 0
										? theme.colors.lime
										: theme.colors.red
								}
							>
								{numeral(e.price_change_percentage_24 / 100).format("0.0%")}
							</SC.TableData>
							<SC.TableData
								color={
									Math.sign(e.price_change_percentage_7d_in_currency) >= 0
										? theme.colors.lime
										: theme.colors.red
								}
							>
								{numeral(e.price_change_percentage_7d_in_currency / 100).format("0.0%")}
							</SC.TableData>
							<SC.TableData>
								{numeral(e.total_volume).format("$0,0")}
							</SC.TableData>
							<SC.TableData>
								{numeral(e.market_cap).format("$0,0")}
							</SC.TableData>
							<td width={CHART_BOX_SIZE.width}>
								<CoinCart
									height={CHART_BOX_SIZE.height}
									width={CHART_BOX_SIZE.width}
									color={
										Math.sign(e.price_change_percentage_7d_in_currency) >= 0
											? theme.colors.lime
											: theme.colors.red
									}
									id={e.id}
								/>
							</td>
						</SC.TableBodyRow>
					)) : null}
			</tbody>
		)
	};

	return (
		<SC.CoinsContainer>
			<Grid container justify="center">
				<Grid item style={{ overflowX: "auto" }} xs={12} md={10}>
					{loading ? (
						<Skeleton variant="rect" height="100vh" width="100%" />
					) : (
						<>
							<SC.Table width="100%">
								<TableHeader />
								<TableBody />
							</SC.Table>
							<SC.PaginationWrapper>
								<Pagination
									size="small"
									count={MAX_PAGE_COUNT}
									page={queryParams?.page || 1}
									onChange={(e, pageNumber) => {
										setQueryParams({
											page: pageNumber,
										});
										refetch();
									}}
								/>
							</SC.PaginationWrapper>
						</>
					)}
				</Grid>
			</Grid>
		</SC.CoinsContainer>
	);
};

export default Coins;
