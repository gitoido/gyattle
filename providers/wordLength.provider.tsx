import { WordLengthContext } from 'contexts/wordLength.context';
import { useWordLength } from 'hooks/useWordLength';
import React from 'react';

const WordLengthProvider: React.FC = ({ children }) => {
  const [wordLength, setWordLength] = useWordLength();

  return <WordLengthContext.Provider value={{ wordLength, setWordLength }}>{children}</WordLengthContext.Provider>;
};

export default WordLengthProvider;
