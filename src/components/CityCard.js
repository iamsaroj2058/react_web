import React from 'react';

const CityCard = ({ imageSrc, title, subtitle, description }) => {
  return (
    <div className="city-card">
      <img src={imageSrc} alt={title} />
      <div className="city-card-content">
        <span className="card-title">{title}</span><br />
        <span className="card-subtitle">{subtitle}</span><br />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CityCard;
