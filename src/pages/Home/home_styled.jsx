import styled, {css } from "styled-components";
import { maxWidths } from "../../components/MaxWidths/maxWidths";


const center = css`
display: flex;
align-items: center;
justify-content: center;
`;


export const Main = styled.main`
${center}
  height: calc(953px - 76.2344px);
  width: 100%;
  /* border: 5px solid greenyellow;  */
`


export const MySection = styled.section`
  ${center}
  width: 100%;
  flex-direction: column;
`

export const ProfileContainer = styled.div`
 ${center}
 width: 100%;
 height:auto;
 padding-inline: 20px;
 flex-direction: column;
 transition: max-width 0.5s ease;
  /* border: 2px solid #7BC9FF;   */

  
 @media (min-width: 340px) {
   max-width: ${maxWidths.small};
  }

  
 @media (min-width: 550px) {
   max-width: ${maxWidths.medium};
  }
 

 img {
    padding-bottom: 20px;
    width: 40%;
    border-radius: 60%;


    @media (min-width: 550px) {
      width: 35%;
  }
   
 }

 span {
    word-spacing: 1.2px;
    letter-spacing: 1.5px;
    font-size: .9rem;
    color: #F6F5F2;
    text-align: center;
 }

 h1 {
    width: 100%;
    text-align: center;
    font-weight: 600;
    color: #F6F5F2;
    margin-block: 20px;
    /* border: 2px solid #337357;  */

    @media (min-width:150px) {
       font-weight: 600;
       font-size: clamp(13px, 7vw, 30px);
       letter-spacing: 2px;
    }

    @media (min-width: 550px) {
      font-size: clamp(10px, 7vw, 37px);
      /* background-color: blue; */
  }

 
 }

 p {
    line-height: 19px;
    word-spacing: 2px;
    font-size: clamp(9px, 7vw, 15px);
    letter-spacing: 3px;
    color: #F6F5F2;
    text-align: center;
}

`

export const BoxCarrossel = styled.div`

height: 10vh;
  img {
   width: 40%;
  }

`

/* carrossel swiper*/

export const Container = styled.div`
 width: 100%;
 height: auto;
 cursor: pointer;
 padding-inline: 20px;
 transition: max-width 0.5s ease;
  /* border: 2px solid #FF5BAE;   */
 
 @media (min-width: 340px) {
   max-width: ${maxWidths.small};
 
  }

  @media (min-width: 550px) {
   max-width: ${maxWidths.medium};
   padding-block: 10px;
  }

 

 

 h2 {
   color: #F6F5F2;
   text-align: center;
   padding-block: 25px;


   @media (max-width:340px) {
       font-weight: 600;
       font-size: clamp(10px, 6vw, 30px);
       letter-spacing: 2px;
    }

    @media (min-width: 550px) {
      width: 60%;
      margin-inline: auto;
      /* background-color: blue; */
  }
 }

 
`
export const Figure = styled.figure`
  width: 100%;
  max-width: 75%;
  height: 70px;
  margin-inline: auto;
  /* border: 2px solid orange; */

  @media (min-width: 550px) {
   height: 78px;
  }

  figcaption {
   text-align: center;
   color: #F6F5F2;
   padding-top: 10px;
   text-transform:uppercase;
   font-size: .7rem;

   @media (max-width:204px) {
       font-weight: 600;
       font-size: clamp(.6px, 4vw, 10px);
       letter-spacing: 2px;
       word-break: break-all;
    }
 
 }

 img {
   width: 50%;
   margin-inline: auto;
   height: auto;
   display: block;
   object-fit: cover;

 }


`


