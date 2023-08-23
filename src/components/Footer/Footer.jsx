import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_main">
        <div className="footer__nav">
          <div className="footer__section">
            <ul className="footer__section">
              <li><Link to="/about" className='footer_title'>About Us</Link></li><br />
              <li><Link to="/services" className='footer_title'>Services</Link></li><br />
              <li><Link to="/project" className='footer_title'>Projects</Link></li>
            </ul>
          </div>
          <div className="footer__section">
            <ul className="footer__section">
            <li><Link to="" className='footer_title'>Social Media</Link></li>
              <li className='footer_item'><a href="https://www.instagram.com/pixvo_studio/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className='footer_item'><a href="https://www.linkedin.com/company/pixvo-studio/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <ul className="footer__section">
              <li><Link to="/contact" className='footer_title'>Contact</Link></li>
              <li className='footer_item'>Email: contact@pixvo.studio</li>
              <li className='footer_item'> </li>
            </ul>
          </div>
        </div>
        <hr className="footer__bar" />
        <p className="footer__copy">&copy; 2023 Pixvo.Studio</p>
      </div>
    </footer>
  );
}

export default Footer;