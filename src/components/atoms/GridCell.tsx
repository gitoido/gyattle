import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { State } from 'src/enums/state.enum';

interface Props {
  letter: string;
  state: State;
  index: number;
  reveal?: boolean;
  win?: boolean;
}

const GridCell: React.FC<Props> = ({ letter, state, index, reveal, win }) => {
  const [popIn, setPopIn] = useState(false);

  useEffect(() => {
    // trigger the popIn animation when the state changes from pristine to idle
    if (state === State.IDLE) {
      setPopIn(true);
    } else {
      setPopIn(false);
    }
  }, [state]);

  const [applyReveal, setApplyReveal] = useState(false);

  useEffect(() => {
    if (reveal) {
      setTimeout(() => {
        setApplyReveal(true);
      }, 250 + index * 500);
    }
  }, [reveal, index]);

  return (
    <div
      className={classNames('cell', {
        'cell-pristine': state === State.PRISTINE,
        'cell-idle': state === State.IDLE,
        'cell-absent': applyReveal && state === State.ABSENT,
        'cell-present': applyReveal && state === State.PRESENT,
        'cell-correct': applyReveal && state === State.CORRECT,
        popIn,
        reveal,
        win,
      })}
    >
      {letter}
    </div>
  );
};

export default GridCell;
