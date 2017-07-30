import React from 'react';

import './display-cards.css';

export const DisplayCard = ({cardDetail, loading}) => (
  <div className="display-card-container">
    {
      loading &&
        <span>Loading...</span>
    }
    <div className="display-card">
      <img src={cardDetail.images['Poster Art'].url} alt={cardDetail.description} />
    </div>
    <div>
      {cardDetail.title}
    </div>
  </div>
)