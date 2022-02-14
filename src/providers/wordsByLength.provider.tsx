import { getDataset } from 'lib/getDataset';
import React, { useContext, useEffect, useState } from 'react';
import { ErrorHandlingContext } from 'src/contexts/errorHandling.context';
import { WordLengthContext } from 'src/contexts/wordLength.context';
import { WordsByLengthContext } from 'src/contexts/wordsByLength.context';

const WordsByLengthProvider: React.FC = ({ children }) => {
  const { wordLength } = useContext(WordLengthContext);
  const { setError } = useContext(ErrorHandlingContext);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    getDataset(wordLength)
      .then((words: string[]) => {
        setWords(words);
      })
      .catch((err) => {
        setError(err);
      });
  }, [wordLength, setError]);

  return <WordsByLengthContext.Provider value={words}>{children}</WordsByLengthContext.Provider>;
};

export default WordsByLengthProvider;
