import React from 'react';
import soliDocIcon from '../images/solicitud-doc.png';
import userIcon from '../images/user-sami.png';

function OptionSolicitud() {
  return(
    <div className="options">
    <div className="options__texts">
      <h2 className="options-subtitulo">Solicitud de documentos</h2>
      <p className="options-descriptionSolicitud">Envía requerimientos a las áreas internas de tu empresa. Mantente al tanto si los documentos solicitados están por vencer o fueron entregados a tiempo.</p>
    </div>
    <div className="options-images">
      <div className="options-images__left">
        <img src={soliDocIcon} alt="imagen tarjeta" className="options-images__left-soliDoc"/>
      </div>
      <div className="container-userSolicitud">
        <img src={userIcon} alt="imagen usuario" className="options-images-user" />
      </div>
    </div>
    </div>
  )
}

export default OptionSolicitud;