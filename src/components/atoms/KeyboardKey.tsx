import classNames from 'classnames';
import React from 'react';
import { KeyboardKeyState } from 'src/enums/keyboardKeyState';
import { IKeyboardKey } from 'src/interfaces/keyboardKey.interface';

interface Props {
  keyboardKey: IKeyboardKey;
}

const KeyboardKey: React.FC<Props> = ({ keyboardKey }) => {
  return (
    <button
      type="button"
      data-key={keyboardKey.dataKey}
      className={classNames(`flex h-[58px] w-full select-none items-center justify-center rounded text-sm font-semibold uppercase`, {
        'bg-nwordle-gray-200': keyboardKey.state === KeyboardKeyState.IDLE,
        'bg-nwordle-gray-400 text-white': keyboardKey.state === KeyboardKeyState.ABSENT,
        'bg-nwordle-yellow-50 text-white': keyboardKey.state === KeyboardKeyState.PRESENT,
        'bg-nwordle-green-50 text-white': keyboardKey.state === KeyboardKeyState.CORRECT,
      })}
    >
      {keyboardKey.content}
    </button>
  );
};

export default KeyboardKey;
