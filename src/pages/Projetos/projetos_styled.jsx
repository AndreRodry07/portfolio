import styled, { css, keyframes } from "styled-components";
import background from "../../assets/background/background.gif";
import { maxWidths } from "../../components/MaxWidths/maxWidths";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  120% {
    transform: scale(.7);
  }
`;

export const BtnPulsating = styled.button`
    position: relative;
    padding: 2px 12px;
    background: linear-gradient(90deg, rgb(48, 17, 188), rgb(126, 17, 188));
    color: #fff7fc;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
    margin-bottom: 10px;
    animation: ${pulseAnimation} 0.9s infinite alternate;
`;

const center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.main`
    height: calc(953px - 76.2344px);
    width: 100%;
`;

export const BoxProjetos = styled.section`
    ${center}
    width: 100%;
    margin-inline: auto;
    padding-block: 25px;
    flex-direction: column;
    /* border: 4px solid #306316; */

    .carousel-react {
        width: 100%;
        /* border: 2px solid #FFFAB7; */
        @media (min-width: 1200px) {
        }

        .carousel .control-dots .dot {
            display: none;
        }

        .carousel.carousel-slider .control-arrow {
            display: none;

            @media (min-width: 550px) {
                border: 2px solid green;
                border-radius: 60%;
                width: 50px;
                height: 50px;
                transform: translateY(370px);
                margin-inline: 60px;
            }
        }
    }
`;

export const Title = styled.div`
    ${center}
    height: 100px;
    margin-bottom: 20px;
    background-position: 10% 100%;
    background-image: url(${background});

    h2 {
        font-weight: 900;
        color: white;
        font-size: 2rem;
    }
`;

export const DetailsCards = styled.div`
    width: 100%;
    /* border: 2px solid #FF004D; */

    figure {
        ${center}
        width: 80%;
        margin-inline: auto;
        /* border: 3px solid #15F5BA;  */

        @media (min-width: 340px) {
            width: 90%;
        }

        @media (min-width: 550px) {
            width: 70%;
        }

        @media (min-width: 768px) {
            width: 73%;
        }

        @media (min-width: 992px) {
            width: 60%;
        }

        @media (min-width: 1200px) {
            width: 40%;
        }
    }

    h3 {
        font-size: clamp(2px, 8vw, 25px);
        padding-block: 12px;
        color: #f6f5f2;
        text-align: center;

        @media (min-width: 1200px) {
            font-size: clamp(2px, 5vw, 26px);
        }
    }

    p {
        width: 100%;
        line-height: 16px;
        padding: 0 20px;
        letter-spacing: 3px;
        margin-inline: auto;
        font-size: clamp(2px, 4vw, 20px);
        color: #f6f5f2;
        margin-bottom: 10px;
        text-align: center;
        /* border: 2px solid #D20062;  */

        @media (min-width: 340px) {
            max-width: ${maxWidths.small};
            line-height: 20px;
            font-size: clamp(2px, 4vw, 14px);
            padding: 0 20;
        }

        @media (min-width: 768px) {
            max-width: ${maxWidths.small};
        }

        @media (min-width: 992px) {
            max-width: ${maxWidths.medium};
        }
        @media (min-width: 1200px) {
            max-width: ${maxWidths.large};
            line-height: 22px;
            margin-bottom: 15px;
            font-size: clamp(0.9px, 4vw, 16px);
        }
    }
`;

export const Tecnologias = styled.ul`
    ${center}
    display: inline-block;
    margin-inline: auto;
    width: 70%;
    /* border: 2px solid #E178C5;  */

    @media (min-width: 340px) {
        width: 40%;
    }

    @media (min-width: 550px) {
        width: 100%;
        max-width: ${maxWidths.small};
        display: inline-flex;
        gap: 20px;
    }

    li {
        background: rgb(126, 139, 182);
        border-radius: 0.5rem;
        margin-bottom: 1rem;
        cursor: pointer;
        padding: 0.5rem 1rem;
        font-weight: 600;
        font-size: clamp(2px, 4vw, 20px);
        text-transform: capitalize;
        color: rgb(255, 255, 255);

        @media (min-width: 340px) {
            font-size: clamp(2px, 4vw, 14px);
        }

        @media (min-width: 550px) {
            font-size: clamp(2px, 4vw, 12px);
        }
    }
`;

export const BtnCards = styled.div`
    ${center}
    gap: 20px;

    .primary-button {
        background: rgb(0, 89, 247);
        border: none;
        border-radius: 0.5rem;
        color: rgb(245, 245, 245);
        font-weight: 600;
        cursor: pointer;
        font-size: clamp(2px, 4vw, 20px);
        text-transform: capitalize;
        line-height: 1.5rem;
        padding: 0.1rem 1rem;

        @media (min-width: 340px) {
            font-size: clamp(2px, 4vw, 12px);
            padding: 0.2rem 1.3rem;
        }

        @media (min-width: 550px) {
            font-size: clamp(2px, 4vw, 14px);
        }

        @media (min-width: 1200px) {
            font-size: clamp(2px, 4vw, 15px);
            padding: 0.3rem 2rem;
            font-weight: 500;
        }
    }

    .secondary-button {
        line-height: 1.5rem;
        padding: 0.1rem 1rem;
        font-weight: 600;
        cursor: pointer;
        background: rgb(245, 245, 245);
        border: 1px solid rgb(31, 31, 31);
        font-size: clamp(2px, 4vw, 20px);
        border-radius: 0.5rem;
        color: rgb(31, 31, 31);
        text-transform: capitalize;
        @media (min-width: 340px) {
            font-size: clamp(2px, 4vw, 12px);
            padding: 0.2rem 1.3rem;
        }

        @media (min-width: 1200px) {
            font-size: clamp(2px, 4vw, 15px);
            padding: 0.3rem 2rem;
            font-weight: 500;
        }
    }
`;
