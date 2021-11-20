import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png';
import './Footer.css'

function footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Kontaktiere uns:</p>
        <p className='footer-subscription-text'>Modellbahn Kaufmann</p>
        <p className='footer-subscription-text'>Bahnhofstraße 12</p>
        <p className='footer-subscription-text'>6850 Dornbirn</p>
        <p className='footer-subscription-text'>+43 5572/54149</p>
        <p className='footer-subscription-text'>modellbahn@avidonet.at</p>
      </section>
      <section className='footer-links'>
        <div className='footer-logo'>
          <Link to='/' className='social-logo'>
            <img src={Logo} className='app-logo-footer' alt='logo'/>
          </Link>
        </div>
        <div className='social-icons'>
          <Link className='social-icon-link instagram'
            to={'//www.instagram.com/schwer_christian/'}
            target='_blank'
            aria-label='Instagram'
            >
              <i className='fab fa-instagram'></i>
          </Link>
          <Link className='social-icon-link github'
            to={'//github.com/ChristianSchwer'}
            target='_blank'
            aria-label='Github'
            >
              <i className='fab fa-github'></i>
          </Link>
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

export default footer

