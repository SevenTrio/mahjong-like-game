import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import CardsContainer from 'components/CardsContainer/CardsContainer';
import Card from 'components/Card/Card';
import './App.scss';

const App: React.FC = () => {
  const cards = new Array(30).fill(1);

  return (
    <MainLayout>
      <CardsContainer>
        {cards.map((card, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Card key={index} isVisible>
            {card}
          </Card>
        ))}
      </CardsContainer>
    </MainLayout>
  );
};

export default App;
