import React from 'react';
import ErrorHandlingProvider from 'src/providers/errorHandlingProvider';
import WordLengthProvider from 'src/providers/wordLength.provider';
import WordsByLengthProvider from 'src/providers/wordsByLength.provider';

const Providers: React.FC = ({ children }) => {
  return (
    <ErrorHandlingProvider>
      <WordLengthProvider>
        <WordsByLengthProvider>{children}</WordsByLengthProvider>
      </WordLengthProvider>
    </ErrorHandlingProvider>
  );
};

export default Providers;
