import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'; // Import your CSS file
import quotes from '../../../assets/icons/quote.png';

const Data = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const h1Elements = document.querySelectorAll("h2");

    const startAnimation = (element) => {
      let interval = null;
      let isHovered = false;

      const onMouseOver = () => {
        isHovered = true;
        clearInterval(interval);

        interval = setInterval(() => {
          if (!isHovered) {
            clearInterval(interval);
            element.innerText = element.dataset.value;
            return;
          }

          element.innerText = element.dataset.value
            .split("")
            .map((letter, index) => {
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        }, 30);
      };

      const onMouseOut = () => {
        isHovered = false;
        clearInterval(interval);
        element.innerText = element.dataset.value;
      };

      element.addEventListener("mouseover", onMouseOver);
      element.addEventListener("mouseout", onMouseOut);

      return () => {
        clearInterval(interval);
        element.removeEventListener("mouseover", onMouseOver);
        element.removeEventListener("mouseout", onMouseOut);
        element.innerText = element.dataset.value; // Reset text on unmount
      };
    };

    h1Elements.forEach((element) => {
      startAnimation(element);
    });
  }, []);

  return (
    <div className="container_title">
      <div>
        <h2 data-value="PIXVO" className='title_data'>PIXVO </h2>
      </div>
      <div>
        <h2 data-value="STUDIO" className='title_data'> STUDIO</h2>
      </div>
      <div className="quote">
        <img src={quotes} alt="" id='quotes' height='30px' width='30px' />
        <p className='para__title'>Elevating Designs to New Heights</p>
        <p className='para__content'>Immerse Yourself in our Dynamic Portfolio Showcasing our Artistry.</p>
      </div>
      <div className="buttons">
        <Link to="/about">
          <button>About Us</button>
        </Link>
        <Link to="/project">
          <button>Our Work</button>
        </Link>
      </div>
    </div>
  );
};

export default Data;