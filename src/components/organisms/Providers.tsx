import React from 'react';
import ErrorHandlingProvider from 'src/providers/errorHandling.provider';
import GameStateProvider from 'src/providers/gameState.provider';
import WordLengthProvider from 'src/providers/wordLength.provider';
import WordsByLengthProvider from 'src/providers/wordsByLength.provider';

const Providers: React.FC = ({ children }) => {
  return (
    <ErrorHandlingProvider>
      <WordLengthProvider>
        <WordsByLengthProvider>
          <GameStateProvider>{children}</GameStateProvider>
        </WordsByLengthProvider>
      </WordLengthProvider>
    </ErrorHandlingProvider>
  );
};

export default Providers;
