import classNames from 'classnames';
import React from 'react';
import { State } from 'src/enums/state.enum';
import { IKeyboardKey } from 'src/interfaces/keyboardKey.interface';

interface Props {
  keyboardKey: IKeyboardKey;
  onPress: () => void;
}

const KeyboardKey: React.FC<Props> = ({ keyboardKey, onPress }) => {
  return (
    <button
      type="button"
      data-key={keyboardKey.dataKey}
      onClick={onPress}
      className={classNames(`flex h-[58px] w-full select-none items-center justify-center rounded text-sm font-medium uppercase`, {
        'bg-nwordle-gray-200': keyboardKey.state === State.IDLE,
        'bg-nwordle-gray-400 text-white': keyboardKey.state === State.ABSENT,
        'bg-nwordle-yellow-50 text-white': keyboardKey.state === State.PRESENT,
        'bg-nwordle-green-50 text-white': keyboardKey.state === State.CORRECT,
      })}
    >
      {keyboardKey.content}
    </button>
  );
};

export default KeyboardKey;
