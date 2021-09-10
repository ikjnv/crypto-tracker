export interface CoinProps {
	id:																			string
	name:																		string
	image:																	string
	symbol:																	string
	current_price:													number
	price_change_percentage_1h:							number
	price_change_percentage_24h:						number
	price_change_percentage_7d:							number
};

export type CoinsProps = CoinProps[];
