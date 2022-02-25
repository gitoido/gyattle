import React, { useState } from 'react';
import { DEFAULT_WORD_LENGTH } from 'src/constants/wordLength.constants';
import { WordLengthContext } from 'src/contexts/wordLength.context';

const WordLengthProvider: React.FC = ({ children }) => {
  const [wordLength, setWordLength] = useState<number>(DEFAULT_WORD_LENGTH);

  return (
    <WordLengthContext.Provider
      value={{
        wordLength,
        setWordLength,
      }}
    >
      {children}
    </WordLengthContext.Provider>
  );
};

export default WordLengthProvider;
