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

		.mobile {
			font-size: 46px;
			img  {
				width: 50%;
			}
			text-align: left;
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

		.mobile, .additional {
			display: initial;
			font-size: 26px;
			img { width: 3%; }
			text-align: center;
		}

		th, td {
			border: 1px solid black;
			text-align: center;
		}
	}

`;
