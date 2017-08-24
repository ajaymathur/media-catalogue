import React from 'react';

import './display-cards.css';

export const DisplayCard = ({cardDetail}) => (
  <div className="display-card-container">
    <div className="display-card">
      <img src={cardDetail.images['Poster Art'].url} alt={cardDetail.description} />
    </div>
    <div>
      {cardDetail.title}
    </div>
  </div>
)
