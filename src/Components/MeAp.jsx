import "../Components/MeAp.style.css";
import React, { useEffect } from 'react';

export default function MeAp() {
  
  useEffect(() => {
    
    ScrollReveal({ reset: true, distance: '10px', origin: 'top' });
    ScrollReveal().reveal('.TextAp', { delay: 500 });
  }, []);
  return (
    <div className="containerAp">
      <div className="PhotoContainer"></div>
      <div className="TextApresentation">
        <p className="TextAp">
          E aí, pessoal! Eu sou o Deyvid, um carinha de 18 anos lá de João
          Pessoa, na Paraíba, que vive e respira programação. <br /> Atualmente,
          tô na UNIPE, onde tô estudando Ciências da Computação, mas a verdade é
          que isso é mais do que uma graduação, é uma paixão. <br /> Eu já me
          meti em um monte de projetos malucos nesse mundão da tecnologia, e
          cada linha de código é como uma nova aventura pra mim. <br /> <br />{" "}
          No meu site, você vai encontrar um monte de coisas legais: meus
          projetos, umas dicas malucas sobre programação e, claro, um jeito de
          entrar em contato comigo. Se você curte essa vibe de programação, ou
          tem algum projeto irado em mente, bora trocar uma ideia. <br /> Vai
          ser demais ter você por aqui! <br />
        </p>
      </div>
    </div>
  );
}
