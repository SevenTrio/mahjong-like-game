import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

const selectCardGame = (state: RootState) => state.cardsGame;

export const selectGameCards = createSelector(
  [selectCardGame],
  (cardsGame) => cardsGame.cards,
);

export const selectActiveCards = createSelector(
  [selectCardGame],
  (cardsGame) => cardsGame.activeCards,
);

export const selectGameInProgress = createSelector(
  [selectCardGame],
  (cardsGame) => cardsGame.gameInProgress,
);
