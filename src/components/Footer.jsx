import React from 'react';
import logoTipoWhite from '../images/svg/logo-tipo-white.svg';
import gpsIcon from '../images/gps.png';
import mobileIcon from '../images/mobile.png';
import mailIcon from '../images/mail.png';
import twitterIcon from '../images/svg/twitter.svg';
import linkedinIcon from '../images/svg/linkedin.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="container-footer__logoBtn">
          <img src={logoTipoWhite} alt="logotipo" />
          <p className="container-footer__logoBtn-copyright">© 2021 - Form | All right reserved</p>
          <p className="container-footer__logoBtn-conversemos">¡Conversémos!</p>
          <p className="container-footer__logoBtn-escribenos">Escríbenos.</p>
          <button>
            <a className="aNoStyle" href="#contactanos">Contáctanos</a></button>
          </div>
        <div className="container-footer__info">
          <h2>Contáctanos a través de:</h2>
          <div className="container-footer__info-item">
            <img src={gpsIcon} alt="imagen gps" style={{ height:'19px', width:'15px', marginTop: '-10px' }} />
            <p>Av. José Larco 1301 Piso 20, (Torre Parque Mar)  Miraflores, Lima-Perú</p>
          </div>
          <div className="container-footer__info-item">
            <img src={mobileIcon} alt="imagen celular" style={{ height: '21.7px', width: '13.61px' }} />
            <p>+51 928184999</p>
          </div>
          <div className="container-footer__info-item">
            <img src={mailIcon} alt="imagen correo" style={{ height: '12.19px', width: '18.47px' }} />
            <p>samiconsultas@sidetech.com</p>
          </div>
        </div>
        <div className="container-footer__redes">
        <div>
          <img src={twitterIcon} alt="imagen twitter" className="container-footer__redes-twitter" />
          <img src={linkedinIcon} alt="imagen linkedin" className="container-footer__redes-linkedin"  />
        </div>
        <p>© 2021 - Form | All right reserved</p>
        </div>
      </div>
    </div>

  )
}

export default Footer;
