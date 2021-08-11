import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    background-color: var(--darkGrey);
    height: 100px;
`;

export const Content = styled.div`
    position: relative;
    background: var(--medGrey);
    width: 100%;
    max-width: var(--maxWidth);
    margin: 0 auto;
    border-radius: 50px;
    color: var(--white);
    height: 55px;

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }

    input {
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        background: transparent;
        height: 40px;
        color: var(--white);
        outline: none;
        font-size: var(--fontBig);
        width: 95%;
    }
`;