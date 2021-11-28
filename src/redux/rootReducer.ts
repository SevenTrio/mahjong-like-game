import { combineReducers } from '@reduxjs/toolkit';

import cardsGameReducer from './features/cardsGame/cardsGameSlice';

export default combineReducers({
  cardsGame: cardsGameReducer,
});
