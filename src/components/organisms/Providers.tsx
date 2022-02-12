import WordLengthProvider from 'providers/wordLength.provider';
import React from 'react';

const Providers: React.FC = ({ children }) => {
  return <WordLengthProvider>{children}</WordLengthProvider>;
};

export default Providers;
