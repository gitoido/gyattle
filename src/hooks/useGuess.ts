import { useEffect, useState } from 'react';
import { State } from 'src/enums/state.enum';

export default function useGuess(guessIndex: number) {
  const [guessError, setGuessError] = useState<boolean>(false);
  const [guessTimeout, setGuessTimeout] = useState<NodeJS.Timeout>();
  const [guessByIndex, setGuessByIndex] = useState<string[]>([]);
  const [stateByLetterIndexByGuessIndex, setStateByLetterIndexByGuessIndex] = useState<Map<number, Map<number, State>>>(new Map());

  useEffect(() => {
    setGuessTimeout((timeout) => {
      if (guessError) {
        if (timeout) {
          clearTimeout(timeout);
          return undefined;
        } else {
          return setTimeout(() => {
            setGuessError(false);
          }, 600);
        }
      }
    });
  }, [guessError]);

  useEffect(() => {
    
  }, [guessIndex]);

  return {
    guessError,
    setGuessError,
    guessByIndex,
    setGuessByIndex,
    stateByLetterIndexByGuessIndex,
    setStateByLetterIndexByGuessIndex,
  };
}
