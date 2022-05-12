import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-color: white;
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
	color: #3A73BE;
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
	color: #FFFFFF;
	background: #FF0000;
	border: 2px #FF0000 solid;
	&:hover {
		font-weight: 500;
	}
`;
