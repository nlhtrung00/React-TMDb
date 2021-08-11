import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";


export const Wrapper = styled.div`
    background: ${({backdrop}) => (
        backdrop 
        ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
        : '#000'
    )};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    /* max-width: var(--maxWidth); */
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 720px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    color: var(--white);
    padding: 20px 40px;
    width: 100%;
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
        position: relative;
    }

    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        /* padding-top: 60%; */
        width: 40px;
        height: 40px;
        background-color: #fff;
        color: #000;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;

        p {
            margin: 0;
        }
    }

    @media screen and (max-width: 720px) {
        h1 {
            font-size: var(--fontBig);
        }
    }
`;