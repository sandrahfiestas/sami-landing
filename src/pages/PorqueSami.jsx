import React from 'react';
import Navbar from '../components/Navbar';
import logoTipoIcon from '../images/svg/logo-tipo-color.svg';
import mirandaAmadoImage from '../images/miranda-amado.png'
import circleIcon from '../images/back-circle.png';
import puntosIcon from '../images/back-puntos.png';
import equisIcon from '../images/back-equis.png';
import logoMiranda from '../images/logo-miranda.png';
import capacidadesImage from '../images/capacidades.png';
import { ReactComponent as RepeatIcon } from '../images/svg/repeat.svg';
import { ReactComponent as AlertIcon } from '../images/svg/alert.svg';
import { ReactComponent as UsersIcon } from '../images/svg/users.svg';

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
            <section className="content-coreSami">
              <div>
                <p className="itemSubtitulo">CORE SAMI</p>
                <h2 className="subtitulo">Mejores servicios legales centrados en las personas</h2>
                <p className="content-coreSami-description">El diseño centrado en el ser humano ha sido una metodología de innovación dominante en las industrias de servicios, desde la medicina hasta los seguros y las finanzas y que hoy sirven también al sistema legal, mejorarando el acceso de las personas a la justicia,  promoviendo la innovación y creando servicios legales más humanos.</p>
              </div>
              <div className="d-flex justify-content-center">
                <img src={capacidadesImage} alt="imagen diseño legal" className="content-coreSami-imagenCapacidades" />
              </div>
            </section>
          </div>
          <div className="container-porqueSami__main-wrapperDown">
            <section className="content-addOnd">
              <p className="itemSubtitulo">ADD OND</p>
              <h2 className="subtitulo">Agiliza tus inspecciones con nuestros servicios</h2>
              <div className="content-addOnd__pasos">
                <div className="content-addOnd__pasos-paso">
                  <p className="content-addOnd__pasos-paso-number">1</p>
                  <div className="content-addOnd__pasos-paso-description">
                    <strong>Sincroniza tu casilla electrónica</strong>
                    <p>Recibe las notificaciones de tu casilla sin tener que ingresar a tu buzón, solo enlaza a SUNAFIL con Sami y ¡Listo!.</p>
                    <RepeatIcon className="content-addOnd__pasos-paso-icon" />
                  </div>
                </div>
                <div className="content-addOnd__pasos-paso itemTwo">
                  <p className="content-addOnd__pasos-paso-number">2</p>
                  <div className="content-addOnd__pasos-paso-description">
                    <strong>Alerta nueva inspección</strong>
                    <p>Ten la fecha y detalle de la inspección para que te anticipes y estés listo.</p>
                    <AlertIcon className="content-addOnd__pasos-paso-icon" />
                  </div>
                </div>
                <div className="content-addOnd__pasos-paso">
                  <p className="content-addOnd__pasos-paso-number">3</p>
                  <div className="content-addOnd__pasos-paso-description">
                    <strong>Servicio paralegal</strong>
                    <p>Nos encargamos del trabajo operativo con Sami Paralegal para que tú te enfoques en la gestión y estrategia de tu cartera de casos.</p>
                    <UsersIcon className="content-addOnd__pasos-paso-icon" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <div style={{ height:"500px" }}></div>
    </div>
  );
}
export default PorqueSami;

