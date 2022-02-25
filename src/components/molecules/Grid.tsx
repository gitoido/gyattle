import React from 'react';
import GridRow from 'src/components/molecules/GridRow';
import { State } from 'src/enums/state.enum';

interface Props {
  input: string[];
  guessIndex: number;
  lettersByGuessIndex: Map<number, string[]>;
  stateByLetterIndex?: Map<number, State>;
  error?: boolean;
  win?: boolean;
}

const Grid: React.FC<Props> = ({ input, lettersByGuessIndex, guessIndex, error, stateByLetterIndex, win }) => {
  return (
    <div className="flex flex-col gap-2">
      <GridRow
        letters={lettersByGuessIndex.get(0) || input}
        error={guessIndex === 0 && error}
        stateByLetterIndex={guessIndex === 0 ? stateByLetterIndex : undefined}
        win={win}
      />
      <GridRow
        letters={lettersByGuessIndex.get(1) || input}
        error={guessIndex === 1 && error}
        stateByLetterIndex={guessIndex === 1 ? stateByLetterIndex : undefined}
        win={win}
      />
      <GridRow
        letters={lettersByGuessIndex.get(2) || input}
        error={guessIndex === 2 && error}
        stateByLetterIndex={guessIndex === 2 ? stateByLetterIndex : undefined}
        win={win}
      />
      <GridRow
        letters={lettersByGuessIndex.get(3) || input}
        error={guessIndex === 3 && error}
        stateByLetterIndex={guessIndex === 3 ? stateByLetterIndex : undefined}
        win={win}
      />
      <GridRow
        letters={lettersByGuessIndex.get(4) || input}
        error={guessIndex === 4 && error}
        stateByLetterIndex={guessIndex === 4 ? stateByLetterIndex : undefined}
        win={win}
      />
      <GridRow
        letters={lettersByGuessIndex.get(5) || input}
        error={guessIndex === 5 && error}
        stateByLetterIndex={guessIndex === 5 ? stateByLetterIndex : undefined}
        win={win}
      />
    </div>
  );
};

export default Grid;
