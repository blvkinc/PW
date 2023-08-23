import React, { useEffect, useState } from 'react';
import '../Service.css'

function Data() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {

    const animationTimeout = setTimeout(() => {
      setAnimate(true);
    }, 0);

    return () => clearTimeout(animationTimeout);
  }, []);
  return (
    <section className="servicesection" id="service">
      <div className="service__container container">
        <div className="service__content">
        <h1 className={animate ? 'lineUp' : ''} id='Service_title'>Services</h1>
        <div className="service__area">
            <p className='project_desc'>
            Our potential pricing packages provide a variety of comprehensive and tailored solutions to meet the specific needs and budget of your brand. We can help you establish a strong brand identity, showcase your portfolio, or improve your digital presence through captivating designs.</p>
          </div>
          <h3 id='meet'>Have a glance</h3>
        </div>
        </div>
    </section>
  )
}

export default Data