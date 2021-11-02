import React from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoTipoIcon from '../images/logo-tipo.svg'

function NavBar() {
  $(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
        $(".navbar").css("background" , "radial-gradient(173.26% 94.27% at 50% 100%, #F68F44 0%, #EC0F42 37.5%, #E22033 46.35%, #8B112D 100%)");
      }
      else{
        $(".navbar").css("background" , "transparent");  	
      }
    })
  })

  return (
    <div className="container-navbar">
    <Navbar clasName="navbar" id="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img src={logoTipoIcon} alt="logo Sami" />
        </Navbar.Brand>
        <button className="btnLogin">Iniciar sesión</button>
        <Navbar.Toggle className="btnMenu" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink exact to="/404">¿Por qué Sami?</NavLink>
            <NavLink exact to="/404">Sami Insights</NavLink>
            <NavLink exact to="/404">Solicita un Demo</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
};

export default NavBar;
