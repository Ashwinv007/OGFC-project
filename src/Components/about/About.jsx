import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h3>Welcome to</h3>
        <h2 id="grntext">Omani Gulf Food Company (LLC)</h2>
        <div className="text-c">
          <p>
            <span id="bldtext">Omani Gulf Food Company (LLC)</span> is a leading company in Salalah, Sultanate of Oman with
            an entrepreneurial spirit and promoted by three prominent business leaders in Oman - Dhofar Cattle Feed Co.,
            Dhofar Insurance Co. and Dhofar International Development and Investments Holding Co.
          </p>
          {showMore ? (
            <div>
              <p >

                Our team is passionate about providing highest quality edible oils to consumers for a better life by adding
                convenience to their daily routine and healthy living. Our edible oil brands are widely available in the
                market under the popular names of Al Safa, Zain, Noof, Sunlife, Sundrops, Bahjah, Al Barakat, Sahi,
                Taibah. We are also into private labelling for many retail majors, hypermarkets and supermarkets. We use
                multi model distribution channels across Middle East & African regions. The company continues to expand
                its business vertical to meet emerging customer needs by venturing into distribution of other Fast Moving
                Consumer Goods.
              </p>
              <div className="btnc">
              <button onClick={toggleShowMore} className='read-more'>Read less</button>
              </div>
            </div>
          ) : (
            <div className="btnc">
              <button onClick={toggleShowMore} className='read-more'>Read more</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
