import React, { useState, useContext, useEffect } from 'react';
import { globalContext } from '../context/Ctx';
import '../styles/cos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Cos() {
  const { cartData, price } = useContext(globalContext);
  const [data, setData] = cartData;
  const [totalPriceCart, setTotalPriceCart] = price;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTotalPriceCart(
      data.reduce((p, c) => {
        return p + c.price;
      }, 0)
    );

    const temp = [];
    data.forEach((item, index) => {
      const found = temp.find((elem) => elem.id === item.id);
      if (found) {
        found.units++;
      } else {
        temp.push({
          ...item,
          units: 1,
        });
      }
    });
    setProducts(temp);
  }, [data]);
  const deleteProduct = (index) => {
    setData(
      data.filter((value, i) => {
        return i != index;
      })
    );
  };

  return data.length > 0 ? (
    <main className="cos-main-container">
      <section className="cos-first-section">
        {products?.map((value, index) => {
          return (
            <>
              <div className="cos-item-container">
                <div className="cos-item-container-img">
                  <img src={value.thumbnail} alt="#"></img>
                </div>
                <div>
                  <div>{value.title}</div>
                  <div>${value.price * value.units}</div>
                </div>
                <div className="cos-units-delete">
                  <div>
                    Units <span>{value.units}</span>
                  </div>
                  <div
                    onClick={() => deleteProduct(index)}
                    className="delete-prod"
                  >
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                  </div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
      </section>
      <section className="cos-second-section">
        <h1>Cart</h1>
        <h2>Total: {totalPriceCart}</h2>
        <div className="cos-container-btn">
          <Link to="/cos/checkout">
            <button className="checkOut-btn">Continue to check out</button>
          </Link>

          <button className="reset-cart-btn" onClick={() => setData([])}>
            Reset cart
          </button>
        </div>
      </section>
    </main>
  ) : (
    <main className="no-products-container">
      <div>
        <h1>You didn't buy any products</h1>
        <h3>
          Go shop on our{' '}
          <span className="no-products-link">
            <Link to={'/products'}>Products page!</Link>
          </span>
        </h3>
      </div>
    </main>
  );
}

export default Cos;
