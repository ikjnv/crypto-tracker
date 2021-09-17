export interface CoinProps {
	id:																			string
	market_cap_rank:												number
	name:																		string
	image:																	string
	symbol:																	string
	current_price:													number
	price_change_percentage_1h:							number
	price_change_percentage_24h:						number
	price_change_percentage_7d_in_currency:	number
	market_cap:															number
	circulating_supply:											number
};

export type CoinsProps = CoinProps[];
