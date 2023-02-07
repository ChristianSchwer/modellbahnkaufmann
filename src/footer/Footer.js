import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';
import './Footer.css'

function Footer() {
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [emailStatus, setEmailStatus] = useState('');

  const sendMail = async (email, message) => {
    if (email === '' || message === '') {
      console.log('error');
    } else {
      let response = await fetch("http://Modellbahnkaufmann.at/sendMail.php", {
        method: 'POST',
        headers: { 
          Access: '*/*',
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ Email: email, Message: message })
      })
      let res = await response.json();
      if (res === "success") {
        setEmailStatus("E-Mail gesendet.");
      } else {
        setEmailStatus("Wir konnten Ihre Nachricht leider nicht empfangen.")
      }
    }
  }

  return (
    <div className='footer-container'>
      <section className="footer-subscription-head">
        <p className='footer-subscription-heading'>Kontaktiere uns oder schreibe eine Nachricht:</p>
      </section>
      <section className='footer-subscription'>
        <p className='footer-subscription-text'>Modellbahn Kaufmann</p>
        <p className='footer-subscription-text'>Bahnhofstraße 12</p>
        <p className='footer-subscription-text'>6850 Dornbirn</p>
        <p className='footer-subscription-text'>+43 5572/54149</p>
        <p className='footer-subscription-text'>modellbahn@avidonet.at</p>
      </section>
      <section className="footer-message">
        <input type="email" placeholder="Deine E-Mail Adresse" className="footer-massage-email" onChange={(e) => setEmail(e.target.value)}></input>
        <textarea type="textarea" placeholder="Deine Nachricht" className="footer-message-text" onChange={(e) => setMessage(e.target.value) }></textarea>
        <button className="footer-message-button" onClick={e => {sendMail(email, message)}}>Send <i className="fas fa-angle-double-right"></i></button>
        <p className='email-message'>{emailStatus}</p>
      </section>
      <section className="footer-map">
        <iframe  
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4045.19225591091!2d9.7387757975843!3d47.41502374208843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6b4cd62aa1cd%3A0x43293b498cc161ea!2sModellbahn%20Kaufmann!5e0!3m2!1sde!2sat!4v1641597140065!5m2!1sde!2sat" 
          width="100%" height="300px"
          allowFullScreen="" 
          loading="lazy"
          className="footer-map-iframe">
        </iframe>
      </section>
      <section className='footer-links'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            <img src={Logo} className='app-logo-footer' alt='logo'/>
          </Link>
        </div>
        <div className='social-icons'>
          <a className='social-icon-link instagram'
            href={'//www.instagram.com/modellbahnkaufmann/'}
            target='_blank'
            rel="noreferrer noopener"
            aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
          </a>
          <a className='social-icon-link facebook'
              href={'//www.facebook.com/profile.php?id=100074361027666'}
              target='_blank'
              rel="noreferrer noopener"
              aria-label='Facebook'
              >
                  <i className='fab fa-facebook'></i>
          </a>
          <a className='social-icon-link github'
            href={'//github.com/ChristianSchwer'}
            target='_blank'
            rel="noreferrer noopener"
            aria-label='Github'
            >
              <i className='fab fa-github'></i>
          </a>
        </div>
        <div className='footer-links-item'>
          <Link to='/legal' className='footer-link'>
            Impressum
          </Link>
          <Link to='/disclaimer' className='footer-link'>
            Datenschutz
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Footer;