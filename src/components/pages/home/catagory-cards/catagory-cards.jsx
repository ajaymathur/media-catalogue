import React from 'react';

export const CatagoryCard = ({homeCard}) => (
  <div className="catagory-card-container">
    <div className="catagory-card">
      <h2>{homeCard.placeholder}</h2>
    </div>
    <div>
      {homeCard.name}
    </div>
  </div>
)
