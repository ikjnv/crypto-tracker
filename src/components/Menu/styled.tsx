import styled from 'styled-components';

export const CoinsContainer = styled.div`
	@media only screen and (min-width: 425px) {
		width: 90%;
		margin-right: auto;
		margin-left: auto;

		#coin-name {
			width: 60%;
			padding-right: 25%;
		}

		.mobile th {
			font-size: 24px;
		}
		
		.mobile {
			img  {
				width: 50%;
			}
			text-align: left;
		}

		th {
			font-size: 36px;
		}

		td {
			font-size: 46px;
		}
		
		.additional {
			display: none;
		}

		td {
			padding: 20px 0px 0px;
		}

		th {
			padding: 20px 2px 30px;
		}
	}

	@media only screen and (min-width: 1024px) {
		width: 100%;
		
		.mobile {
			img {
				width: 80%;
			}
			border: 2px solid red;
		}

		#coin-name {
			width: 20%;
			font-weight: bold;
			padding-left: 1rem;
		}

		#coin-icon {
			width: 3%;
		}

		#price {
			width: 10%;
		}

		.additional {
			display: inline flow;
			width: 23%;
			height: 5rem;
			border: 2px solid blue;
		}

		th {
			font-size: 16px;
		}

		td {
			font-size: 20px;
			text-align: center;
			border: 1px solid black;
		}

	}

	@media only screen and (max-width: 1338px) {
		width: 80%;
	}
`;
