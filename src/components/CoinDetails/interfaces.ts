export interface detailProps {
	id:			string;
	name:		string;
	description: {
		en:	string;
	};
	symbol:	string;
};

export interface coinProps {
	match: {
		params: {
			id:	string;
		}
	}
};
