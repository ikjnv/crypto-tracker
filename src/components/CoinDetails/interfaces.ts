export interface detailProps {
	id:					string;
	name:				string;
	description: {
		en:				string;
	};
	symbol:			string;
	image: {
		large:		string;
		small:		string;
	}
};

export interface coinProps {
	match: {
		params: {
			id:	string;
		}
	}
};
