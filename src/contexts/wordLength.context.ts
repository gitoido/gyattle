import { DEFAULT_WORD_LENGTH } from 'src/constants/wordLength.constants';
import React, { Dispatch, SetStateAction } from 'react';

export const WordLengthContext = React.createContext<{
  wordLength: number;
  setWordLength: Dispatch<SetStateAction<number>>;
}>({
  wordLength: DEFAULT_WORD_LENGTH,
  setWordLength: () => {},
});
