import React, { useState, useEffect } from 'react';
import './Slideshow.css'

const images = [
  'http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/slider1.jpg',
  'http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/slider2.jpg',
  
];

const Slideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
    </div>
  );
};

export default Slideshow;
