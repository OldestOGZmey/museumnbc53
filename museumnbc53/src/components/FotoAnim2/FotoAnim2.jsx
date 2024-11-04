import React, { useEffect, useState, useRef } from 'react';
import foto1 from './img/foto1.png';
import foto2 from './img/foto2.png';
import foto3 from './img/foto3.png';
import foto4 from './img/foto4.png';
import './FotoAnim2.css'
const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto1,
  foto2,
  foto3,
  foto4,
]; 
const FotoAnim2 = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      const newPosX = window.scrollY % scrollWidth;
      setScrollX(newPosX);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-container" ref={containerRef}>
      <div className="scroll-content" style={{ transform: `translateX(-${scrollX}px)` }}>
        {images.concat(images).map((src, index) => (
          <img  style={{boxShadow: '0px 4px 4px 7px #45b4d67c',borderRadius:40, height:300, width:500,marginRight: 20 }} key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default FotoAnim2;