import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import checkIcon from '../images/check.png';

function Planes() {
  return(
    <section className="container-planes">
    <div className="container-planes__content">
      <div className="container-planes__content-title">
        <p className="itemSubtitulo">PLANES</p>
        <h2 className="subtitulo">Nos ajustamos a cada empresa y a cada Alonso ®</h2>
      </div>
      <div className="container-planes__content-container">
        <div className="container-planes__content-container-options">
            <button className="btnNoStyle" style={{ height: '20px', width: '78px', border: '1px solid #FF3355', borderRadius: '10px', fontSize: '10px', lineHeight: '20px', fontWeight: '500', color: '#FF3355', marginRight: '15px'}}>Mensual</button>
            <button className="btnNoStyle" style={{ height: '20px', width: '61px', border: '1px solid rgba(210, 214, 225, 1)', borderRadius: '10px', fontSize: '10px', lineHeight: '20px', fontWeight: '500', color: '#969CBA', marginLeft: '15px' }}>Anual</button>
        </div>

        <div className="containerCards-M">
          <div className="container-planes__content-container-cards">
            <Carousel interval={null} controls={false}>
              <Carousel.Item>
                <div className="container-planes__content-container-cards-card">
                  <p className="container-planes__content-container-cards-card-title">Básico</p>
                  <p className="container-planes__content-container-cards-card-description">Organize across all apps by hand</p>
                  <div className="container-planes__content-container-cards-card-price">
                    <span>US$</span>
                    <br></br>
                    <strong>0,000</strong>
                    <p>Por mes</p>
                  </div>
                  <div className="container-planes__content-container-cards-card-detail">
                    <p className="title">DETALLE</p>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                  </div>
                  <p className="container-planes__content-container-cards-card-enlace">Ver plan completo</p>
                  <button>Lo quiero</button>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="container-planes__content-container-cards-card">
                  <p className="container-planes__content-container-cards-card-title">STANDART</p>
                  <p className="container-planes__content-container-cards-card-description">Organize across all apps by hand</p>
                  <div className="container-planes__content-container-cards-card-price">
                    <span>US$</span>
                    <br></br>
                    <strong>0,000</strong>
                    <p>Por mes</p>
                  </div>
                  <div className="container-planes__content-container-cards-card-detail">
                    <p className="title">DETALLE</p>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                  </div>
                  <p className="container-planes__content-container-cards-card-enlace">Ver plan completo</p>
                  <button>Lo quiero</button>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="container-planes__content-container-cards-card premium" style={{ background: 'linear-gradient(39.97deg, #0E3141 0.79%, #FF3355 79.29%)', color: 'white' }}>
                  <p className="container-planes__content-container-cards-card-title">PREMIUM</p>
                  <p className="container-planes__content-container-cards-card-description">Organize across all apps by hand</p>
                  <div className="container-planes__content-container-cards-card-price">
                    <span>US$</span>
                    <br></br>
                    <strong>0,000</strong>
                    <p>Por mes</p>
                  </div>
                  <div className="container-planes__content-container-cards-card-detail">
                    <p className="title" style={{ color: 'white' }}>DETALLE</p>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                    <div className="item">
                      <img src={checkIcon} alt="check" />
                      <p>Organize across all apps by hand</p>
                    </div>
                  </div>
                  <p className="container-planes__content-container-cards-card-enlace" style={{ color: 'white' }}>Ver plan completo</p>
                  <button style={{ background: 'white', color: '#EF2779', border: '2px solid white' }}>Lo quiero</button>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>


        <div className="containerCards-D">
          <div className="container-planes__content-container-cards">
              <div className="container-planes__content-container-cards-card">
                <p className="container-planes__content-container-cards-card-title">Básico</p>
                <p className="container-planes__content-container-cards-card-description">Organize across all apps by hand</p>
                <div className="container-planes__content-container-cards-card-price">
                  <span>US$</span>
                  <br></br>
                  <strong>0,000</strong>
                  <p>Por mes</p>
                </div>
                <div className="container-planes__content-container-cards-card-detail">
                  <p className="title">DETALLE</p>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                </div>
                <p className="container-planes__content-container-cards-card-enlace">Ver plan completo</p>
                <button>Lo quiero</button>
              </div>

              <div className="container-planes__content-container-cards-card">
                <p className="container-planes__content-container-cards-card-title">STANDART</p>
                <p className="container-planes__content-container-cards-card-description">Organize across all apps by hand</p>
                <div className="container-planes__content-container-cards-card-price">
                  <span>US$</span>
                  <br></br>
                  <strong>0,000</strong>
                  <p>Por mes</p>
                </div>
                <div className="container-planes__content-container-cards-card-detail">
                  <p className="title">DETALLE</p>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                </div>
                <p className="container-planes__content-container-cards-card-enlace">Ver plan completo</p>
                <button>Lo quiero</button>
              </div>

              <div className="container-planes__content-container-cards-card premium" style={{ background: 'linear-gradient(39.97deg, #0E3141 0.79%, #FF3355 79.29%)', color: 'white' }}>
                <p className="container-planes__content-container-cards-card-title">PREMIUM</p>
                <p className="container-planes__content-container-cards-card-description">Organize across all apps by hand</p>
                <div className="container-planes__content-container-cards-card-price">
                  <span>US$</span>
                  <br></br>
                  <strong>0,000</strong>
                  <p>Por mes</p>
                </div>
                <div className="container-planes__content-container-cards-card-detail">
                  <p className="title" style={{ color: 'white' }}>DETALLE</p>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                  <div className="item">
                    <img src={checkIcon} alt="check" />
                    <p>Organize across all apps by hand</p>
                  </div>
                </div>
                <p className="container-planes__content-container-cards-card-enlace" style={{ color: 'white' }}>Ver plan completo</p>
                <button style={{ background: 'white', color: '#EF2779', border: '2px solid white' }}>Lo quiero</button>
              </div>
          </div>
        </div>


    </div>
  </div>
    </section>
  )
}

export default Planes;