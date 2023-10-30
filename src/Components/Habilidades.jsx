import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import SQL from "../assets/SQL.jpg";
import HTML from "../assets/HTML.png";
import JS from "../assets/JAVASCRIPT.jpeg";
import CSS from "../assets/CSS.jpeg";
import REACTs from "../assets/REACT.png";
import VUE from "../assets/VUE.png";
import AWS from "../assets/AWS.png";
import JAVA from "../assets/JAVA.png";
import SPRING from "../assets/SPRINGBOOT.jpeg";
import "../Components/Habilidades.style.css";
import React, { useEffect, useState } from 'react';
import ScrollReveal from "scrollreveal";



export default function Habilidades(props) {
    function ProgressBar() {
        const [percent, setPercent] = useState(0);
  useEffect(() => {
    ScrollReveal({ reset: true, distance: "10px", origin: "top" });
    ScrollReveal().reveal(".TopImages", { delay: 600 });
    ScrollReveal().reveal(".BottomImagens", { delay: 800 });
    ScrollReveal().reveal(".percent", { delay: 1200 });

    const targetPercent = 70; // A porcentagem final desejada
    const duration = 2000; // 2 segundos em milissegundos
    const interval = duration / targetPercent;

    let currentPercent = 0;

    const timer = setInterval(() => {
      if (currentPercent < targetPercent) {
        setPercent(currentPercent);
        currentPercent++;
      } else {
        setPercent(targetPercent);
        clearInterval(timer);
      }
    }, interval);
  }, []);}
  return (
    <div className="HabilidadeContainer">
      <div className="FigurasHabilidades">
        <div className="TopImages">
          <img src={HTML} alt="" className="HabilityImagem" />
          <img src={CSS} alt="" className="HabilityImagem" />
          <img src={JS} alt="" className="HabilityImagem" />
          <img src={REACTs} alt="" className="HabilityImagem" />
          <img src={VUE} alt="" className="HabilityImagem" />
        </div>
        <div className="BottomImagens">
          <img src={SQL} alt="" className="HabilityImagem" />
          <img src={AWS} alt="" className="HabilityImagem" />
          <img src={JAVA} alt="" className="HabilityImagem" />
          <img src={SPRING} alt="" className="HabilityImagem" />
        </div>
      </div>
      <div className="ProgressbarsContainer">
        <div className="GridContainer">
          <p className="NameHability">JAVASCRIPT</p>
          <Progress
            type="circle"
            width={200}
            percent={90}
            strokeWidth={9}
            theme={{
              success: {},
              active: {
                symbol: "",
                color: "#EBAD24",
              },
              default: {},
            }}
          />
        </div>
        <div className="GridContainer">
          <p className="NameHability">SQL</p>
          <Progress
            type="circle"
            width={200}
            percent={70}
            strokeWidth={9}
            theme={{
              success: {},
              active: {
                symbol: "",
                color: "#3399DB",
              },
              default: {},
            }}
          />
        </div>
        <div className="GridContainer">
          <p className="NameHability">JAVA</p>
          <Progress
            type="circle"
            width={200}
            percent={50}
            strokeWidth={9}
            theme={{
              success: {},
              active: {
                symbol: "",
                color: "#E8740A",
              },
              default: {},
            }}
          />
        </div>
        <div className="GridContainer">
          <p className="NameHability">SPRING BOOT</p>
          <Progress type="circle" width={200} percent={60} strokeWidth={9} />
        </div>
        <div className="GridContainer">
          <p className="NameHability">AWS</p>
          <Progress
            type="circle"
            width={200}
            percent={60}
            strokeWidth={9}
            theme={{
              success: {},
              active: {
                symbol: "",
                color: "#232F3E",
              },
              default: {},
            }}
          />
        </div>
      </div>
    </div>
  );
}
