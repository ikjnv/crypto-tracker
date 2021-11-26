import styled from 'styled-components';

export const CoinsContainer = styled.div`
	display: block;
	width: 100%;
	text-align: center;

	table {
		display: table;
		width: 100%;
		background-color: azure;
		text-indent: initial;
	};

	tbody {
		border: 2px solid red;
		display: table-row-group;
		vertical-align: middle;
	};

	tr {
		display: table-row;
		border-color: inherit;
		vertical-align: inherit;
	};

	td {
		display: table-cell;
		vertical-align: inherit;
	};
`;
