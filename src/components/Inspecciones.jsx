import React from 'react';
import laptopIcon from '../images/laptop.png'
import videoDemo from '../videos/sami-demo.mp4'
import posterVideoDemo from '../images/poster-videoSami.png';

function Inspecciones() {
  return(
    <section className="container-inspecciones">
      <div className="content-inspecciones">
        <p className="itemSubtitulo">LLEGARON LAS INPECCIONES</p>
        <h2 className="subtitulo">Quieres saber un poco más de nosotros, deja que Alonso te lo cuente</h2>
        <div className="content-inspecciones__container">
          <div className="content-inspecciones__container-description">
            <p>¿Aún con curiosidad?</p>
            <button>Solicita una demo</button>
          </div>
          <div className="content-inspecciones__container-video">
            <img src={laptopIcon} alt="imagen laptop" />
            <div className="div-video">
              <video src={videoDemo} controls poster={posterVideoDemo}></video>
            </div>
          </div>
          </div>
      </div>
    </section>
  )
}
export default Inspecciones;