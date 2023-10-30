import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Tag from "../Components/Tag";
import MeAp from "../Components/MeAp";
import Projects from "../Components/Projects";
import Animation from "../Components/Animation";
import meses from "../Components/CurrentMonth.jsx";
import Habilidades from "../Components/Habilidades";


function App(CurrentMonth) {
  useEffect(() => {
    let a = {meses}
    
  }, []);
  return (
    <>
      <Header />
      <Tag name="Sobre" />
      <MeAp />
      <Tag name="Habilidades" />
      <Habilidades />
      <Tag name="Vivencia Academica" />
      
      
    </>
  );
}
export default App;
