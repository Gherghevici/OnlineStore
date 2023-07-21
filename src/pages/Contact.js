import React from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';


function Contact() {
  return (
    <>
      
      <main className="contact-container">
        <section className="details-container">
          <div><h2>Store Information</h2></div>
          <div>
            
            <div className="icon-contact-container">
              <FontAwesomeIcon icon={faMapLocationDot}  size='xl' color='red'/>
            </div>
            <h3>Market Palce SRL</h3>
            <p>Sos lorem ipsum text test area paragraf nr. 1233 Iasi</p>
          </div>
          <div>
            <div className="icon-contact-container">
              <FontAwesomeIcon icon={faPhone}  size='xl' color='red'/>
            </div>
            <h3>Telefon:</h3>
            <p>12345678</p>
          </div>
          <div>
            <div className="icon-contact-container">
              <FontAwesomeIcon icon={faEnvelope}  size='xl' color='red'/>
            </div>
            <h3>Email:</h3>
            <p>contactMarketPlace@gmail.com</p>
          </div>
        </section>
        <section className="message-container">
          <div>
            <h2>Contact us</h2>
          </div>
          <form className="form">
            <div className="name-email-container">
              <div className="column">
                <label htmlFor="name">Name:</label>
                <input id="name" type="text"></input>
              </div>
              <div className="column">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email"></input>
              </div>
            </div>
            <div className="column">
              <label htmlFor="subject">Subject:</label>
              <input id="subject" type="text"></input>
            </div>
            <div className="column">
              <label htmlFor="mesage">Mesage:</label>
              <textarea id="mesage" type="text" rows={4} cols={50}></textarea>
            </div>

            <button className="send-btn">Send</button>
          </form>
        </section>
      </main>
      
    </>
  );
}

export default Contact;
