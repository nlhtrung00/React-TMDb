import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    border-radius: 20px;
    transition: all 0.2s;
    object-fit: cover;
    animation: animateThumb 3s;
    height: 100%;
    :hover {
        opacity: 0.7;
        cursor: pointer;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
