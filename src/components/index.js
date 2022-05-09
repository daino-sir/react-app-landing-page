// this page contains mixed styles that have been used globally
// the styles applied here are not component specific but can be applied to any component
import styled from 'styled-components';
import { Section } from '../globalStyles';

// used in the error page
export const ErrorContent = styled(Section)`
    background-color: white;
    @media screen and (max-width: 768px) {
		align-items: center;
        align-content: center;
        justify-content: center;
	}
`
export const MidImg = styled.img`
    height: 25rem;
    width: 10rem;
    @media screen and (max-width: 768px) {
		height: 10rem;
        width: 4rem
	}
    `
export const ErrorHeader = styled.h1`
    font-size: 5rem;
    color: tomato;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 3rem;
	}
`
export const ImgError = styled.img`
    width: 40rem;
    height: 20rem;
    margin-left: 20rem;
    @media screen and (max-width: 768px) {
        width: 15rem;
        height: 7rem;
        margin-left: 0;
	}
`
export const Descritpion = styled.p`
    font-size: 1rem;
    color: tomato;
    text-align: center;
`
export const LineBreak = styled.br`
    font-size: 20rem;
`