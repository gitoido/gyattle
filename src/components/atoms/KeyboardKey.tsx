import classNames from 'classnames';
import React from 'react';
import { KeyboardKeyState } from 'src/enums/keyboardKeyState';

interface Props {
  dataKey: string;
  state: KeyboardKeyState;
}

const KeyboardKey: React.FC<Props> = ({ dataKey, state, children }) => {
  return (
    <button
      type="button"
      data-key={dataKey}
      className={classNames(`flex h-[58px] flex-1 select-none items-center justify-center rounded font-bold uppercase`, {
        'bg-nwordle-gray-200': state === KeyboardKeyState.IDLE,
        'bg-nwordle-gray-400 text-white': state === KeyboardKeyState.ABSENT,
        'bg-nwordle-yellow-50 text-white': state === KeyboardKeyState.PRESENT,
        'bg-nwordle-green-50 text-white': state === KeyboardKeyState.CORRECT,
      })}
    >
      {children}
    </button>
  );
};

export default KeyboardKey;
