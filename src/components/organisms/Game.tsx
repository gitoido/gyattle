import React, { useCallback, useContext, useEffect, useState } from 'react';
import Grid from 'src/components/molecules/Grid';
import Keyboard from 'src/components/molecules/Keyboard';
import { WordsByLengthContext } from 'src/contexts/wordsByLength.context';
import { GameMode } from 'src/enums/gameMode.enum';
import { GameStatus } from 'src/enums/gameStatus.enum';
import { State } from 'src/enums/state.enum';
import { useCompliant } from 'src/hooks/useCompliant';
import { useEvaluation } from 'src/hooks/useEvaluation';
import useGuess from 'src/hooks/useGuess';



const Game: React.FC = () => {








  

  const words = useContext(WordsByLengthContext);
  
  const [keyboardInputByGuessIndex, setKeyboardInputByGuessIndex] = useState<Map<number, string[]>>(new Map());
  const [] = useState<Map<number, State>>();
  const [win, setWin] = useState<boolean>(false);
  const [guessIndex, setGuessIndex] = useState<number>(0);
  const { guessError, setGuessError, stateByLetterIndexByGuessIndex, setStateByLetterIndexByGuessIndex } = useGuess(guessIndex);

  const winningWord = 'alone';

  // const onEnterHandler = useCallback(() => {
  //   const word: string = keyboardInput.join('');

  //   if (words.includes(word)) {
  //     const stateByLetterIndex: Map<number, State> = new Map();

  //     for (let i = 0; i < word.length; i++) {
  //       if (winningWord.includes(word[i])) {
  //         if (word[i] === winningWord[i]) {
  //           stateByLetterIndex.set(i, State.CORRECT);
  //         } else {
  //           stateByLetterIndex.set(i, State.PRESENT);
  //         }
  //       } else {
  //         stateByLetterIndex.set(i, State.ABSENT);
  //       }
  //     }

  //     setStateByLetterIndexByGuessIndex((stateByLetterIndexByGuessIndex) => {
  //       stateByLetterIndexByGuessIndex.set(guessIndex, stateByLetterIndex);

  //       return new Map(stateByLetterIndexByGuessIndex);
  //     });

  //     if (word === winningWord) {
  //       setTimeout(() => {
  //         setWin(true);
  //       }, word.length * 500);
  //     } else {
  //       // preserve the keyboard input for the current guess index
  //       keyboardInputByGuessIndex.set(guessIndex, keyboardInput);

  //       // increase the guess index
  //       setGuessIndex((guessIndex) => guessIndex + 1);
  //     }
  //   } else {
  //     setGuessError(true);
  //   }
  // }, [keyboardInput, words, guessIndex, keyboardInputByGuessIndex, setGuessError, setStateByLetterIndexByGuessIndex]);

  // const [input, setInput] = useState<string>('');
  const [input, setInput] = useState<string[]>([]);
  const [boardState, setBoardState] = useState<string[][]>([]);
  const [evaluations, setEvaluations] = useState<State[][]>([]);
  const [rowIndex, setRowIndex] = useState(0);
  const compliant = useCompliant(
    {
      wordLength: 5,
      boardState,
      evaluations,
      rowIndex,
      gameStatus: GameStatus.IN_PROGRESS,
      gameMode: GameMode.HARD,
      startTime: null,
      endTime: null,
      solutionHash: null,
    },
    input
  );

  const evaluation = useEvaluation('swill', input);

  const addGuess = useCallback(() => {
    if (!compliant) {
      return;
    }
    
    setBoardState((boardState) => {
      return [...boardState, input];
    });

    setEvaluations((evaluations) => {
      return [...evaluations, evaluation];
    });

    setRowIndex((rowIndex) => rowIndex + 1);
  }, [compliant, input, evaluation]);


  return (
    <>
      <Grid
        input={input}
        win={win}
        error={guessError}
        guessIndex={guessIndex}
        lettersByGuessIndex={keyboardInputByGuessIndex}
        stateByLetterIndex={stateByLetterIndexByGuessIndex.get(guessIndex)}
      />

      <div className="pb-12"></div>

      <Keyboard onInput={setInput} onEnter={() => {}} />
    </>
  );
};

export default Game;
