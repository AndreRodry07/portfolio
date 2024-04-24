import * as S from "./contato_styled"
import { AiOutlineMail } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa6"

export default function Contato() {
  return (
    
    <S.Main>

        <S.Title>contato</S.Title>
      
    <S.MySection>

      
      <S.Form
        action="mailto:andrelopesr2018@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Seu nome..."
          required
        />
        
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e-mail@email.com"
          required
        />
        
        <label htmlFor="subject"></label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Qual o assunto da mensagem?"
          required
        />
        
        <label htmlFor="message"></label>
        <textarea
          name="message"
          id="message"
          placeholder="Mensagem"
          required
        ></textarea>
        
        <button type="submit">Enviar mensagem</button>
      </S.Form>

      <S.Contact>

        
      <a href="#" target="_blank" className="contact-link">
        <span className="icon-whats">
        <FaWhatsapp />
        </span>
        <span className="name">Andre Rodrigues</span>
        </a>

      <a href="mailto:andrelopesr2018@gmail.com" target="_blank" className="email-link">
      <span className="icon-email">
      <AiOutlineMail />
       </span>
      <span className="email-address">andrelopesr2018@gmail.com</span>
      </a>
      </S.Contact>
    </S.MySection>
  </S.Main>  
  );
}
