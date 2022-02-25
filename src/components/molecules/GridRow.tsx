import classNames from 'classnames';
import { generateId } from 'lib/id';
import React, { useContext, useEffect, useState } from 'react';
import GridCell from 'src/components/atoms/GridCell';
import { WordLengthContext } from 'src/contexts/wordLength.context';
import { State } from 'src/enums/state.enum';

interface Props {
  letters: string[];
  error?: boolean;
  stateByLetterIndex?: Map<number, State>;
  win?: boolean;
}

const GridRow: React.FC<Props> = ({ letters, error, stateByLetterIndex, win }) => {
  const { wordLength } = useContext(WordLengthContext);
  const [cells, setCells] = useState<string[]>([]);

  useEffect(() => {
    setCells(Array.from(new Array(wordLength), () => generateId()));
  }, [wordLength]);

  return (
    <div
      className={classNames('row', {
        error,
      })}
    >
      {cells.map((id, index) => (
        <GridCell
          key={id}
          letter={letters[index]}
          state={Boolean(letters[index]) ? (stateByLetterIndex ? stateByLetterIndex.get(index)! : State.IDLE) : State.PRISTINE}
          index={index}
          win={win}
          reveal={Boolean(stateByLetterIndex)}
        />
      ))}
    </div>
  );
};

export default GridRow;
