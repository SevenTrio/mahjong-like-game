import React, { useEffect } from 'react';
import { ICard } from 'types/card';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/store';
import { getGameCards } from 'helpers/getGameCards';
import {
  selectGameCards,
  selectActiveCards,
  selectGameInProgress,
} from 'redux/features/cardsGame/cardsGameSelectors';
import {
  setupGame,
  startGame,
  selectCard,
} from 'redux/features/cardsGame/cardsGameSlice';
import MainLayout from 'layouts/MainLayout/MainLayout';
import CardsContainer from 'components/CardsContainer/CardsContainer';
import Card from 'components/Card/Card';
import GameActions from 'components/GameActions/GameActions';
import Button from 'components/Button/Button';
import './MainPage.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const gameCards = useSelector(selectGameCards);
  const activeCards = useSelector(selectActiveCards);
  const gameInProgress = useSelector(selectGameInProgress);

  const isActive = (cardId: ICard['id']): boolean =>
    activeCards.some((card) => card.id === cardId);

  const handleSetupNewGame = () => {
    const generatedCards = getGameCards();

    dispatch(setupGame(generatedCards));
  };

  useEffect(() => {
    handleSetupNewGame();
  }, []);

  const handleStartGame = () => {
    dispatch(startGame());
  };

  const handleSelectCard = (selectedCard: ICard) => {
    const isSelectable = !selectedCard.isGuessed && !isActive(selectedCard.id);
    if (!isSelectable || !gameInProgress) return;

    dispatch(selectCard(selectedCard.id));
  };

  return (
    <MainLayout>
      <CardsContainer>
        {gameCards.map((card) => (
          <Card
            key={card.id}
            tabIndex={0}
            isVisible={!gameInProgress}
            isActive={isActive(card.id)}
            isGuessed={card.isGuessed}
            onClick={() => handleSelectCard(card)}
          >
            {card.number}
          </Card>
        ))}
      </CardsContainer>
      <GameActions className="main-page__actions">
        <Button
          type="button"
          className="main-page__button"
          variant="outlined"
          onClick={handleSetupNewGame}
        >
          Refresh
        </Button>
        <Button
          type="button"
          className="main-page__button"
          variant="contained"
          onClick={handleStartGame}
          disabled={gameInProgress}
        >
          Start Game
        </Button>
      </GameActions>
    </MainLayout>
  );
};

export default App;
