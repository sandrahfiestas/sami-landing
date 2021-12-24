import React from 'react';
// import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoTipoIcon from '../images/logo-tipo.svg'

function NavBar() {
  // cambio de color del navbar con Jquery
  // $(function(){
  //   $(window).scroll(function(){
  //     var scroll = $(window).scrollTop();
  //     if (scroll > 10) {
  //       $(".navbar").css("background" , "#8E122E");
  //     }
  //     else{
  //       $(".navbar").css("background" , "transparent");  
  //     }
  //   })
  // })

  return (
    <div className="container-navbar">
    <Navbar className="navbar" id="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand exact to="/">
        <NavLink exact to="/"><img src={logoTipoIcon} alt="logo Sami" /></NavLink>
        </Navbar.Brand>
        <button className="btnLogin">
          <a className="aNoStyle" href="https://develop.d1m4mh8zc59yft.amplifyapp.com/" target="_blank" rel="noreferrer">Iniciar sesión</a>
        </button>
        <Navbar.Toggle className="btnMenu" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink exact to="/porqueSami/" activeClassName="item-active">¿Por qué Sami?</NavLink>
            <NavLink exact to="/samiInsights" activeClassName="item-active">Sami Insights</NavLink>
            {/* <NavLink exact to="/#contactanos" activeClassName="item-active">Solicita un Demo</NavLink> */}
            <a className="aNoStyle" href="https://sami-landing.netlify.app/#contactanos">Solicita un Demo</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
};

export default NavBar;
