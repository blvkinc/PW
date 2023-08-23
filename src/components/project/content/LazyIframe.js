import React from 'react';
import cl from '../../../assets/icons/close.png'

const LazyIframe = ({ src, onClose }) => (
  <div className={`iframe-popup active`}>
    <button className="close-button" onClick={onClose}>
      <img src={cl} className='close-button' alt='close' />
    </button>
    <iframe
      title="Iframe"
      src={src}
      width="1920"
      height="1080"
      frameBorder="0"
      allow="autoplay; fullscreen; xr-spatial-tracking"
      allowFullScreen={true}
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      style={{ border: 'none', maxWidth: '100%', maxHeight: '100%', borderRadius: '20px' }}
    ></iframe>
  </div>
);

export default LazyIframe;
