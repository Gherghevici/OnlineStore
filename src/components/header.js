import React, { useState, useEffect,useContext } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faEarthEurope,
  faPhone,
  faCartShopping,
  faBars,
  faXmark,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { globalContext } from '../context/Ctx';

function Header() {
  const {windowW,modal,uName} = useContext(globalContext)
  const [,setMState] = modal;
  const [userName] = uName;
  const [openClose, setOpenClose] = useState('');
  const [btn, setBtn] = useState(true);
  const [win] = windowW;
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  function open() {
    if (btn) {
      setBtn(false);

      setOpenClose('menu-list-animationOpen');
    } else {
      setBtn(true);
      setOpenClose('menu-list-animationClose');
    }
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  return win ? (
    <header className={`section-header ${show ? ' active' : ' hidden'}`}>
      <div className="welcome-login">
        <div>Welcome to Market-Place!</div>
        <p onClick={()=>setMState(true)}>{<FontAwesomeIcon icon={faUser} />}{userName[0]?.fName?`Welcome ${userName[0].fName}` :"Login"}</p>
      </div>
      <nav className="menu-container">
        <div className="icons">
          <button className="button-menu" onClick={() => open()}>
            {btn ? (
              <FontAwesomeIcon icon={faBars} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faXmark} size="2x" />
            )}
          </button>
          <Link to="/">
            <img
              className="img"
              src={require('../images/logo.png')}
              alt="da"
            ></img>
          </Link>
        </div>
        <div className="icons">
          <Link to="/cos">
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </Link>
        </div>
      </nav>
      <div className={`menu-list ${openClose}`}>
        <hr></hr>
        <div>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </header>
  ) : (
    <>
      <nav className={`${show ? ' active' : ' hidden'}`}>
        <div className="menu-container">
          <div>
            <Link to="/">
              <img
                className="img"
                src={require('../images/logo.png')}
                alt="da"
              ></img>
            </Link>
          </div>
          <div className="text" onClick={()=>setMState(true)}>{<FontAwesomeIcon icon={faUser} />}{userName[0]?.fName?`Welcome ${userName[0].fName}` :"Login"}</div>
        </div>
        <hr></hr>
      </nav>
      <div className="mobile-nav">
        <div>
          <hr></hr>
        </div>
        <div className="mobile-nav-container-elements">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </Link>
          <Link to="/products">
            <FontAwesomeIcon icon={faEarthEurope} />
            <p>Products</p>
          </Link>
          <Link to="/contact">
            <FontAwesomeIcon icon={faPhone} />
            <p>Contact</p>
          </Link>
          <Link to="/cos">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
