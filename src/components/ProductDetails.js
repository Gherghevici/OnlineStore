import React, { useState, useEffect, useContext } from "react";
import { globalContext } from "../context/Ctx";
import { useParams } from "react-router-dom";
import "../styles/soloProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {getSoloProduct} from '../services/api';
function ProductDetails() {
  const { cartData } = useContext(globalContext);
  const [sendCartData, setSendCartData] = cartData;
  const [dataDetails, setDataDetails] = useState([]);
  const { id } = useParams();
  const [indexImg, setIndexImg] = useState(0);

  useEffect(() => {
    getSoloProduct(id)
    .then((resp)=>setDataDetails([resp]));
  }, [id]);
 

  return (
    <>
      <main className="cotainer-solo-product">
        <section className="container-solo-product-first-section">
          <div className="container-solo-product-drop-down-img-container">
            {dataDetails.map((value) => {
              return value.images.map((images, index) => {
                return (
                  <img
                    src={images}
                    alt="test"
                    onClick={() => setIndexImg(index)}
                    className={indexImg === index ? "selected" : ""}
                    key={index}
                  />
                );
              });
            })}
          </div>

          <div className="container-solo-product-center-img">
            {dataDetails.map((value) => {
              return value.images.map((images, index) => {
                if (index === indexImg) return <img src={images} alt="test" key={index}/>;
              });
            })}
          </div>
        </section>

        <section className="container-solo-product-second-section">
          {dataDetails.map((value, index) => {
            return (
              <>
                <div className="center-phone">
                  <h1>{value.title}</h1>
                  <div>
                    {[...Array(5)].map((v, i) => {
                      return value.rating > i ? (
                        <span className="stars" key={i}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      ) : (
                        <span className="star-colsed" key={i}>
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                      );
                    })}
                  </div>
                  <h3>${value.price}</h3>
                </div>
                <hr />
                <div className="options-container">
                  {value.description}
                </div>

                <hr />
                <form className="form-solo-product">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSendCartData([...sendCartData, ...dataDetails]);
                    }}
                    className="send-cart-btn"
                  >
                    ADD TO CART
                  </button>
                  
                </form>
              </>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
