import React from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="container-home">
      <Navbar />
      <article className="container-home__hero">
        <div className="container-home__hero-title" style={{ display: 'none' }}>
          <p className="container-home__hero-title-hi">¡HOLA, SOMOS SAMI!</p>
          <h1>Tus fiscalizaciones bajo control, más simples y transparentes</h1>
          <p>Sami facilita la gestión de tus fiscalizaciones, cada caso y actuación. Controla y monitorea todo el proceso, identifica los pendientes más cercanos de tu cartera en tiempo real y potencia tu relación con SUNAFIL.</p>
          <button>Descubre cómo</button>
        </div>
      </article>
      <h1 style={{ height: '500px' }}>HOME</h1>
    </div>
  );
}

export default Home;
