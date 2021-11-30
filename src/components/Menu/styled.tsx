import styled from 'styled-components';

export const CoinsContainer = styled.div`
	display: flex;
	justify-content: center;
	
	table {
		width: 80%;
	};

	tbody {
		border: 2px solid red;
		vertical-align: middle;
	};

	tr {
		border-top: 1px solid silver;
	};

	th {
		text-align: right;
	}

	td {
		height: 2.5rem;
		text-align: right;
	};

	.icon-name {
		width: 25%;
		padding-left: 5%;
		text-align: left;

		a {
			color: black;
			font-weight: bold;
			text-decoration: none;
		}

		img {
			width: 10%;
			vertical-align: middle;
		}
	}

	#name {
		text-align: center;
	}

	#minichart {
		text-align: center;
	}
`;

export const Loading = styled.div`
	text-align: center;
	margin-top: 15%;
`;
