import { Carousel } from 'react-responsive-carousel'
import * as S from "./projetos_styled"
import McDonald from "../../assets/projetos/McDonald.gif"
import reyNegro from "../../assets/projetos/reyNegro.gif"
import selfCare from "../../assets/projetos/selfCare.gif"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Projetos() {
  const cardsProjetos = [
    {
      imagem: McDonald,
      titulo: "projeto 1",
      descricao: "Projeto criado criado com o intuito de mostrar meus conhecimentos e projetos práticos. Ele é totalmente responsivo podendo ser acessado por um celular ou tablet. Foi criado utilizando as seguintes tecnologias:",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["React", "Styled-components", "Vite", "Git"],
    },
    {
      imagem: reyNegro,
      titulo: "projeto 2",
      descricao: "Projeto criado com o intuito de mostrar meus conhecimentos e projetos práticos. Ele é totalmente responsivo podendo ser acessado por um celular ou tablet. Foi criado utilizando as seguintes tecnologias:",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["React", "Styled-components", "Vite", "Git"],
    },
    {
      imagem: selfCare,
      titulo: "projeto 3",
      descricao: "Projeto criado com o intuito de mostrar meus conhecimentos e projetos práticos. Ele é totalmente responsivo podendo ser acessado por um celular ou tablet. Foi criado utilizando as seguintes tecnologias:",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["React", "Styled-components", "Vite", "Git"],
    },
  ];

  return (
    <S.Main>

      
      <S.Title>
        <h2>Projetos</h2>
      </S.Title>
      <S.BoxProjetos>

      <S.BtnPulsating className="pulsating-button">
      <span>Deslize ➜</span>
      <div className="arrow-left"></div>
      </S.BtnPulsating>
        <Carousel  className='carousel-react'
        
        showThumbs={false} 
        showStatus={false} 
        emulateTouch={true} 
        swipeable={true} 
        responsive={true} 
        infiniteLoop={true}
        swipeScrollTolerance={10}
        
        
        
        
        
        >
          {cardsProjetos.map((card) => (
            <S.DetailsCards key={card.titulo}>
              <figure>
                <img src={card.imagem} alt={card.altTexto} />
              </figure>
              <div>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <S.Tecnologias>
                  {card.tecnologias.map((tecnologia, index) => (
                    <li key={index}>{tecnologia}</li>
                  ))}
                </S.Tecnologias>
                <S.BtnCards>
                  <button className={'primary-button'} onClick={() => window.open(card.websiteLink)}>website</button>
                  <button className={'secondary-button'} onClick={() => window.open(card.githubLink)}>gitHub</button>
                </S.BtnCards>
              </div>
            </S.DetailsCards>
          ))}
        </Carousel>
      </S.BoxProjetos>
    </S.Main>
  );
}
