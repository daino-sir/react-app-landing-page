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
				<MainHeading>Nyuza</MainHeading>
				<HeroText>
					For small businesses that are looking to expand in the modern digital age. Find out ore about us  from the sections below
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
					<HeroButton>Download</HeroButton>
					</Link>
					<Link>
						<Button>Learn more</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</HeroSection>
	);
};

export default Hero;
