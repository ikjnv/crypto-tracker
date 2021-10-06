import styled from 'styled-components';

export const CoinsContainer = styled.div`
	@media only screen and (min-width: 425px) {
		width: 90%;
		margin-right: auto;
		margin-left: auto;

		#coin-name {
			width: 70%;
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

	@media only screen and (min-width: 768px) {
		margin-right: auto;
		margin-left: auto;

		#coin-name {
			width: 70%;
			padding-right: 25%;
		}

		.mobile th {
			font-size: 24px;
		}
		
		.mobile {
			img  {
				width: 50%;
				margin-left: 20%;
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
		#coin-icon {
			width: 5%;
		}

		#coin-name {
			text-align: left;
			font-size: 20px;
			font-weight: bold;
		}

		.general {
			img {
				width: 100%;
			}
		}

		td {
			text-align: center;
		}
	}
`;
