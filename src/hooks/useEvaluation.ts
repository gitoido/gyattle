import { State } from 'src/enums/state.enum';

export function useEvaluation(winningWord: string, input: string[]): State[] {
  const states: State[] = [];

  for (let letterIndex = 0; letterIndex < input.length; letterIndex++) {
    if (input[letterIndex] === winningWord[letterIndex]) {
      states.push(State.CORRECT);
    } else if (winningWord.includes(input[letterIndex])) {
      states.push(State.PRESENT);
    } else {
      states.push(State.ABSENT);
    }
  }

  return states;
}
