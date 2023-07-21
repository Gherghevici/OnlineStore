import React, { useEffect, useState } from 'react';
import '../styles/HOME.css';
import { getProducts } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faMagnifyingGlass,
  faEnvelope,
  faTree,
  faArrowRight,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';

function Home() {
  const [data, setData] = useState([]);
  const [caruselIndex, setCaruselIndex] = useState(9);

  useEffect(() => {
    getProducts()
    .then(data => setData(data))
    .catch(error => console.log(error))
  }, [])
  
  return (
    <div>
      <main className="main-container">
        <section className="flex">
          <div className="container-h1-p">
            <h1>A market place for every one!</h1>
            <p>
              Where we designed and developed experiences that make people's
              lifes simple
            </p>
          </div>
          <div className="logo">
            <img src={require('../images/logo.png')} alt="da"></img>
          </div>
        </section>
        <section className="flex">
          <div className="second-photo">
            <img src={require('../images/randomP.png')}></img>
          </div>

          <div className="container-second-element">
            <div className="container-second-element-column">
              <div className="container-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="container-description">
                <h3>Vendors and sellers</h3>
                <p>We verify and guarantee for our parteners</p>
              </div>
            </div>
            <div className="container-second-element-column">
              <div className="container-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
              <div className="container-description">
                <h3>Search what you need</h3>
                <p>You can if every thing you want on our web site</p>
              </div>
            </div>
            <div className="container-second-element-column">
              <div className="container-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="container-description">
                <h3>Keep up to date</h3>
                <p>You can recive promotional codes on your email adress</p>
              </div>
            </div>
            <div className="container-second-element-column">
              <div className="container-icon">
                <FontAwesomeIcon icon={faTree} />
              </div>
              <div className="container-description">
                <h3>Environmentally friendly</h3>
                <p>
                  Our mision is to protect the enviroment so we pack your
                  products with recible materials
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='promotional-sales'>
          <div>
            <h2 className="promotional-title">PROMOTIONAL SELLS</h2>
            <div>
              <div className="carusel-container">
                <span
                  className="left"
                  onClick={() =>
                    setCaruselIndex((prevValue) =>
                      prevValue === 9 ? (prevValue = 9) : prevValue - 3
                    )
                  }
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                
                {data?.map((value, index) => {
                  if (
                    value.id % 3 === 0 &&
                    index <= caruselIndex &&
                    index >= caruselIndex - 9
                  ) {
                    return (
                     window.innerWidth>990? <div
                        className={`${
                          caruselIndex - 6 === value.id ||
                          caruselIndex === value.id
                            ? 'carusel-element-par'
                            : 'carusel-element'
                        }`}
                        id="element"
                        key={`${value.id}`}
                      >
                        <FontAwesomeIcon icon={faPercent} />
                        <div className={`carusel-element-img `}>
                          <img src={value.thumbnail}></img>
                        </div>
                        <div>
                          <h4>{value.title}</h4>
                        </div>
                        <div>
                          <h4 className='cut-price'>${value.price}</h4>
                          <h2 className='reduce-price'>${Math.floor(value.price-(value.price*value.discountPercentage/100))}</h2>
                        </div>
                        
                      </div>
                      :
                      index<=caruselIndex&&index>=caruselIndex-3?<div
                      className={`${
                        caruselIndex - 6 === value.id ||
                        caruselIndex === value.id
                          ? 'carusel-element-par'
                          : 'carusel-element'
                      } solo-item-carusel`}
                      id="element"
                      key={`${value.id}`}
                    >
                      <FontAwesomeIcon icon={faPercent} />
                      <div className={`carusel-element-img `}>
                        <img src={value.thumbnail}></img>
                      </div>
                      <div>
                        <h4>{value.title}</h4>
                      </div>
                      <div>
                        <h4 className='cut-price'>${value.price}</h4>
                        <h2 className='reduce-price'>${Math.floor(value.price-(value.price*value.discountPercentage/100))}</h2>
                      </div>
                      
                    </div>:null
                    );
                  }
                })}
                <span
                  className="right"
                  onClick={() =>
                    setCaruselIndex((prevValue) =>
                      prevValue === 30 ? (prevValue = 30) : prevValue + 3
                    )
                  }
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default Home;
