import React from 'react';
import Navbar from '../components/Navbar';
import logoTipoIcon from '../images/svg/logo-tipo-color.svg'

function Home() {
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
              <p className="content-descubre-itemSubtitulo">DESCUBRE CÓMO</p>
              <img src={logoTipoIcon} alt="logo-tipo" className="content-descubre-logoTipo" />
              <h2 className="content-descubre-subtitulo">Gestiona tus casos, actuaciones y vencimientos</h2>
              <p className="content-descubre-description">Lleva un control de tu cartera, monitorea el proceso de tus casos y analiza el impacto del riesgo de las inspecciones a cargo.</p>
              <div>
                <img src="" alt="" />
                <img src="" alt="" />
              </div>
              <img src="" alt="" />
              <div>
                <button>Solicita una demo</button>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* <h1 style={{ height: '500px' }}>HOME</h1> */}
    </div>
  );
}

export default Home;
