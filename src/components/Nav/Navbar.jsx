import logo from "../../assets/logo/logo.png"
import andre from "../../assets/perfil/andre.jpg"
import { useState } from 'react'
import CustomButton from "../CustomButton/CustomButton"
import { Link } from "react-router-dom"
import * as S from "./navbar_styled"
import { TfiAlignCenter } from "react-icons/tfi"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa6"

export default function Navbar() {

  const [menuvisivel, setMenuvisivel] = useState(false);

  const AbriMenu = () => {
    setMenuvisivel(true);
  };

  const FechaMenu = () => {
    setMenuvisivel(false);
  };

  const menuItemClicado = ( ) => {
    FechaMenu();
  };

  return (

    <S.BoxMenu>

      
      <S.BoxLogo>
        <figure>
        <Link to="/">
        <img src={logo} alt="image logo"/>
        </Link>

        </figure>
      
      <button onClick={AbriMenu}>
      <TfiAlignCenter />
      </button>

      </S.BoxLogo>

    

      <nav className={`nav-container ${menuvisivel ? 'exibir' : ''}`}>
        

        <S.BoxList className={`menu ${menuvisivel ? 'visivel' : ''}`}>

              <div  onClick={FechaMenu}>
              <CustomButton text="Fechar"/>
              </div>
   
     
        <Link to="/">
        <img src={andre} alt="image logo" onClick={menuItemClicado}/>
        </Link>
     
           <h2>Andre Rodrigues</h2>
        
          <S.MyUl>
            <li onClick={menuItemClicado} className="nav-item-one"><Link to="/">Home</Link></li>
            <li onClick={menuItemClicado} className="nav-item-two"><Link to="/Sobre">Sobre</Link></li>
            <li onClick={menuItemClicado} className="nav-item-three"><Link to="/Projetos">Projetos</Link></li>
            <li onClick={menuItemClicado} className="nav-item-four"><Link to="/contato">Contato</Link></li>
          </S.MyUl>


          <S.IconBox>
            <S.Icon href="#">
             <FaLinkedinIn />
            </S.Icon>

            <S.Icon href="#">
              <FaGithub />
            </S.Icon>

          </S.IconBox>


        </S.BoxList>


      </nav>


    </S.BoxMenu>
  );
}
