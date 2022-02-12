import { DEFAULT_WORD_LENGTH } from 'constants/wordLength.constants';
import { Dispatch, SetStateAction, useState } from 'react';

export function useWordLength(): [number, Dispatch<SetStateAction<number>>] {
  const [wordLength, setWordLength] = useState<number>(DEFAULT_WORD_LENGTH);

  return [wordLength, setWordLength];
}
