import { useEffect, useState } from 'react';
import { GameMode } from 'src/enums/gameMode.enum';
import { State } from 'src/enums/state.enum';
import { IGameState } from 'src/interfaces/gameState.interface';

export function useCompliant(gameState: IGameState, input: string[]): boolean {
  const [compliant, setCompliant] = useState<boolean>(false);

  useEffect(() => {
    let compliant = true;

    switch (gameState.gameMode) {
      case GameMode.EASY:
        // no restrictions
        setCompliant(compliant);
        break;
      case GameMode.HARD:
        // go through the previous guesses
        for (let index = 0; index < gameState.rowIndex; index++) {
          const guess: string[] = gameState.boardState[index];
          const guessMap: State[] = gameState.evaluations[index];

          // for each guess, go through its states
          for (let letterIndex = 0; letterIndex < input.length; letterIndex++) {
            const state: State = guessMap[letterIndex];

            switch (state) {
              case State.PRESENT:
                // if a letter is present, make sure the input includes it
                compliant &&= input.includes(guess[letterIndex]);
                break;
              case State.CORRECT:
                // if a letter is correct, make sure the input includes it at the exact position
                compliant &&= input[letterIndex] === guess[letterIndex];
                break;
            }
          }
        }

        setCompliant(compliant);
        break;
      case GameMode.SUPER_HARD:
        const usedLetters: Set<string> = new Set();

        // go through the previous guesses
        for (let index = 0; index < gameState.rowIndex; index++) {
          const guess: string[] = gameState.boardState[index];
          const guessMap: State[] = gameState.evaluations[index];

          // for each guess, go through its states
          for (let letterIndex = 0; letterIndex < input.length; letterIndex++) {
            const state: State = guessMap[letterIndex];

            switch (state) {
              case State.PRESENT:
                // if a letter is present, make sure the input includes it
                compliant &&= input.includes(guess[letterIndex]);
                break;
              case State.CORRECT:
                // if a letter is correct, make sure the input includes it at the exact position
                compliant &&= input[letterIndex] === guess[letterIndex];
                break;
              case State.ABSENT:
                // if a letter is absent, mark it as used
                usedLetters.add(guess[letterIndex]);
                break;
            }

            // make sure used letters are forbidden
            compliant &&= !usedLetters.has(input[letterIndex]);
          }
        }

        setCompliant(compliant);
        break;
    }
  }, [gameState, input]);

  return compliant;
}
