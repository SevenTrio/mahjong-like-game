import React from 'react';
import './CardsContainer.scss';

const CardsContainer: React.FC = ({ children }) => (
  <div className="cards-container">{children}</div>
);

export default CardsContainer;
