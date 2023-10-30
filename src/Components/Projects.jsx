import BasicExample from "../Components/Cards";
import DevPet from '../assets/DevPet.png';
import Login from "../assets/LoginRegister.png";
import Validation from "../assets/Validation.png";
import "../Components/Projects.style.css";
import CardImg from "react-bootstrap/esm/CardImg";



export default function Projects() {
  return (
    <div className="containerProject">
      <div className="cards">
        <a href="#" className="cardsProject">
          <BasicExample
          
            Image={DevPet } 
            Title="DEV-PET"
            Description="Projeto para avaliação da faculdade com tematica de um PetShop... "
          />
         
        </a>
        <a href="#" className="cardsProject">
          <BasicExample
            Image={Login}
            Title="Login e Cadastro"
            Description="Projeto feito para testar habilidades em JAVASCRIPT por meio de um sistema de login e cadastro... "
          />
          <BasicExample
          Image={Validation}
            Title="Validação de dados"
            Description="Projeto feito aguçar minhas habilidades na validação de formularios... "
          />
        </a>
      </div>
    </div>
  );
}
