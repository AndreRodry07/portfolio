import styled, { createGlobalStyle, css } from "styled-components"
import { maxWidths } from "../MaxWidths/maxWidths"

export const GlobalStyle = createGlobalStyle`

* {
margin: 0;
padding: 0;
box-sizing: border-box;
list-style: none;
text-decoration: none;

}

body {
 font-family: "Inter", sans-serif;
 background-color: rgb(22, 32, 68);
}

`;

const center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BoxMenu = styled.div`
    .nav-container {
        ${center}
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        max-height: 100vh;
        opacity: 10;
        z-index: 4;
        overflow-x: hidden;
        transition: transform 0.3s ease;
        transform: translateX(100%);
        background-color: rgba(0, 0, 0, 0.9);
        /* border: 3px solid orange;   */
    }

    .nav-container.exibir {
        transform: translateX(0);
    }

    .btn-menu {
        margin-block: 20px 300px;
    }
`;

export const BoxLogo = styled.div`
    ${center}
    width: 100%;
    height: 76.2344px;
    margin-inline: auto;
    flex-direction: row;
    padding-inline: 20px;
    transition: max-width 0.5s ease;
    justify-content: space-between;
    /* border: 2px solid blue;  */

    @media (min-width: 340px) {
        max-width: ${maxWidths.small};
    }

    @media (min-width: 550px) {
        max-width: ${maxWidths.medium};
    }

    button {
        color: #ffffff;
        font-size: 1.5rem;
        border: none;
        cursor: pointer;
        margin-top: 8px;
        background-color: transparent;
    }

    figure {
        width: 18%;
        transition: ease 0.9s;

        @media (min-width: 550px) {
            width: 12%;
        }
    }

    img {
        width: 100%;
        height: auto;
        object-fit: contain;
        display: block;
    }
`;

export const BoxList = styled.div`
    ${center}
    width: 100%;
    height: 530px;
    padding-block: auto;
    justify-content: space-evenly;
    flex-direction: column;
    /* border: 2px solid #fff;  */

    img {
        width: 100px;
        /* border: 2px solid pink; */
        border-radius: 50%;

        @media (max-width: 230px) {
            width: 80px;
        }
    }

    h2 {
        font-family: "Sancreek", serif;
        letter-spacing: 2px;
        color: #f6f5f2;

        @media (max-width: 235px) {
            font-size: 1rem;
        }

        @media (max-width: 230px) {
            font-size: 0.9rem;
        }

        @media (max-width: 169px) {
            font-size: 0.8rem;
        }
    }
`;

export const MyUl = styled.ul`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    li {
        border-bottom: 1px solid #ff8911;
    }

    li:nth-child(2),
    li:nth-child(3) {
        text-align: center;
        width: 60px;
        border-bottom: 2px solid #ff8911;
    }

    li:nth-child(3) {
        width: 100px;
        border-bottom: 3px solid #7564e5;
    }

    li:nth-child(4) {
        text-align: center;
        width: 140px;
        border-bottom: 3px solid #7564e5;
    }

    a {
        font-family: "roboto", sans-serif;
        font-weight: 600;
        color: #f6f5f2;
        font-size: 1.2rem;
        cursor: pointer;
        transition: ease 0.8s;

        &:hover {
            color: #bea0e8;
        }
    }

    .nav-item-one a {
        font-size: 0.9rem;
    }

    .nav-item-two a {
        font-size: 1rem;
    }

    .nav-item-three a {
        font-size: 1.2rem;
    }

    .nav-item-four a {
        font-size: 1.4rem;
    }
`;

export const IconBox = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    font-size: 1.6rem;
`;

export const Icon = styled.a`
    cursor: pointer;
    color: #f6f5f2;
    transition: color 0.3s ease;

    &:hover {
        color: #ff8911;
    }
`;
