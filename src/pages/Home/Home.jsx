import * as S from "./home_styled"
import { Link } from "react-router-dom"
import CustomButton from "../../components/CustomButton/CustomButton"
import andre from "../../assets/perfil/andre.jpg"
import html from "../../assets/tecnologias/html.png"
import css from "../../assets/tecnologias/css.png"
import js from "../../assets/tecnologias/js.png"
import sass from "../../assets/tecnologias/sass.png"
import github from "../../assets/tecnologias/github.png"
import react from "../../assets/tecnologias/react.png"
import python from "../../assets/tecnologias/python.png"
import tailwind from "../../assets/tecnologias/tailwind.png"
import wordpress from "../../assets/tecnologias/wordpress.png"
import { useState, useEffect } from "react"
import { register } from "swiper/element/bundle"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/scrollbar"

register();

export default function Home() {

    const [slidePerView, setSlidePerView] = useState(3);

    const tecnologias = [
        { imagem: html, alt: "logo da tecnologia html", figcaption: "html" },
        { imagem: css, alt: "logo da tecnologia css", figcaption: "css" },
        { imagem: js, alt: "logo da tecnologia JavaScript", figcaption: "JavaScript" },
        { imagem: react, alt: "logo da tecnologia react", figcaption: "react" },
        { imagem: sass, alt: "logo da tecnologia sass", figcaption: "sass" },
        { imagem: github, alt: "logo da tecnologia github", figcaption: "github" },
        { imagem: python, alt: "logo da tecnologia axios", figcaption: "python" },
        { imagem: tailwind, alt: "logo da tecnologia tailwind", figcaption: "tailwind" },
        { imagem: wordpress, alt: "logo da tecnologia wordpress", figcaption: "wordpress" },
    
      ];

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 340) {
                setSlidePerView(3);
            } else {
                setSlidePerView(4);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <S.Main>
            <S.MySection>
                <S.ProfileContainer>
                    <img src={andre} alt="Imagem do André" />
                    <span>🚀 Olá, eu sou o André 🙋‍♂️</span>
                    <h1>Desenvolvedor Web Front-end</h1>
                    <p>Desenvolvedor web front-end com um ano de experiência, dedicado a 
                    aprimorar minhas habilidades no desenvolvimento de interfaces para desktop e 
                    dispositivos móveis.</p>
                    <Link to="/Sobre">
                        <CustomButton text="Saiba mais" />
                    </Link>
                </S.ProfileContainer>

                <S.Container>
                    <h2>Minhas Jornadas Tecnológicas</h2>
                    <Swiper slidesPerView={slidePerView} pagination={{ clickable: true }} autoplay={{ delay: 2000, disableOnInteraction: false }} navigation>
                        {tecnologias.map((item) => (
                            <SwiperSlide key={item.figcaption} className="Slides-Swiper">
                                <S.Figure>
                                    <img src={item.imagem} alt={item.alt} className="slide-item" />
                                    <figcaption>{item.figcaption}</figcaption>
                                </S.Figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </S.Container>
            </S.MySection>
        </S.Main>
    );
}
