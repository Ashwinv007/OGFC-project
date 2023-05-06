import React from 'react';
import Card from './Card';
import './Cards.css';

const Cards = () => {
  return (
    <div >
      <div className="cards-container">
      <Card 
        imageUrl="http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/services/quality.png" alt="Quality Certification Icon"
        title="Quality Certification"
        description="ISO 9001 Quality Management Systems 
        ISO 14001 Environment Management Systems
        ISO 22000 Food Safety Management Systems (HACCP)"
      />
      <Card 
        imageUrl="http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/services/company.png" alt="About OMAN/DHOFAR"
        title="About OMAN/DHOFAR"
        description="Welcome to the land of frankincense where beauty of nature surrounds the place with various green mountains with pleasant weather throughout the year."
      />
      </div>
      <div className="cards-container" id='mgspace'>
      <Card 
        imageUrl="http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/services/importexport.png" alt="Import & Export"
        title="Import & Export"
        description="Raw materials like Crude & Refined Palm Oil Products, Sunflower Oil, Corn Oil, Soya Oil, Canola Oil and other vegetable oil products."
      />
      <Card 
        imageUrl="http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/services/newsandevents.png" alt="News & Events"
        title="News & Events"
        description="Raw materials like Crude & Refined Palm Oil Products, Sunflower Oil, Corn Oil, Soya Oil, Canola Oil and other vegetable oil products."
      />
      </div>
    </div>
  );
};

export default Cards;
