import styled from "styled-components";


export const CustomButton = styled.button`

    margin-top: 20px;
    font-size: .9rem;
    padding: 0.5em .8rem;
    border: none;
    border-radius: 20px;
    background: linear-gradient(90deg, rgb(48, 17, 188), rgb(126, 17, 188));
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    z-index: 2;
    position: relative;
    overflow: hidden;

    @media (max-width:230px) {
      font-size: .6rem;
      padding: 0.7em .4rem;
    }

    &::after  {
    content: "";
    display: inline-block;
    height: 10px;
    margin-left: 2px;
    width: 10px;
    position: relative;
    z-index: 1;
    background-color: #FE7A15;
    transition: transform 600ms;
    border-radius: 50%;
    
  }
  
  &:hover::after {
    transform: scale(21);
  }
  

  & .custom-text {
    z-index: 2;
    font-size: .9em;
    font-weight: 500;
    color: #ffffff;
    text-decoration: none;
    
}

`
