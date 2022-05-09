import { motion } from "framer-motion"
import styled from "styled-components";

export const AboutContentRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({reverse}) => (reverse ? 'row-reverse' : 'row')};
    justify-content: space-around;
`;
export const AboutContentColumn = styled(motion.div)`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    z-index: 10;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        max-width: 100% !important;
        flex-basis: 100%;
        justify-content: center;
        align-items: center;
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
        > h1,
        p {
            text-align: center;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;