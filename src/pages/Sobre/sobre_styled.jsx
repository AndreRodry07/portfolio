import styled, {css } from "styled-components"
import SobreBack from "../../assets/background/SobreBack.gif"
import backSobre from "../../assets/background/backSobre.png"
import { maxWidths } from "../../components/MaxWidths/maxWidths"


const center = css`
display: flex;
align-items: center;
justify-content: center;
`;

export const Main = styled.main`
  width: 100%;
  height: auto;
  /* border: 4px solid #FF76CE; */
 `


export const Title = styled.h2`
  ${center}
  width: 100%;
  height: 100px;
  font-weight: 900;
  color: #F6F5F2;
  font-size: 2.3rem;
  text-transform: capitalize;
  background-image: url(${SobreBack});
  background-position: 40% 10%;
`

export const Container = styled.div`
    ${center}
    width: 100%;
    height: auto;
    padding-inline: 20px;
    padding-block: 40px;
    flex-direction: column;
    /* border: 4px solid #80B3FF; */

    figure {
      width: 50%;
       /* border: 3px solid #E72929;  */
    @media (min-width: 340px) {
      width: 135px;
  }
    }

    img {
      width: 100%;
    }
`

export const Journey = styled.div`
 width: 100%;
 background-image: url(${backSobre});
 background-position: 20% 100%;
 background-repeat: no-repeat;
 background-size: cover;;
 /* border: 4px solid #3C0753;  */

 @media (min-width: 340px) {
  max-width: ${maxWidths.small};
  }
  
  @media (min-width: 550px) {
  max-width: ${maxWidths.medium};
  }

  @media (min-width: 768px) {
  max-width: ${maxWidths.large};
  }



p{ 
  text-align: start;
  word-spacing: 2px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 21px;
  color: #F6F5F2;
  font-size: clamp(2px, 5vw, 13px);

  @media (min-width: 340px) {
    line-height: 24px;
    font-size: clamp(2px, 4vw, 15px);
  }

  @media (min-width: 550px) {
    line-height: 29px;
    font-size: clamp(2px, 4vw, 15px);
  }

  @media (min-width: 768px) {
    line-height: 33px;
    font-size: clamp(2px, 5vw, 16px);
  }

  @media (min-width: 1200px) {
    text-align: center;
    word-spacing: 4px;
    letter-spacing: 3.5px;
    font-size: clamp(2px, 4vw, 15px);
    
  }


  @media (max-width: 340px) {
    font-size: clamp(1px, 3.8vw, 20px);
  }

  
}
`

export const Profile = styled.div`
 ${center}
 width: 100%;
 height: 80px;
 margin-inline: auto;
 position: relative;
 transition: width 0.5s ease;
 /* border: 4px solid #EBF400;  */

@media (min-width: 340px) {
    width: 280px;
    margin-bottom: 20px;
  }

  @media (min-width: 550px) {
    width: 360px;
  }


  @media (max-width: 340px) {
    width: 100%;

  }


 h3 {
  font-size: clamp(2px, 6vw, 17px);
  color:#F6F5F2;

  @media (min-width: 340px) {
    font-size: clamp(2px, 5vw, 20px);
  }

  @media (max-width: 340px) {
    font-size: clamp(1px, 5vw, 20px);
  }

  @media (min-width: 550px) {
    font-size: clamp(2px, 4vw, 24px);
  }
  
 }

 .seta2 {
  width: 16%;
  right: 0;
  position: absolute;
 }

 .seta1 {
  width: 15.8%;
  left: 0;
  position: absolute;
 }

`
