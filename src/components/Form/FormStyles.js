import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const FormSection = styled.div`
	/* color: #fff; */
	padding: 160px 0;
	/* background: ${({ inverse }) => (inverse ? '#101522' : '#fff')}; */
	background: #f99d6c;
`;

export const FormTitle = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: #f99d6c;
`;

export const FormContainer = styled.div`
	display: flex;
`;
export const FormColumn = styled.div`
	/* margin-bottom: 15px; */
	padding: 100px;
	background: white;
	border: 20px;
	/* padding: ${({ small }) => (small ? '0 50px' : '0 15px')}; */
	flex: 1;
	max-width: 40%;
	height: 580px;
	display: flex;
	justify-content: center;
	align-items: center;
	/* border-top-right-radius: 20px;
	border-bottom-right-radius: 20px; */
	border-radius: 20px;
	flex-direction: column;
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}

	img {
		@media screen and (max-width: 768px) {
			display: none;
		}
	}
`;

export const FormRow = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 -15px -15px -15px;
	flex-wrap: wrap;
	align-items: center;
`;

export const FormWrapper = styled.form`
	/* max-width: 540px; */
	padding-top: 0;
	width: 100%;
`;

export const FormMessage = styled(motion.div)`
	color: ${({ error }) => (error ? 'red' : 'green')};
	padding: 5px;
	text-align: center;
	margin-top: 1rem;
`;

export const FormInputRow = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: stretch;
	margin-bottom: 1.4rem;

	> p {
		font-size: 0.8rem;
		margin-top: 0.5rem;
		color: #f00e0e;
	}
`;
export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 40px;
	width: 100%;
	border: none;
	border-radius: 20px;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const FormLabel = styled.label`
	display: inline-block;
	font-size: 0.9rem;
	margin-bottom: 0.3rem;
	color: #000000;
`;
export const FormImgWrapper = styled.div`
	max-width: 350px;
	display: flex;
	justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
export const FormImg = styled.img`
	padding-right: 0;
	border: 0;
	/* border-radius: 20px; */
	border-top-left-radius: 20px;
	border-bottom-left-radius: 20px;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	max-height: 100%;
`;
export const SLink = styled(Link)`
color: #dd763f;
text-decoration: none;
&:hover{
	text-decoration: underline;
}
`
export const FormButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 1.5rem;
	white-space: nowrap;
	color: #f99d6c;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid #f99d6c;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	
	&:hover {
		color: #fff;
		transition: background-color 0.4s ease-in;
		background-color: #f99d6c;
		border: 1px solid #f99d6c;
	}
`;
