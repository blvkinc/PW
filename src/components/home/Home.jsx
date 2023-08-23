import React, { useEffect } from 'react';
import Video from './content/video';
import Data from './content/data';
import Services from './content/services';
import Reviews from './content/reviews';

import './Home.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    gsap.utils.toArray('.revealUp').forEach((elem) => {
      gsap.fromTo(
        elem,
        { y: 100, autoAlpha: 0 },
        {
          duration: 1.25,
          y: 0,
          autoAlpha: 1,
          ease: 'back',
          scrollTrigger: {
            trigger: elem,
            start: 'top 80%',
            end: 'bottom 20%',
            markers: false, // Set this to true for debug markers
          },
        }
      );
    });
  }, []);

  return (
    <section className="home section" id="home">
  <div className="home__container container">
    <div className="home__content">
      <div className="data__area revealUp">
       <Data />
      </div>
      <div className="video__area revealUp">
       <Video /> 
      </div>
      <div className="service__area revealUp">
        <Services />
      </div>
      <div className="reviews__area revealUp">
        <Reviews />
      </div>
    </div>
  </div>
</section>
  );
}

export default Home;
