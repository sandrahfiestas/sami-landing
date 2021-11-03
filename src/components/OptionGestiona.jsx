import React from 'react';
import brujulaIcon from '../images/brujula.png';
import cardCaseIcon from '../images/card-case.png';
import userIcon from '../images/user-sami.png';
function OptionGestiona() {
  return(
    <div className="options">
    <div className="options__texts">
      <h2 className="options-subtitulo">Gestiona tus casos, actuaciones y vencimientos</h2>
      <p className="options-description">Lleva un control de tu cartera, monitorea el proceso de tus casos y analiza el impacto del riesgo de las inspecciones a cargo.</p>
    </div>
    <div className="options-images">
      <div className="options-images__left">
        <img src={brujulaIcon} alt="imagen brujula" className="options-images__left-brujula"/>
        <img src={cardCaseIcon} alt="imagen tarjeta" className="options-images__left-cardCase"/>
      </div>
      {/* <div className="container-user"> */}
        <img src={userIcon} alt="imagen usuario" className="options-images-user" />
      {/* </div> */}
    </div>
    </div>
  )
}

export default OptionGestiona;