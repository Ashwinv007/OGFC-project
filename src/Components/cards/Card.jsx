import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-body">
        <h2 id='coltext'>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
