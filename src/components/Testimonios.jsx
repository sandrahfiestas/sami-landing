import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import profileUnoIcon from '../images/profile-1.png';
import profileDosIcon from '../images/profile-2.png';
import linkedinIcon from '../images/linkedin.png';
import squareIcon from '../images/square.png';

function Testimonios() {
  return(
    <section className="content-testimonios">
      <p className="itemSubtitulo">TESTIMONIOS</p>
      <h2 className="subtitulo">Qué dicen de nosotros</h2>
      <div className="content-testimonios__slider">
      <div className="slider-container__slider">
        <img src={squareIcon} alt="cuadro" className="slider-container__slider-square" />
        <Carousel interval={null} controls={false}>
          <Carousel.Item>
            <div className="slider-container__slider-profile">
              <div className="slider-container__slider-profile-top">
                <img src={profileUnoIcon} alt="profile" className="slider-container__slider-profile-top-img"/>
                <div className="d-flex flex-column">
                  <img src={linkedinIcon} alt="logo linkedin" style={{ height: '13.2px', width: '14.39px' }}/>
                  <span>Felipe Gamboa</span>
                  <p>Director de Innovación Legal en Miranda & Amado</p>
                </div>
              </div>
              <div className="slider-container__slider-profile-down scroll-style">
                  <p>“Es una herramienta que permite al abogado centralizar sus casos y/o información necesaria la defensa. Además, tiene una mirada sobre el resultado de evolución de la cartera (que casos han sido resueltos, temas frecuentes, sedes más fiscalizadas).”</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-container__slider-profile">
              <div className="slider-container__slider-profile-top">
                <img src={profileDosIcon} alt="profile" className="slider-container__slider-profile-top-img"/>
                <div className="d-flex flex-column">
                  <img src={linkedinIcon} alt="logo linkedin" style={{ height: '13.2px', width: '14.39px' }}/>
                  <span>Jesús Rojas</span>
                  <p>Saval</p>
                </div>
              </div>
              <div className="slider-container__slider-profile-down scroll-style">
                  <p>“El formato es bastante intuitivo y amigable. Ayudará a los abogados que puedan gestionar sus inspecciones. Es bastante importante y de mucha ayuda cada funcionalidad pensada para la búsqueda de resoluciones que ayuden a resolver un problema legal.”</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-container__slider-profile">
              <div className="slider-container__slider-profile-top">
                <img src={profileDosIcon} alt="profile" className="slider-container__slider-profile-top-img"/>
                <div className="d-flex flex-column">
                  <img src={linkedinIcon} alt="logo linkedin" style={{ height: '13.2px', width: '14.39px' }}/>
                  <span>Evelyn</span>
                  <p>-</p>
                </div>
              </div>
              <div className="slider-container__slider-profile-down scroll-style">
                  <p>“Es una herramienta útil para la gestión de casos, me llamó la atención saber que puedo ver cómo se encuentra mi cartera. Me hizo recordar a la presentación de una BI que tuve con un Ing de la empresa, yo no veo mucho los números, pero es importantísimo ver el avance de los casos en una sola mirada.”</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slider-container__slider-profile">
              <div className="slider-container__slider-profile-top">
                <img src={profileDosIcon} alt="profile" className="slider-container__slider-profile-top-img"/>
                <div className="d-flex flex-column">
                  <img src={linkedinIcon} alt="logo linkedin" style={{ height: '13.2px', width: '14.39px' }}/>
                  <span>Franz</span>
                  <p>-</p>
                </div>
              </div>
              <div className="slider-container__slider-profile-down scroll-style">
                  <p>“Me encantaría contar con un sistema como sami, que me permita recibir alertas sobre pendientes y/o próximos vencimientos, poder tener novedades relacionadas a mi cartera.”</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      </div>
    </section>
  )
}

export default Testimonios;