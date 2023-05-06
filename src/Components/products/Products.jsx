import React, { useState, useEffect } from 'react';

const Products = ({ backgroundImageSrc, imageSources }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage => (currentImage + 1) % imageSources.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageSources]);

  return (
    <div style={{
      backgroundImage: `url(${backgroundImageSrc})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 style={{ color: 'white' }}>Slideshow</h1>
      <img src={imageSources[currentImage]} alt="Category" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
    </div>
  );
};

export default Products;
