export interface CoinProp {
	id:																			string
	market_cap_rank:												number
	name:																		string
	image:																	string
	symbol:																	string
	current_price:													number
	price_change_percentage_24h:						number
	price_change_percentage_7d:							number
	market_cap:															number
	circulating_supply:											number
	total_supply:														number
	total_volume:														number
};

export type CoinsProps = CoinProp[];
