import React from 'react';
import logoIcon from '../images/logo-Sami.png'

function Insights() {
  return(
    <section className="content-insights">
      <p className="itemSubtitulo">SAMI INSIGHTS</p>
      <h2 className="subtitulo">Decisiones más acertadas y más rápidas con SAMI Insights</h2>
      <div className="content-insights__textSimbolo">
        Encuentra este símbolo
        <img src={logoIcon} alt="logo Sami" />
      </div>
      <div className="content-insights__description">
        <div className="content-insights__description-text">
          <p>Y vive tus fiscalizaciones más data-driven con insigths</p>
        </div>
        <div className="content-insights__description-cardFunci" />
        <div className="content-insights__description-materias" />
      </div>
    </section>
  )
}

export default Insights;