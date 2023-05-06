import React from 'react';
import Products from '../products/Products';

const Oilproducts = () => {
  const backgroundImageSrc = 'http://itcity-inner.yes45.in/assets/images/bg/project-bg1.jpg';
  const imageSources = [
    'http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/oilproducts/Corn%20Oil/BAHJAH%20CORN%20OIL%2017L.jpg',
    'http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/oilproducts/Cooking%20Oil/AL%20BARAKAT%201P5L.jpg',
    'http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/oilproducts/Frying%20Oil/SUNPER%20FRY%2017L.jpg',
  ];

  return (
    <div>
      <Products backgroundImageSrc={backgroundImageSrc} imageSources={imageSources} />
    </div>
  );
};

export default Oilproducts;
