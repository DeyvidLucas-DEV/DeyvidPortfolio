import React, { useEffect } from "react";
import "../Components/TextComemoration.style.css";
import meses from '../Components/CurrentMonth.jsx'
export default function TextComemoration(props) {
  useEffect(() => {
    let Comemoration = document.getElementById("BannerContent");
    let mo = {meses}
    let m = mo.meses
    if (m == 1) {
      Comemoration.textContent = "FELIZ ANO NOVO";
      Comemoration.classList.add("NewYearBanner");
    } else if (m == 2) {
      Comemoration.textContent = "FELIZ CARNAVAL";
      Comemoration.classList.add("Carnaval");
    } else if (m == 3) {
      Comemoration.textContent = "FELIZ MES INTERNACIONAL\nDA FLORESTA";
      Comemoration.classList.add("Florest");
    } else if (m == 4) {
      Comemoration.textContent = "FELIZ MES DAS MÃES";
      Comemoration.classList.add("Florest");
    } else if (m == 5) {
      Comemoration.textContent = "FELIZ DIA DO TRABALHADOR";
      Comemoration.classList.add("Trabalhador");
    } else if (m == 6) {
      Comemoration.textContent = "FELIZ DIA DOS NAMORADOS";
      Comemoration.classList.add("Namorados");
    } else if (m == 7) {
      Comemoration.textContent =
        "FELIZ DIA INTERNACIONAL \nDOS POVOS INDIGENAS";
      Comemoration.classList.add("Florest");
    } else if (m == 8) {
      Comemoration.textContent = "FELIZ DIA DOS PAIS";
      Comemoration.classList.add("Namorados");
    } else if (m == 9) {
      Comemoration.textContent = "MES DA \nINDEPENDENCIA DO BRASIL";
      Comemoration.classList.add("Independencia");
    } else if (m == 10) {
      Comemoration.textContent = "FELIZ HALLOWEEN";
      Comemoration.classList.add("Namorados");
    } else if (m == 11) {
      Comemoration.textContent = "FELIZ DIA DOS NAMORADOS";
      Comemoration.classList.add("Namorados");
    } else if (m == 12) {
      Comemoration.textContent = "FELIZ DIA DOS NAMORADOS";
      Comemoration.classList.add("Namorados");
    } 
  }, []);
  return (
    <div className="testexxxx">
      <h2 className="TextContentBanner" id="BannerContent">
        Feliz Halloween
      </h2>
    </div>
  );
}
