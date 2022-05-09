import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton, HeroImg } from './HeroStyles';

const Hero = () => {
	return (
		<HeroSection>
			<Container>
				<HeroImg 
				src="./assets/3d-render-hand@2x.jpg"
				alt='img'
				whileHover={{ rotate: 2, scale: 1.02 }}
				transition={{ duration: 0.3 }}
				/>
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
			</Container>
			<Container>
				
			</Container>
		</HeroSection>
	);
};

export default Hero;
