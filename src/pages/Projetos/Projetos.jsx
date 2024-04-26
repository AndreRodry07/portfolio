import { Carousel } from 'react-responsive-carousel'
import * as S from "./projetos_styled"
import McDonald from "../../assets/projetos/McDonald.gif"
import reyNegro from "../../assets/projetos/reyNegro.gif"
import selfCare from "../../assets/projetos/selfCare.gif"
import noRitmoDaBatida from "../../assets/projetos/noRitmoDaBatida.gif"
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Projetos() {
  const cardsProjetos = [
    {
      imagem: McDonald,
      titulo: "McDonald's",
      descricao: "Projeto inspirado no site do McDonald's, criado com o intuito de demonstrar meus conhecimentos. Ele é totalmente responsivo, podendo ser acessado por tablet ou celular. Foi criado utilizando as seguintes tecnologias:",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["react", "styled-components", "vite", "git"],
    },
    {
      imagem: reyNegro,
      titulo: "rey negro",
      descricao: "E-commerce de café que dispõe de várias seções, como a de categorias de produtos e a de contato, bem como cards que redirecionam para as páginas dos vendedores. O site é totalmente responsivo. Ele foi desenvolvido utilizando as seguintes tecnologias:",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["react", "css", "vite", "git"],
    },
    {
      imagem: selfCare,
      titulo: "self care",
      descricao: "Projeto de e-commerce fictício que oferece uma ampla gama de produtos naturais. O site apresenta uma variedade de produtos, cada um acompanhado por sua respectiva descrição, preço e imagem. Essa plataforma foi desenvolvida utilizando tecnologias modernas.",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["html", "css", "git"],
    },
    {
      imagem: noRitmoDaBatida,
      titulo: "no ritmo da batida",
      descricao: "Uma página simples criada para aprimorar meus conhecimentos em HTML e CSS. O projeto foi concebido com um foco no design, utilizando tons de cores envolventes e tratativas estéticas. Foram empregadas as seguintes tecnologias:",
      altTexto: "",
      websiteLink: "",
      githubLink: "",
      tecnologias: ["html", "css", "git"],
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
