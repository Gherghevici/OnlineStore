import React, { useState, useContext } from 'react';
import '../styles/checkOut.css';
import { globalContext } from '../context/Ctx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLock,
  faGift,
  faCartShopping,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
function CheckOut() {
  const { price, cartData } = useContext(globalContext);
  const [thePrice,setThePrice] = price;
  const [cartDataLength,setCartDataL] = cartData;
  const [cardNumber,setCardNumber] = useState("");
  const [cardName,setCardName] = useState("");
  const [cardDate,setCardDate] = useState("");
  const [ccv,setCcv] =useState("");
  

  const handlerCardValues = (e) =>{
    if(e.target.placeholder ==="Name for the card"){
      setCardName((prevValue)=> prevValue=e.target.value)
    }
    if(e.target.placeholder ==="Card number"){
      setCardNumber((prevValue)=>prevValue=e.target.value)
      
    }
    if(e.target.placeholder ==="date"){
      setCardDate((prevValue)=> prevValue=e.target.value)
    }
    if(e.target.placeholder ==="CCV"){
      setCcv((prevValue)=> prevValue=e.target.value)
    }
      
  }
  
  return (
    <>
     <main className="main-CheckOut">
      <section className="forms-checkOut-container">
        <div className="form-checkOut">
          <h2>Delivery Adress</h2>
          <div className="checOut-2inputs">
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
          </div>
          <div className="checkOut-solo-input">
            <input placeholder="Apt/Suite/Floor (Optional)" />
          </div>
          <div className="checkOut-3inputs">
            <input placeholder="City" />
            <select>
              <option>Romania</option>
            </select>
            <input placeholder="Zip Code" />
          </div>
        </div>
        <div className="form-checkOut">
          <h2>Contact Info</h2>
          <div className="checOut-2inputs">
            <input placeholder="Email for order Tracking" />
            <input placeholder="Phone for delivery Contact" />
          </div>
          <p className="gdpr">
            <FontAwesomeIcon icon={faLock} /> Your privacy is important to us.
            View our privacy policy here. We'll only contact you if there's an
            issue with your order. We'll also look for coupons associated with
            your email and phone number
          </p>
          <div className="check-box">
            <input type="checkbox" />{' '}
            <label>Get text alerts for your order on your mobile</label>
          </div>
        </div>
        <div className="form-checkOut fourth">
          <h2>Card info</h2>
          <div className="checOut-2inputs">
           <input placeholder='Name for the card' value={cardName} onChange={handlerCardValues} />
           <input placeholder='Card number' value={cardNumber} type='text' onChange={handlerCardValues} maxLength={16}/>
          </div>
          <div className='checOut-2inputs'>
            <input placeholder='date' value={cardDate} onChange={handlerCardValues} maxLength={5} />
            <input placeholder='CCV' value={ccv} onChange={handlerCardValues} maxLength={4} />
          </div>

        </div>
        <div className="form-checkOut">
          <h2>Gift Options</h2>
          <div className="check-box">
            <input type="checkbox" />{' '}
            <label>
              {' '}
              <FontAwesomeIcon icon={faGift} />
              Order includes gift(s). The packing slip included with your order
              will not desplay prices.
            </label>
          </div>
        </div>
       
      </section>
      <section className="Order-summary-container">
        <div className='order-sumary-first-container'>
          <div>
            <h1>Order summary</h1>
          </div>
          <div>
            <p>
              <FontAwesomeIcon icon={faCartShopping} /> {cartDataLength.length}{' '}
              item(s) in Cart
            </p>
            <hr></hr>
          </div>
          <div className="numbers-summary-container">
            <div className="numbers-summary">
              <p>Order Subtotal</p>
              <p>${thePrice}</p>
            </div>
            <div className="numbers-summary">
              <p>Sales Discount</p>
              <p className="sales-number">0</p>
            </div>
            <div className="numbers-summary">
              <strong>Shipping</strong>
              <strong>FREE</strong>
            </div>
            <div className="numbers-summary">
              <p>Cupons</p>
              <p>0</p>
            </div>
            <hr></hr>
          </div>

          <div className="numbers-summary-total">
            <strong>
              Total <span>${thePrice}</span>
            </strong>
          </div>
        </div>

        <div className='checkout-card-container'>
           <img src={require('../images/map.png')} className='map-img' alt='#'/>
           <img src={require('../images/chip.png')} alt='#' className='chip'/>
            <div className='card-nmbr'>
              {cardNumber.split("").map((value,index)=>{
                return index%4===0 && index>0? " / "+value : value;
              })}
            </div>
            <div>
              <div>{cardName}</div>
              <div>{cardDate}</div>
            </div>
        </div>
      </section>
    </main>
    <div onClick={()=>{return setCartDataL([]),setThePrice(0)}} className='checkOut-confirm-btn'>
      <button ><span className='confirm-text-btn'>Confirm order</span><span className='visibleCheck'><FontAwesomeIcon icon={faCheck} /></span></button>
    </div>
  
    </>
  )
}

export default CheckOut;
