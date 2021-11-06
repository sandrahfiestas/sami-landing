import React from 'react';
import jurisprudenciaIcon from '../images/jurisprudencia.png';
import userIcon from '../images/user-sami.png';

function OptionJurisprudencia() {
  return(
    <div className="options">
    <div className="options__texts">
      <h2 className="options-subtitulo">Jurisprudencia</h2>
      <p className="options-description">Agiliza el tiempo que usas buscando resoluciones. <strong> Proximamente en Sami </strong> podrás contar con acceso automatizado a jurisprudencia relevante para tu cartera.</p>
    </div>
    <div className="options-images">
      <div className="options-images__left">
        <img src={jurisprudenciaIcon} alt="imagen tarjeta" className="options-images__left-jurisprudencia"/>
      </div>
      <div className="container-userJurisprudencia">
        <img src={userIcon} alt="imagen usuario" className="options-images-user" />
      </div>
    </div>
    </div>
  )
}

export default OptionJurisprudencia;