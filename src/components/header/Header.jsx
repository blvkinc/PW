import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const indicatorRef = useRef(null);
  const navItemRefs = useRef([]);

  const navItems = [
    { text: 'Home', to: '/', color: 'orange' },
    { text: 'About us', to: '/about', color: 'orange' },
    { text: 'Services', to: '/services', color: 'green' },
    { text: 'Projects', to: '/project', color: 'blue' },
    { text: 'Contact', to: '/contact', color: 'red' },
  ];

  useEffect(() => {
    const indicator = indicatorRef.current;

    if (indicator && activeIndex !== null) {
      const activeNavItem = navItemRefs.current[activeIndex];
      indicator.style.width = `${activeNavItem.offsetWidth}px`;
      indicator.style.left = `${activeNavItem.offsetLeft}px`;
      indicator.style.backgroundColor = navItems[activeIndex].color;
    }
  }, [activeIndex]);

  useEffect(() => {
    const headerContainer = document.querySelector('.header_container');

    if (headerContainer) {
      setTimeout(() => {
        headerContainer.classList.add('loaded');
      }, 500);
    }
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleLogoClick = () => {
    setActiveIndex(null);
  };

  return (
    <div className="header_container ">
       <header className="header rainbow">
        <nav className="nav_container ">
       {/* Logo link */}
{/* <Link to="/" className="nav__logo" onClick={handleLogoClick}>
  <img src={logo} alt="" id="logo" aria-label="home" />
</Link> */}
          <div className="nav__menu ">
            <ul className="nav__list ">
              {navItems.map((item, index) => (
                <li className="nav__item" key={index} ref={(el) => (navItemRefs.current[index] = el)}>
                  <Link
                    to={item.to}
                    className={`nav__link ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleItemClick(index)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="nav__indicator" ref={indicatorRef}></div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
