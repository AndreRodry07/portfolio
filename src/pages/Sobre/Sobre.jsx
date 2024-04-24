import * as S from "./sobre_styled"
import seta1 from "../../assets/setascode/seta1.png"
import seta2 from "../../assets/setascode/seta2.png"
import andre from "../../assets/perfil/andre.jpg"


export default function Sobre() {
  return (
    <S.Main>
  <section>
    <S.Title>
      <h2>sobre</h2>
    </S.Title>
    
    <S.Container>
      <figure>
        <img src={andre} alt="Descrição da imagem 1" />
      </figure>
      
      <S.Journey>
        <S.Profile>
          <h3>André Rodrigues</h3>
          <img src={seta1} alt="Descrição da imagem 2" className="seta1"/>
          <img src={seta2} alt="Descrição da imagem 3" className="seta2"/>
        </S.Profile>
        
        <p>
          Minha jornada profissional teve início em 2023, quando decidi ingressar na 
          faculdade para cursar Análise e Desenvolvimento de Sistemas. Paralelamente ao 
          curso, mergulhei no mundo do desenvolvimento full stack. No meio de tantas 
          atividades, descobri minha paixão pelo desenvolvimento de sites.
          Como desenvolvedor front-end, tenho conhecimento nas tecnologias essenciais como HTML, CSS, 
          JavaScript, React, entre outras. Participei de projetos desafiadores, nos 
          quais pude não apenas aprimorar minhas habilidades técnicas, mas também desenvolver 
          competências interpessoais, como responsabilidade, proatividade e trabalho em equipe.
          Acredito firmemente que o sucesso de uma equipe de desenvolvimento vai além das habilidades 
          técnicas individuais. Envolve, também, colaboração e aprendizado contínuo. Por isso, 
          mantenho-me sempre atualizado com as últimas tendências do mercado e busco constantemente 
          oportunidades de aprimoramento e crescimento profissional.
        </p>
      </S.Journey>
    </S.Container>
  </section>
</S.Main>

  );
}
