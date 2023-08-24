import React, { useState, useEffect, lazy, Suspense } from 'react';
import '../Project.css';
import zero from '../../../assets/project_images/zero.png';
import can from '../../../assets/project_images/c.gltf';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const LazyIframe = lazy(() => import('./LazyIframe'));

function Gallery() {
  const [isSoraIframeVisible, setIsSoraIframeVisible] = useState(false);
  const [isZeroIframeVisible, setIsZeroIframeVisible] = useState(false);
  const [isBlurBackground, setIsBlurBackground] = useState(false);

  const handleSoraDropdownClick = () => {
    setIsSoraIframeVisible(!isSoraIframeVisible);
  };

  const handleZeroDropdownClick = () => {
    setIsZeroIframeVisible(!isZeroIframeVisible);
  };

  const handleCloseClick = () => {
    setIsSoraIframeVisible(false);
    setIsZeroIframeVisible(false);
    setIsBlurBackground(false);
  };

  const [gltf, setGltf] = useState(null);

  useEffect(() => {
    const loader = new GLTFLoader();

    loader.load(can, (gltf) => {
      setGltf(gltf);
    });
  }, []);
{/* Container for centering 
  const lightPositions = useControls({
    light1: { value: [10, -1, 30], step: 1 },
    light2: { value: [-3, 0, 1], step: 1 },
    light3: { value: [1, 0, 1], step: 1 },
    light4: { value: [0, 3, 2], step: 1 },
    light5: { value: [0, 3, -5], step: 1 },
  });*/}

  return (
    <div className={`page-container ${isBlurBackground ? 'blur-background' : ''}`}>
      <div className="gallery-container">
     
        <div>
        <h1 className='project_title'>
            Sora no misu
            <div className="dropdown-header" onClick={handleSoraDropdownClick}>
              | Brand Guidelines |
            </div>
          </h1>
            {isSoraIframeVisible && (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyIframe
                  src="https://www.behance.net/gallery/176682977/Sora-no-misu-Brand-Identity?iframe=1&amp;ilo0=1"
                  onClose={handleCloseClick}
                />
              </Suspense>
            )}
          </div>
          <p className='project_desc'>
            " 空の水 " (sora no mizu) is a Japanese phrase that translates to "water of the sky" or "sky water" in
            English. This phrase is often used metaphorically to describe something that is impossible or
            non-existent, much like water in the sky, which doesn't naturally occur as a liquid. It indicates a
            situation where there is a lack or absence of something essential or expected. 
            In the journey of life,<br /> amidst the most unforeseen circumstances, miracles can happen. Just like a
            sudden rain shower that brings water to the parched earth, sometimes the seemingly impossible can
            become possible. The phrase '空の水' serves as a reminder that hope and perseverance can lead to
            unexpected breakthroughs, turning what once seemed impossible into a reality. It is a testament to the
            human spirit's resilience and ability to overcome challenges, ultimately finding the water of the sky –
            a symbol of abundance and fulfillment in even the most unlikely places.
          </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40rem' , }}>
              <Canvas style={{ width: '1000px', height: '600px', background: '#ededed' ,maxWidth: '100%',maxHeight: '100%',borderRadius: '20px' , marginBottom:'30px' }}>
              <ambientLight intensity={10} />
              <directionalLight position={ [10, -1, 30] } intensity={100} />
              <directionalLight position={[-3, 0, 1]} intensity={200} />
              <directionalLight position={[1, 0, 1]} intensity={100} />
              <directionalLight position={[0, 3, 2]} intensity={400} />
              <directionalLight position={[0, 3, -5]} intensity={400} />
                <OrbitControls minDistance={3} maxDistance={5} />
                {gltf && <primitive object={gltf.scene} />}
                </Canvas>
            </div> 
        </div>
      
      <hr></hr>

      <div>
          <h1 className='project_title'>
            Studio ZRO°
            <div className="dropdown-header" onClick={handleZeroDropdownClick}>
              | Brand Guidelines |
            </div>
          </h1>
            {isZeroIframeVisible && (
              <Suspense fallback={<div>Loading...</div>}>
                <LazyIframe
                  src="https://www.behance.net/gallery/177842269/Studio-ZRO?iframe=1&amp;ilo0=1"
                  onClose={handleCloseClick}
                />
              </Suspense>
            )}
          </div>
          <p className='project_desc'>
            ZRO<sup>o</sup> Studio is an avant-garde architectural firm renowned for its innovative interpretations of brutalist 
            architecture rooted in the Swiss alpine context.With a team of visionary architects, sculptors, and material artisans, 
            the studio specializes in crafting austere yet captivating architectural statements that harmonize with the rugged Swiss 
            landscape while evoking a sense of timeless grandeur.
          </p>
          <div className="image-container">
            <div className="big-image">
              <img src={zero} alt="zero" className='big-image' onClick={handleZeroDropdownClick} />
            </div>
         <hr />
          </div>
         
       
      </div>
    
  );
}

export default Gallery;