import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    background: var(--darkGrey);
    min-height: 100px;
    padding: 0 20px;

`;

export const Content = styled.div`
    display: flex;
    margin: 0 auto;
    max-width: var(--maxWidth);
    width: 100%;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 30px;
        margin: 0 20px;
        flex: 1;

        :first-child {
            margin-left: 0;
        }
    
        :last-child {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 720px) {
        display: block;

        .column {
            margin: 20px 0;
        }
    }


`;

