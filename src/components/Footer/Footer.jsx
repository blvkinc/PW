import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoi.png';
import instagram from '../../assets/icons/instagram.png';
import Behance from '../../assets/icons/behance.png';
import Linkedin from '../../assets/icons/linkedin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="footer__top">
          <div className="footer__logo">
            <Link to="/" className="footer_title"><img src={logo} alt=""  width="80" height="80" className='footer_logo' /></Link>
          </div>
          <div className="footer__social">
            <a href="https://www.instagram.com/pixvo_studio/" target="_blank" rel="noopener noreferrer" className='social'><img src={instagram} alt=""  width="40" height="40" className='social_logo' /></a>
            <a href="https://www.behance.net/pixvostudio" target="_blank" rel="noopener noreferrer" className='social'><img src={Behance} alt=""  width="50" height="50" className='social_logo' /></a>
            <a href="https://www.linkedin.com/company/pixvo-studio/" target="_blank" rel="noopener noreferrer" className='social'><img src={Linkedin} alt=""  width="40" height="40"  className='social_logo'/></a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__nav">
            <Link to="/about" className='footer_title'>About Us</Link>
            <Link to="/services" className='footer_title'>Services</Link>
            <Link to="/project" className='footer_title'>Projects</Link>
            <Link to="/contact" className='footer_title'>Contact</Link>
          </div>
          <p className="footer__copy">&copy; 2023 Pixvo.Studio</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
