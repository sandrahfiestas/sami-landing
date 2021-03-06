import React, { useState } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoIcon from '../images/logo-tipo.svg'
// import Navbar from '../components/Navbar';
import OptionGestiona from '../components/OptionGestiona';
import OptionSolicitud from '../components/OptionSolicitud';
import OptionBusqueda from '../components/OptionBusqueda';
import OptionJurisprudencia from '../components/OptionJurisprudencia';
import Insights from '../components/Insights';
import Testimonios from '../components/Testimonios';
import Inspecciones from '../components/Inspecciones';
import Planes from '../components/Planes';
import Contactanos from '../components/Contactanos';
import Footer from '../components/Footer';
import logoTipoIcon from '../images/svg/logo-tipo-color.svg';
import eyeRedIcon from '../images/eye-red.png';
import fileTextRedIcon from '../images/fileText-red.png';
import searchRedIcon from '../images/search-red.png';
import hamburgRedIcon from '../images/hambur-red.png';
import eyeWhiteIcon from '../images/eye-white.png';
import fileTextWhiteIcon from '../images/fileText-white.png';
import searchWhiteIcon from '../images/search-white.png';
import hamburgWhiteIcon from '../images/hambur-white.png';

function Home() {
    // cambio de color del navbar con Jquery
  $(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
        $(".navbarHome").css("background" , "#8E122E");
      }
      else{
        $(".navbarHome").css("background" , "transparent");  
      }
    })
  })

  const [showGestiona, setShowGestiona] = useState(true);
  const [showSolicitud, setShowSolicitud] = useState(false);
  const [showBusqueda, setShowBusqueda] = useState(false);
  const [showJurisprudencia, setShowJurisprudencia] = useState(false);

  const handleBtnGestiona = () => {
    setShowSolicitud(false);
    setShowBusqueda(false);
    setShowJurisprudencia(false);
    setShowGestiona(true);
  }

  const handleBtnSolicitud = () => {
    setShowGestiona(false);
    setShowBusqueda(false);
    setShowJurisprudencia(false);
    setShowSolicitud(true);
  }

  const handleBtnBusqueda = () => {
    setShowSolicitud(false);
    setShowGestiona(false);
    setShowJurisprudencia(false);
    setShowBusqueda(true);
  }

  const handleBtnJurisprudencia = () => {
    setShowSolicitud(false);
    setShowGestiona(false);
    setShowBusqueda(false);
    setShowJurisprudencia(true)
  }

  return (
    <div className="container-home">
      <div className="container-navbar">
        <Navbar className="navbar navbarHome" id="navbar" collapseOnSelect expand="lg" style={{ background: 'transparent' }}>
          <Container>
            <Navbar.Brand exact to="/">
            <NavLink exact to="/"><img src={logoIcon} alt="logo Sami" /></NavLink>
            </Navbar.Brand>
            <button className="btnLogin">
              <a className="aNoStyle" href="https://develop.d1m4mh8zc59yft.amplifyapp.com/" target="_blank" rel="noreferrer">Iniciar sesi??n</a>
            </button>
            <Navbar.Toggle className="btnMenu" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <NavLink exact to="/porqueSami/" activeClassName="item-active">??Por qu?? Sami?</NavLink>
                <NavLink exact to="/samiInsights" activeClassName="item-active">Sami Insights</NavLink>
                {/* <NavLink exact to="/#contactanos" activeClassName="item-active">Solicita un Demo</NavLink> */}
                <a className="aNoStyle" href="https://sami-landing.netlify.app/#contactanos">Solicita un Demo</a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="container-home__hero">
        <div className="container-home__hero-capaBackground">
          <div className="container-home__hero-title">
            <p className="container-home__hero-title-hi">??HOLA, SOMOS SAMI!</p>
            <h1>Tus fiscalizaciones bajo control, <br /> m??s simples y transparentes</h1>
            <p className="container-home__hero-title-description"><strong>Sami </strong>facilita la gesti??n de tus fiscalizaciones, cada caso y actuaci??n. Controla y monitorea todo el proceso, identifica los pendientes m??s cercanos de tu cartera en tiempo real y potencia tu relaci??n con SUNAFIL.</p>
            <button>
              <a className="aNoStyle" href="#descubre">Descubre c??mo</a>
            </button>
          </div>
        </div>
      </div>
      <main className="container-home__main">
        <div className="container-home__main-wrapperTop">
          <div className="container-home__main-wrapperTop-content">
            {/* <div className="container-home__main-wrapperTop-content-background"></div> */}
            <section id="descubre" className="content-descubre">
              <div className="content-descubre__options">
                <div className={showGestiona ? 'content-descubre__options-option btnActive' : 'content-descubre__options-option btnNoActive'} onClick={handleBtnGestiona}>
                  <img src={showGestiona ? eyeWhiteIcon : eyeRedIcon} alt="icono ojo" />
                </div>
                <div className={showSolicitud ? 'content-descubre__options-option btnActive' : 'content-descubre__options-option btnNoActive'} onClick={handleBtnSolicitud}>
                  <img src={showSolicitud ? fileTextWhiteIcon : fileTextRedIcon} alt="icono texto" />
                </div>
                <div className={showBusqueda ? 'content-descubre__options-option btnActive' : 'content-descubre__options-option btnNoActive'} onClick={handleBtnBusqueda}>
                  <img src={showBusqueda ? searchWhiteIcon : searchRedIcon} alt="icono lupa" />
                </div>
                <div className={showJurisprudencia ? 'content-descubre__options-option btnActive' : 'content-descubre__options-option btnNoActive'} onClick={handleBtnJurisprudencia}>
                  <img src={showJurisprudencia ? hamburgWhiteIcon : hamburgRedIcon} alt="icono menu" />
                </div>
              </div>
              <p className="content-descubre-itemSubtitulo">DESCUBRE C??MO</p>
              <img src={logoTipoIcon} alt="logo-tipo" className="content-descubre-logoTipo" />
               {showGestiona ? <OptionGestiona /> : ''}
               {showSolicitud ? <OptionSolicitud /> : ''}
               {showBusqueda ? <OptionBusqueda /> : ''}
               {showJurisprudencia ? <OptionJurisprudencia /> : ''}
              <button>
                <a className="aNoStyle" href="https://sami-landing.netlify.app/#contactanos">Solicita una demo </a>
              </button>
            </section>
            <Insights />
            <Testimonios />
          </div>
        </div>
            <Inspecciones />
      </main>
      <Planes />
      <Contactanos />
      <Footer />
    </div>
  );
}

export default Home;
