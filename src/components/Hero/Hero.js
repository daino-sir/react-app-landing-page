import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton, HeroImg } from './HeroStyles';
import HeroPicture from '../../assets/imgs/hero-img.png';

const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<MainHeading>WANAANGA E-LOANS</MainHeading>
				<HeroText>
				Guarantee loans Anywhere and Anytime.
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
					<HeroButton>Sign Up</HeroButton>
					</Link>
					<Link>
						<HeroButton>Sign In</HeroButton>
					</Link>
				</ButtonWrapper>
				<HeroImg 
				src={HeroPicture}
				alt='img'
				/>
			</Container>
		</HeroSection>
	);
};

export default Hero;
