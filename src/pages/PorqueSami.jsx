import React from 'react';
import Navbar from '../components/Navbar';
import logoTipoIcon from '../images/svg/logo-tipo-color.svg';
import mirandaAmadoImage from '../images/miranda-amado.png'
import circleIcon from '../images/back-circle.png';
import puntosIcon from '../images/back-puntos.png';
import equisIcon from '../images/back-equis.png';
import logoMiranda from '../images/logo-miranda.png';

function PorqueSami() {
  return(
    <div className="container-porqueSami">
      <Navbar />
      <div className="container-porqueSami__hero">
        <div className="container-porqueSami__hero-title">
          <img src={circleIcon} alt="imagen circulo" className="container-porqueSami__hero-title-backCircle"/>
          <img src={puntosIcon} alt="imagen puntos" className="container-porqueSami__hero-title-backPuntos" />
          <img src={equisIcon} alt="imagen puntos" className="container-porqueSami__hero-title-backEquis" />
          <p className="container-porqueSami__hero-title-hi">¿POR QUÉ SAMI?</p>
          <h1>Los grandes éxitos viene de la mano de grandes alianzas</h1>
          <p className="container-porqueSami__hero-title-description"><strong>Sami</strong> y nuestras soluciones, han sido desarrolladas con el respaldo del estudio <strong>Miranda&Amado</strong> y bajo el marco de las mejores prácticas en tecnología e innovación.</p>
          <button>Conoce más</button>
        </div>
      </div>
      <main className="container-porqueSami__main">
        <div className="container-porqueSami__main-wrapperTop">
          <div className="container-porqueSami__main-wrapperTop-content">
            <section className="content-descubreComo">
              {/* <div className="content-descubreComo-border" /> */}
              <div className="content-descubreComo-top">
                <div>
                  <p className="itemSubtitulo">DESCUBRE CÓMO</p>
                  <img src={logoTipoIcon} alt="logo-tipo" className="content-descubreComo-logoTipo" />
                  <h2 className="subtitulo">Cuenta con el respaldo del Estudio Miranda&Amado</h2>
                  <p className="content-descubreComo-description">Miranda&Amado brinda el soporte legal con un alto nivel de especialización en diversas áreas del derecho y con un conocimiento profundo de las problemáticas del mundo legal laboral, lo cual permite brindar un servicio legal que se integra perfectamente con las estrategias empresariales de nuestros usuarios.</p>
                </div>
                <div className="d-flex justify-content-center images">
                  <img src={mirandaAmadoImage} alt="imagen Miranda" className="content-descubreComo-imagenMiranda" />
                  <img src={logoMiranda} alt="logo Miranda y Amado" className="content-descubreComo-logoMiranda" />
                </div>
              </div>
              <button>Solicita una demo</button>
            </section>
            {/* <section className="content-coreSami">
              <p className="itemSubtitulo">CORE SAMI</p>
              <h2 className="subtitulo">Cuenta con el respaldo del Estudio Miranda&Amado</h2>
              <p className="content-descubreComo-description">Miranda&Amado brinda el soporte legal con un alto nivel de especialización en diversas áreas del derecho y con un conocimiento profundo de las problemáticas del mundo legal laboral, lo cual permite brindar un servicio legal que se integra perfectamente con las estrategias empresariales de nuestros usuarios.</p>
              <div className="d-flex justify-content-center">
                <img src={mirandaAmadoImage} alt="imagen Miranda" className="content-descubreComo-imagenMiranda" />
              </div>
              <button>Solicita una demo</button>
            </section> */}
          </div>
        </div>
      </main>
      <div style={{ height:"500px" }}></div>
    </div>
  );
}
export default PorqueSami;

