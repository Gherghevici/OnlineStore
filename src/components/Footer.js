import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-element-column">
        <div>
          <h3>NEWSLETTER</h3>
        </div>
        <div>
          <div>
            <h2>SUBSCRIBE TO OUR NEWSLETTER !</h2>
          </div>
          <div>
            <input placeholder="Adresa ta de e-mail..." id="newsletter"></input>
            <button> SUBSCRIBE !</button>
          </div>
        </div>
      </div>
      <div className="footer-element-column">
        <div>
          <h3>MORE INFORMATION</h3>
        </div>
        <div>
          <div>Payment Methods</div>
          <div>Delivery Methods</div>
          <div>Return Policy</div>
          <div>ANPC</div>
        </div>
      </div>
      <div className="footer-element-column">
        <div>
          <h3>ABOUT US</h3>
        </div>
        <div>
          <div>Terms and conditions</div>
          <div>GDPR</div>
          <div>Complaints Policy</div>
          <div>Cookies Policy</div>
        </div>
      </div>
      <div className="footer-element-column">
        <div>
          <h3>My Account</h3>
        </div>
        <div>
          <div>Account Details</div>
          <div>Order History</div>
          <div>Delivery Adress</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
