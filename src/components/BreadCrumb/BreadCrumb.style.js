import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    background-color: var(--medGrey);
    justify-content: center;
    /* width: 100%; */
    color: var(--white);
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;

    span {
        font-size: var(--fontMed);
        color: var(--white);
        padding-right: 10px;

        @media screen and (max-width: 720px){
            font-size: var(--fontSmall);
        }
    }
`;