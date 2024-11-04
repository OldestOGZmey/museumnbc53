import React, { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'
    });
  }, []);

  return null; 
};

export default ScrollToTop;
