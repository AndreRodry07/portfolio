import styled, { css } from "styled-components";
import gifBack from "../../assets/background/gifBack.gif"
import backEmail from "../../assets/background/backEmail.png"
import { maxWidths } from "../../components/MaxWidths/maxWidths"

const center = css`
display: flex;
align-items: center;
justify-content: center;
`;


export const Main = styled.main`
  width: 100%;
  flex-direction: column;
  height: calc(953px - 76.2344px);
 `


export const Title = styled.h2`
  ${center}
  width: 100%;
  height: 100px;
  font-weight: 900;
  color: #F6F5F2;
  font-size: 2.3rem;
  text-transform: capitalize;
  background-image: url(${gifBack});
  background-position: 20% 100%;
  /* border: 2px solid #FFD0EC; */
`

export const MySection = styled.section`
 ${center}
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 20px;
  padding: 80px 20px;
  border-radius: 0.5rem;
  /* border: 3px solid #9DBC98; */

  input {
  width: 100%;
  border: 1px solid rgb(75, 75, 78);
  border-radius: 0.5rem;
  color: rgb(50, 50, 52);
  padding: .4rem;

  @media (min-width: 550px) {
    width: 80%;
    padding: .8rem;
    margin-inline: auto;
  }

  @media (min-width: 1200px) {
    width: 60%;
    padding: .9rem;
    }



  }

  textarea {
  width: 100%;
  height: 100px;
  outline: none;
  font-size: clamp(1px, 5vw, 14px);
  border: 1px solid rgb(75, 75, 78);
  border-radius: 0.5rem;
  padding: 1rem;
  /* border: 2px solid #7BC9FF; */
  
  @media (min-width: 550px) {
    width: 80%;
    margin-inline: auto;
  }

  @media (min-width: 1200px) {
    width: 60%;
  
    }
  }

  button {
  border: none;
  font-weight: 600;
  border-radius: 0.8rem;
  padding: .5rem;
  margin-top: 20px;
  font-size: clamp(1px, 3.4vw, 12px);
  color: rgb(245, 245, 245);
  background: rgb(0, 89, 247);
  /* border: 2px solid #FFC470; */

   
  @media (min-width: 550px) {
    width: 60%;
    margin-inline: auto;
  }

  @media (min-width: 768px) {
    padding: .7rem;
    font-size: clamp(1px, 4vw, 14px);
    }

  @media (max-width:191px) {
    font-size: clamp(1px, 1.8vw, 10px);
  }

  @media (min-width: 1200px) {
    width: 40%;
  
    }

  

}
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 2rem;
  background-image: url(${backEmail});
  background-position: 50% 100%;
  transition: max-width 0.7s ease;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.5rem;
  /* border: 4px solid #AC7D88; */

  @media (min-width:340px) {
    max-width: ${maxWidths.small};
    }

    @media (min-width: 550px) {
    max-width: ${maxWidths.medium};
    }

    @media (min-width: 1200px) {
    max-width: ${maxWidths.large};
    }
`

export const Contact = styled.div`
  ${center}
  width: 100%;
  gap: 9px;
  flex-direction: column;
  font-size: clamp(2px, 3.4vw, 12px);
  /* border: 1px solid rgb(75, 75, 78); */

  .contact-link,
  .email-link {
    ${center}
    letter-spacing: 1.9px;
    color: #F6F5F2;
    @media (min-width: 768px) {
      font-size: clamp(1px, 4vw, 13px);
    }
  }

  .icon-whats,
  .icon-email {
    font-size: 1.2rem;
    margin-right: 10px;
    
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
}

  .icon-whats {
   color: #50CC5C;
   
  }

  .icon-email {
    color:#ED0000;
  }
`