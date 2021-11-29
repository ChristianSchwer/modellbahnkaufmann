import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import './Navbar.css';

function Navbar(data) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const countItems = (items) => {
        let count = 0;
        items.forEach(item => {
            count = count + item.value;
        });
        return count;
    }

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src={Logo} className='app-logo' alt='logo'/>
                    </Link>
                    <div className={click ? 'nav-menu active' : 'nav-menu'}>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Startseite
                        </Link>
                        <Link to='/inventar' className='nav-links' onClick={closeMobileMenu}>
                            Inventar
                        </Link>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                        <a className='nav-links social'
                            href={'//www.instagram.com/modellbahnkaufmann/'}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label='Instagram'
                            onClick={closeMobileMenu}
                            >
                                <i className='fab fa-instagram'></i>
                        </a>
                        <a className='nav-links social'
                            href={'//github.com/ChristianSchwer'}
                            target='_blank'
                            rel="noreferrer noopener"
                            aria-label='Facebook'
                            onClick={closeMobileMenu}
                            >
                                <i className='fab fa-facebook'></i>
                        </a>
                        <div className='nav-links social'
                            onClick={closeMobileMenu}
                            >
                                <i className="fas fa-shopping-cart">{countItems(data.data)}</i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar