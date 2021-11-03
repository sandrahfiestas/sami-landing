import React from 'react';
import buscadorIcon from '../images/buscador.png';
import userIcon from '../images/user-sami.png';

function OptionBusqueda() {
  return(
    <div className="options">
    <div className="options__texts">
      <h2 className="options-subtitulo">Busqueda conceptual</h2>
      <p className="options-description">Acceso rápido y facil de todo lo relacionado a tu cartera. Podrás encontrar desde el último caso agregado hasta la resolución más antigua.</p>
    </div>
    <div className="options-images">
      <div className="options-images__left">
        <img src={buscadorIcon} alt="imagen tarjeta" className="options-images__left-cardCase"/>
      </div>
      {/* <div className="container-user"> */}
        <img src={userIcon} alt="imagen usuario" className="options-images-user" />
      {/* </div> */}
    </div>
    </div>
  )
}

export default OptionBusqueda;