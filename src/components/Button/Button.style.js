import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    margin: 20px auto;
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    font-size: var(--fontBig);
    color: var(--white);
    border: 0;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
        opacity: 0.7;
    }
`;