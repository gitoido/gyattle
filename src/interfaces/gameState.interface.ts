import { GameMode } from 'src/enums/gameMode.enum';
import { GameStatus } from 'src/enums/gameStatus.enum';
import { State } from 'src/enums/state.enum';

export interface IGameState {
  wordLength: number;
  boardState: string[][];
  evaluations: State[][];
  rowIndex: number;
  gameStatus: GameStatus;
  gameMode: GameMode;
  startTime: string | null;
  endTime: string | null;
  solutionHash: string | null;
}
