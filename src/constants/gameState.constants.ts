import { DEFAULT_WORD_LENGTH } from 'src/constants/wordLength.constants';
import { GameMode } from 'src/enums/gameMode.enum';
import { GameStatus } from 'src/enums/gameStatus.enum';
import { IGameState } from 'src/interfaces/gameState.interface';

export const DEFAULT_GAME_STATE: IGameState = {
  wordLength: DEFAULT_WORD_LENGTH,
  boardState: [],
  evaluations: [],
  rowIndex: 0,
  gameStatus: GameStatus.IN_PROGRESS,
  gameMode: GameMode.EASY,
  startTime: null,
  endTime: null,
  solutionHash: null,
};

export const GAME_STATE_LOCAL_STORAGE_KEY = 'gameState';
