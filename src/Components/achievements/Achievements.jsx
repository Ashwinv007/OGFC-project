import React from "react";
import './Achievements.css'

const Achievements = () => {
  return (
    <div
      className="achievements-wrapper"
      
    >
      
       
         
            
              {/* <div className="achievement-bar">
                <h2 id='invisible'>I</h2>
              </div> */}
             
              <h2  id='achievements-title' >Our Achievements</h2>
            
        
          
            <div className="achievement-images">
              <img src="http://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/ISO%209001.jpg" alt="ISO 9001" />
              <img src="https://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/ISO%2014001.jpg" alt="ISO 14001" />
              <img src="https://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/ISO%2022000.jpg" alt="ISO 22000" />
              <img src="https://itcity-inner.yes45.in/assets/images/gulfcompanyproduct/omani-certified.png" alt="Omani Certified" />
            </div>
          
       
     
    </div>
  );
};

export default Achievements;
