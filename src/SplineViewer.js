import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import './SplineViewer.css';

export default function SplineViewer() {
  const [rotation, setRotation] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBookClick = () => {
    if (isSmallScreen) {
      setRotation(rotation + 360);
    }
  };

  return (
    <div 
      className="SplineViewer" 
      onClick={handleBookClick} 
      style={{ transform: `rotateY(${rotation}deg)` }}
    >
      <Spline 
        scene="https://prod.spline.design/JP8Cn3L0g2DMWDZH/scene.splinecode" 
        style={{ background: 'transparent' }} // Apply transparent background
      />
    </div>
  );
}
