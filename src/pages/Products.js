import React, { useContext, useEffect, useState } from 'react';
import { globalContext } from '../context/Ctx';
import '../styles/products.css';
import '../styles/productList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faCartShopping,
  faPercent,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getProducts, getProductsCategories } from '../services/api';

function Products() {
  const [productsCategories, setProductsCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const pageQty = 10;
  const { windowW } = useContext(globalContext);
  const [win] = windowW;

  useEffect(() => {
    getProducts(pageQty, pageNo)
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, [pageNo]);

  useEffect(() => {
    getProductsCategories()
      .then((data) => setProductsCategories(data))
      .catch((error) => console.log(error));
  }, []);

  function filterProducts(category) {
    async function getProductsByCategories(category) {
      const res = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const response = await res.json();
      setProducts(response.products);
    }
    getProductsByCategories(category);
  }

  function selectHandler(e) {
    let newProducts = [];
    if (e.target.value == 'popularitate') {
      newProducts = products.toSorted((a, b) => {
        if (a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        } else {
          return 0;
        }
      });
      setProducts(newProducts);
    } else if (e.target.value == 'pret') {
      newProducts = products.toSorted((a, b) => {
        if (a.price > b.price) {
          return 1;
        } else if (a.price < b.price) {
          return -1;
        }
      });
      setProducts(newProducts);
    }
  }
  return (
    <>
      <div className="products-container">
        {win ? (
          <div className="category-container">
            <h2>Category</h2>
            {productsCategories.length > 0 &&
              productsCategories?.map((category, index) => {
                return (
                  <div
                    className="category-container-elements"
                    onClick={() => filterProducts(category)}
                    key={index}
                  >
                    {category}
                  </div>
                );
              })}
            <div
              className="category-container-elements"
              onClick={() =>
                getProducts(pageQty, 0).then((data) => setProducts(data))
              }
             key={"all"}
            >
              All Products
            </div>
          </div>
        ) : (
          <></>
        )}
        <section className="section-container">
          <h1>Products</h1>
          <div className="filter-container">
            <div>
              Show 1 - {products?.length >= 15 ? 15 : products?.length} products
              of {products?.length}
            </div>
            <div>
              <select id="dropDowSort" onChange={(e) => selectHandler(e)}>
                <option value="popularitate">Sorteaza dupa popularitate</option>
                <option value="pret">Sorteaza dupa pret</option>
              </select>
            </div>
          </div>
          <div className="list-container">
            {products.length > 0 &&
              products.map((value, index) => {
                return (
                  <Link to={`/products/${value.id}`} className="container" key={index}>
                    <div className="test" key={value.id}>
                      <div className="subcontainer-info">
                        <div>
                          <h2>{value.title}</h2>
                          <div>
                            {[...Array(5)].map((v, i) => {
                              return Math.floor(value.rating) > i ? (
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
                        </div>

                        <div>
                          <p>{value.description}</p>
                        </div>
                        <div>
                          <button className="btn">
                            <span
                              className={`first-span ${
                                (index + 1) % 3 === 0 ? ' Reduce-Price' : ''
                              }`}
                            >
                              {' '}
                              $
                              {(index + 1) % 3 === 0
                                ? Math.floor(
                                    value.price -
                                      (value.price * value.discountPercentage) /
                                        100
                                  )
                                : value.price}
                            </span>
                            <span className="first-span-shopping-cart">
                              <FontAwesomeIcon icon={faCartShopping} />
                            </span>
                            <span className="second-span">Get now</span>
                          </button>
                        </div>
                      </div>

                      <div className="subcontainer-img">
                      {(index+1)%3==0?<div className='reduce-product-svg'><FontAwesomeIcon icon={faPercent} /></div>:null}
                        <img src={`${value.thumbnail}`} />
                        
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
          <div className="pages-products-container">
            <button
              className="btn-pages"
              onClick={() =>
                setPageNo((state) => (state > 0 ? state - 1 : state))
              }
            >
              {'<'}
            </button>
            <div className="pages-nr">
              <button on onClick={()=>setPageNo(prev=>prev=pageNo)}  className="pages-nr-active">{pageNo + 1}</button>
              <button on onClick={()=>setPageNo(prev=>prev=pageNo+1)} >{pageNo + 2}</button>
              <button on onClick={()=>setPageNo(prev=>prev=pageNo+2)} >{pageNo + 3}</button>
            </div>

            <button
              className="btn-pages"
              onClick={() => setPageNo((state) => state + 1)}
            >
              {'>'}
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Products;
