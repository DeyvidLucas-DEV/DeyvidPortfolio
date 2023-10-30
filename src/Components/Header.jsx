
import React, { useEffect } from 'react';
import Logo from "../assets/Logo.png";
import ScrollReveal from 'scrollreveal';
import { FaHouse, FaPhone, FaBookBookmark, FaPerson } from "react-icons/fa6";
import TextComemoration from '../Components/TextComemoration';
import Example from './Kawaii';
import '../Components/Header.style.css'

export default function Header(){
    useEffect(() => {
        ScrollReveal({ reset: true, distance: '10px', origin: 'top' });
        ScrollReveal().reveal('.welcomeText', { delay: 500 });
      }, []);
      return (
        <>
       <div className="headerw">
        <div className="navbarw">
          <ul className='listNav'>
            <li className='listNavItem'><a href="#" className='itemNav'><FaHouse className='HomeMenu'/></a></li>
            <li className='listNavItem'><a href="#" className='itemNav'><FaPhone  className='PhoneMenu'/></a></li>
            <div className="logo"><a href="#" className='itemNav'><Example /></a></div>
            <li className='listNavItem'><a href="#" className='itemNav'><FaBookBookmark className='ProjectsMenu'/></a></li>
            <li className='listNavItem'><a href="#" className='itemNav'><FaPerson className='PersonMenu'/></a></li>
          </ul>
        </div>
        <div className="textApresentation">
          <h1 className='welcomeText'>Bem vindo <br /> ao meu portfolio!</h1>
          <TextComemoration />
        </div>
       </div>
       </>
      )
}