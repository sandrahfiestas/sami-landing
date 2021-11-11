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
        <button className="btnLogin">Iniciar sesión</button>
        <Navbar.Toggle className="btnMenu" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <NavLink exact to="/porqueSami" activeClassName="item-active">¿Por qué Sami?</NavLink>
            <NavLink exact to="/samiInsights" activeClassName="item-active">Sami Insights</NavLink>
            <NavLink exact to="/404" activeClassName="item-active">Solicita un Demo</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
};

export default NavBar;
