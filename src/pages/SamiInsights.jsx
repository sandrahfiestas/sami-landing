import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logoIcon from '../images/logo-Sami.png'
import circleIcon from '../images/back-circle.png';
import puntosIcon from '../images/back-puntos.png';
import equisIcon from '../images/back-equis.png';
import logoInsightsIcon from '../images/logoTipo-insights.png'
import smallStepsIcon from '../images/steps-M.png';
import bigStepsIcon from '../images/steps-D.png';
import personImage from '../images/person.png';
import infraStepUnoM from '../images/funcionalidad-step1-M.png'
import infraStepDosM from '../images/funcionalidad-step2-M.png'
import infraStepTresM from '../images/funcionalidad-step3-M.png'
import infraStepUnoD from '../images/funcionalidad-step1-D.png';
import infraStepDosD from '../images/funcionalidad-step2-D.png';
import infraStepTresD from '../images/funcionalidad-step3-D.png';

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

            <section className="content-funcionalidades">
              <p className="itemSubtitulo">FUNCIONALIDADES</p>
              <p className="subtitulo">Descubre la experiencia con Sami Insights <img src={logoIcon} alt="logo Sami" className="logoIcon-oculto" /></p>
              <div className= "content-funcionalidades__containerSteps">
                <div className= "content-funcionalidades__containerSteps-stepUno">
                  <div className= "content-funcionalidades__containerSteps-stepUno-description">
                    <span>1</span>
                    <p>Entérate de la documentación, las infracciones y las resoluciones que estén relacionadas a los temas de tu cartera al instante.</p>
                  </div>
                  <div className= "content-funcionalidades__containerSteps-stepUno-images">
                    <img src={infraStepUnoM} alt="materias" className="infraccionesImgM" />
                    <img src={infraStepUnoD} alt="materias" className="infraccionesImgD" />
                  </div>
                </div>
                <div className= "content-funcionalidades__containerSteps-stepDos">
                  <div className= "content-funcionalidades__containerSteps-stepDos-description">
                    <span>2</span>
                    <p>Analiza de forma rápida y fácil el riesgo monetario y crítico de tu cartera, Sin perder el control de tus inspecciones</p>
                  </div>
                  <div className= "content-funcionalidades__containerSteps-stepDos-images">
                    <img src={infraStepDosM} alt="riesgo" className="riesgoImgM" />
                    <img src={infraStepDosD} alt="riesgo" className="riesgoImgD" />
                  </div> 
                </div>
                <div className= "content-funcionalidades__containerSteps-stepTres">
                  <div className= "content-funcionalidades__containerSteps-stepTres-description">
                    <span>3</span>
                    <p>Conoce de cerca el <strong>perfil de tu inspector y funcionario.</strong> Evalúa estrategias según los casos y temas de mayor impacto.</p>
                  </div>
                  <div className= "content-funcionalidades__containerSteps-stepTres-images">
                    <img src={infraStepTresM} alt="imagen inspector" className="inspectorImgM" />
                    <img src={infraStepTresD} alt="imagen inspector" className="inspectorImgD" />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default SamiInsights;

