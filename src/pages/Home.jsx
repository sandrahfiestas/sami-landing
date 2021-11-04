import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import OptionGestiona from '../components/OptionGestiona';
import OptionSolicitud from '../components/OptionSolicitud';
import OptionBusqueda from '../components/OptionBusqueda';
import OptionJurisprudencia from '../components/OptionJurisprudencia';
import Insights from '../components/Insights';
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
      <Navbar />
      <div className="container-home__hero">
        <div className="container-home__hero-title">
          <p className="container-home__hero-title-hi">¡HOLA, SOMOS SAMI!</p>
          <h1>Tus fiscalizaciones bajo control, más simples y transparentes</h1>
          <p className="container-home__hero-title-description"><strong>Sami </strong>facilita la gestión de tus fiscalizaciones, cada caso y actuación. Controla y monitorea todo el proceso, identifica los pendientes más cercanos de tu cartera en tiempo real y potencia tu relación con SUNAFIL.</p>
          <button>Descubre cómo</button>
        </div>
      </div>
      <main className="container-home__main">
        <div className="container-home__main-wrapperTop">
          <div className="container-home__main-wrapperTop-content">
            <section className="content-descubre">
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
              <p className="content-descubre-itemSubtitulo">DESCUBRE CÓMO</p>
              <img src={logoTipoIcon} alt="logo-tipo" className="content-descubre-logoTipo" />
               {showGestiona ? <OptionGestiona /> : ''}
               {showSolicitud ? <OptionSolicitud /> : ''}
               {showBusqueda ? <OptionBusqueda /> : ''}
               {showJurisprudencia ? <OptionJurisprudencia /> : ''}
              <button>Solicita una demo</button>
            </section>
            <Insights />

          </div>
        </div>
      </main>
      {/* <h1 style={{ height: '500px' }}>HOME</h1> */}
    </div>
  );
}

export default Home;
