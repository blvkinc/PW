import React from 'react';
import '../Home.css';
import VideoFile from '../../../assets/logo.mp4';

function Video() {
  return (
    <div>
      <video autoPlay muted loop  width="1080" height="1080" id='gif'>
  <source src={VideoFile} type="video/mp4" />
</video>

    </div>
  );
}

export default Video;