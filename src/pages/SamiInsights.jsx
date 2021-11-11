import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoIcon from '../images/logo-Sami.png'
import logoInsightsIcon from '../images/logoTipo-insights.png'
import smallStepsIcon from '../images/steps-M.png';
import bigStepsIcon from '../images/steps-D.png';
import personImage from '../images/person.png';



import circleIcon from '../images/back-circle.png';
import puntosIcon from '../images/back-puntos.png';
import equisIcon from '../images/back-equis.png';
// import capacidadesImage from '../images/capacidades.png';
// import { ReactComponent as RepeatIcon } from '../images/svg/repeat.svg';
// import { ReactComponent as AlertIcon } from '../images/svg/alert.svg';
// import { ReactComponent as UsersIcon } from '../images/svg/users.svg';

function SamiInsights() {
  return(
    <div className="container-samiInsights">
      <Navbar />
      <div className="container-samiInsights__hero">
        <div className="container-samiInsights__hero-title">
          <img src={circleIcon} alt="imagen circulo" className="container-samiInsights__hero-title-backCircle"/>
          <img src={puntosIcon} alt="imagen puntos" className="container-samiInsights__hero-title-backPuntos" />
          <img src={equisIcon} alt="imagen puntos" className="container-samiInsights__hero-title-backEquis" />
          <p className="container-samiInsights__hero-title-hi">SAMI INSIGHTS</p>
          <h1>Decisiones más acertadas y más rápidas con SAMI Insights</h1>
          <div className="container-samiInsights__hero-title-textSimbolo">
            Encuentra este símbolo
            <img src={logoIcon} alt="logo Sami" />
          </div>
          <p className="container-samiInsights__hero-title-description">Y vive tus fiscalizaciones más data-driven.</p>
          <button>Descubre más</button>
        </div>
      </div>

      <main className="container-samiInsights__main">
        <div className="container-samiInsights__main-wrapperTop">
          <div className="container-samiInsights__main-wrapperTop-content">
            <section className="content-samiInsights">
              {/* <div className="content-samiInsights-border" /> */}
              <p className="itemSubtitulo">BENEFICIOS</p>
              <p className="subtitulo">
                Con
                <img src={logoInsightsIcon} alt="logo-tipo" className="subtitulo-logoTipo" />
              </p>
              <div className="content-samiInsights__steps">
                <img src={smallStepsIcon} alt="pasos" className="content-samiInsights__steps-stepImg smallStepsIcon" />
                <img src={bigStepsIcon} alt="pasos" className="content-samiInsights__steps-stepImg bigStepsIcon-oculto" />
                <div className="content-samiInsights__steps-description">
                  <p className="content-samiInsights__steps-description-stepUno">Podrás definir mejores estratégias para tus inspecciones.</p>
                  <p className="content-samiInsights__steps-description-stepDos">Contarás con inteligencia a la mano sobre información de los temas e inspectores de tu cartera.</p>
                  <p className="content-samiInsights__steps-description-stepTres">Tendrás un alcance macro sobre el riesgo de tu inspección y la probabilidad de posibles multas</p>
                </div>
                <img src={personImage} alt="usuario" className="content-samiInsights__steps-person" />
              </div>
                
              <button>Solicita una demo</button>
            </section>


            {/* <section className="content-coreSami">
              <div>
                <p className="itemSubtitulo">CORE SAMI</p>
                <h2 className="subtitulo">Mejores servicios legales centrados en las personas</h2>
                <p className="content-coreSami-description">El diseño centrado en el ser humano ha sido una metodología de innovación dominante en las industrias de servicios, desde la medicina hasta los seguros y las finanzas y que hoy sirven también al sistema legal, mejorarando el acceso de las personas a la justicia,  promoviendo la innovación y creando servicios legales más humanos.</p>
              </div>
              <div className="d-flex justify-content-center">
                <img src={capacidadesImage} alt="imagen diseño legal" className="content-coreSami-imagenCapacidades" />
              </div>
            </section> */}
          </div>
          {/* <div className="container-porqueSami__main-wrapperDown">
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
          </div> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default SamiInsights;

