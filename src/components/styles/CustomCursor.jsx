import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorRotation = () => {
      const delt = {
        x: lastCursorPos.x - position.x,
        y: lastCursorPos.y - position.y
      }
      if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
      const newRotation = (Math.atan2(delt.y, delt.x) * 180 / Math.PI) - 90;
      setRotation(newRotation);
    };

    window.addEventListener('mousemove', updateMousePosition);

    const INTERVAL_ROTATION = 100;
    let lastCursorPos = { x: -999, y: -999 };

    const rotationInterval = setInterval(() => {
      updateCursorRotation();
      lastCursorPos = position;
    }, INTERVAL_ROTATION);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearInterval(rotationInterval);
    };
  }, [position]);

  return (
    <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px`, transform: `rotate(${rotation}deg)` }}>
      <div className="cursor-f"></div>
    </div>
  );
};

export default CustomCursor;
