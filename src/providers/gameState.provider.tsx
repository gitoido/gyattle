import React, { useEffect, useState } from 'react';
import { DEFAULT_GAME_STATE, GAME_STATE_LOCAL_STORAGE_KEY } from 'src/constants/gameState.constants';
import { GameStateContext } from 'src/contexts/gameState.context';
import { IGameState } from 'src/interfaces/gameState.interface';

const GameStateProvider: React.FC = ({ children }) => {
  const [gameState, setGameState] = useState<IGameState>(DEFAULT_GAME_STATE);
  const [gameStateSet, setGameStateSet] = useState(false);

  useEffect(() => {
    const localStorageGameState = localStorage.getItem(GAME_STATE_LOCAL_STORAGE_KEY);

    // if no game state exists in the local storage
    if (!localStorageGameState) {
      // preserve the default game state
      localStorage.setItem(GAME_STATE_LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_GAME_STATE));

      // and set it as the current state
      setGameState(DEFAULT_GAME_STATE);
    } else {
      // otherwise use the stored state
      setGameState(JSON.parse(localStorageGameState));
    }

    // mark that we've set the state
    setGameStateSet(true);
  }, []);

  useEffect(() => {
    // only update the game state after it has been set from the local storage
    if (gameStateSet) {
      localStorage.setItem(GAME_STATE_LOCAL_STORAGE_KEY, JSON.stringify(gameState));
    }
  }, [gameState, gameStateSet]);

  return (
    <GameStateContext.Provider
      value={{
        gameState,
        setGameState,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export default GameStateProvider;
