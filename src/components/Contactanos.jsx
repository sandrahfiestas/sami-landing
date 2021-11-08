import React, { useState } from 'react';
import serviceContact from '../data/api/ContactService';
import { Form as FinalForm, Field } from 'react-final-form';

function Contactanos() {

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
        console.log(response);
      })
    }

  return (
    <div className="contactanos">
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
    </div>
  )
}

export default Contactanos;
