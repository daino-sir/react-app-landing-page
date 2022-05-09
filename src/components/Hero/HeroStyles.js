import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
	top: 0;
	position: absolute;
	z-index: -1;
	`;
export const HeroImg = styled.img`
     width: 40%;
	 height: 70%;
	 margin-left: 35%;
	 top: 15%;
	 position: absolute;
	 z-index: -1;
	 animation: fadeInUp 2s;
	 @media screen and (max-width: 375px){
		 display: none;
		}
	 @media screen and (max-width: 425px){
		 display: none;
		}
	 @media screen and (max-width: 768px){
		 width: 80%;
		 height: 20%;
		 margin-left: 30;
		}
		@media screen and (max-width: 1024px){
			width: 70%;
			height: 40%;
			margin-left: 25%;
		}
		@media screen and (max-width: 1440px){
			width: 40%;
			margin-left: 50%;
		}
`

export const HeroText = styled.p`
	margin-top: 1em;
	margin-bottom: 35px;
	width: 30em;
	font-size: clamp(0.9rem, 1.5vw, 1.3rem);
	font-weight: 500;
	line-height: 24px;
	text-align: left;
	letter-spacing: 2px;
	color: #000;
	animation: fadeIn 1s;
	`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: left;
	flex-flow: wrap;
	gap: 0.5rem;
	animation: fadeInUp 1s;
	`;

export const HeroButton = styled(Button)`
	color: white;

	&:before {
		background: #f99d6c;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: #f99d6c;
		font-weight: 500;
		border: 2px #f99d6c solid;
	}
`;