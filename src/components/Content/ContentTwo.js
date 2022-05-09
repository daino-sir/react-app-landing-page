import React, { useEffect } from "react";
import { Container, Section } from "../../globalStyles";
import {
	AboutContentRow,
	AboutContentColumn,
} from './ContentTwoStyles';
import { 
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	Img,
	ImgWrapper, 
} from "./ContentStyles";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const ContentTwo = ({
	primary,
	topline,
	headline,
	description,
	img,
	alt,
	inverse,
	reverse,	
}) =>{
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
	
	return(
		<Section inverse={inverse} ref={ref}>
			  <Container>
				<AboutContentRow reverse={reverse}>
				  <AboutContentColumn>
					  <TextWrapper>
						  <TopLine
						  	initial={initial}
							  transition={{ delay:0.3, duration: 0.6 }}
							  animate={animation}
						  >
							  {topline.text}
						  </TopLine>
						  <Heading
						  	initial={initial}
							  transition={{ delay: 0.5, duration: 0.6 }}
							  animate={animation}
							  inverse={inverse}
						  >
							  {headline}
						  </Heading>
						  <Subtitle
						  	initial={initial}
							transition={{ delay:0.7, duration: 0.6 }}
							animate={animation}
							inverse={inverse}
						  >
							  {description}
						  </Subtitle>
					  </TextWrapper>
				  </AboutContentColumn>
				  <AboutContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						<ImgWrapper>
							<Img
								src={img}
								alt={alt}
								whileHover={{ rotate: 2, scale: 1.02 }}
								transition={{ duration: 0.5 }}
							/>
						</ImgWrapper>
					</AboutContentColumn>
				</AboutContentRow>
			  </Container>
		  </Section>
			
	)
}