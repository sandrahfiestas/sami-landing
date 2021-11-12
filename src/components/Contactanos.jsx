import React, { useState } from 'react';
import {
  Modal,
 } from 'react-bootstrap';
import serviceContact from '../data/api/ContactService';
import { Form as FinalForm, Field } from 'react-final-form';
import closeIcon from '../images/svg/close.svg';
import checkIcon from '../images/svg/check-circle.svg';

function Contactanos() {
  const [showModalOk, setShowModalOk] = useState(false);
  const handleShowModalOk = () => setShowModalOk(true);
  const handleCloseModalOk = () => setShowModalOk(false);

  const [initialDataContact, setInitialDataContact] = useState({
    nombres: '',
    correo: '', 
    empresa: '',
    cargo: '',
  });
    const enviaDataContactanos = async (values) => {
      const dataContact = {
        nombre_completo: values.nombres,
        correo_electronico: values.correo,
        empresa: values.empresa,
        cargo: values.cargo,
      }
      console.log(dataContact);
      setInitialDataContact({...initialDataContact});
      await serviceContact.saveContact(dataContact).then((response) => {
        handleShowModalOk();
        console.log(response);
      })
    }

  return (
    <div id="contactanos" className="contactanos">
      <div className="container-contactanos">
        <p className="container-contactanos__title">SOLICITA UN DEMO O COMUNICATE CON NOSOTROS</p>
          <FinalForm
            onSubmit={(values) => enviaDataContactanos(values)}
            initialValues={{initialDataContact}}
            render={({
              handleSubmit, invalid, pristine, dirtySinceLastSubmit,
            }) => (
              <>
                <form onSubmit={handleSubmit} className="container-contactanos__form">
                  <div className="container-contactanos__form-items">
                    <div className="container-contactanos__form-items-left">
                      <label>
                        <p>Nombre completo</p>
                        <Field component="input" type="text" name="nombres" placeholder="Alonso Jesús Aguirre Deslagado" />
                      </label>
                      <label>
                        <p>Correo electrónico</p>
                        <Field component="input" type="email" name="correo" placeholder="alonso@gmail.com" />
                      </label>
                    </div>
                    <div className="container-contactanos__form-items-right">
                      <label>
                        <p>Empresa</p>
                        <Field component="input" type="text" name="empresa" placeholder="Alicorp" />
                      </label>
                      <label>
                        <p>Cargo</p>
                        <Field component="input" type="text" name="cargo" placeholder="Abogado" />
                      </label>
                    </div>
                  </div>
                  <button
                    className="container-contactanos__form-button"
                    type="submit"
                    disabled={(invalid && !dirtySinceLastSubmit) || pristine}
                  >
                    Enviar
                  </button>
                </form>
              </>
            )}
          />
      </div>
      <Modal
        show={showModalOk}
        onHide={handleCloseModalOk}
        keyboard={false}
        className="modal fade"
        id="modal-okContactanos"
        tabIndex="-1"
        aria-labelledby="contained-modal-title-vcenter"
        aria-hidden="true"
        centered
      >
      <div className="d-flex modal-dialog modal-okContactanos">
        <div className="container-modal" style={{ width: '100%' }}>
          <div className="header-ok d-flex justify-content-end div-btnClose">
            <img src={closeIcon} alt="cerrar" onClick={handleCloseModalOk} style={{ cursor: 'pointer' }} />
          </div>

          <div className="body-ok d-flex flex-column justify-content-center align-items-center">
            <img src={checkIcon} alt="ok"/>
            <p className="title">¡Te has registrado correctamente!</p>
            <p className="description">Gracias por confiar en nosotros para la gestión de tus casos. <br />En las próximas 24 horas nos pondremos en contacto contigo.</p>
          </div>
        </div>
      </div>
      </Modal>
    </div>
  )
}

export default Contactanos;
