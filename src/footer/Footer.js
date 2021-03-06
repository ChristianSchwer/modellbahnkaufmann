import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';
import './Footer.css'

function Footer(data) {
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
        <input type="email" placeholder="Deine E-Mail Adresse" className="footer-massage-email"></input>
        <textarea type="textarea" placeholder="Deine Nachricht" className="footer-message-text"></textarea>
        <button className="footer-message-button" onClick={e => {data.data.sendMail('email', 'text', null)}}>Send <i className="fas fa-angle-double-right"></i></button>
      </section>
      <section className="footer-map">
        <iframe 
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.843348791864!2d9.738107515294514!3d47.41499660918793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b6b4cec95d0cb%3A0xef51b367d9f6bfbe!2sBahnhofstra%C3%9Fe%2012%2C%206850%20Dornbirn!5e0!3m2!1sde!2sat!4v1637874754549!5m2!1sde!2sat" 
          width="100%" height="300px" 
          style={{ border: "0" }} 
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
          <Link to='/' className='footer-link'>
            Imprint
          </Link>
          <Link to='/' className='footer-link'>
            Privacy
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Footer;

