import React, { Dispatch, SetStateAction } from 'react';
import { DEFAULT_GAME_STATE } from 'src/constants/gameState.constants';
import { IGameState } from 'src/interfaces/gameState.interface';

export const GameStateContext = React.createContext<{
  gameState: IGameState;
  setGameState: Dispatch<SetStateAction<IGameState>>;
}>({
  gameState: DEFAULT_GAME_STATE,
  setGameState: () => {},
});
