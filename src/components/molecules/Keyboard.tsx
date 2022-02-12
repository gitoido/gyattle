import classNames from 'classnames';
import { keyboardRow1, keyboardRow2, keyboardRow3 } from 'data/common/keyboard';
import React, { useMemo } from 'react';
import KeyboardKey from 'src/components/atoms/KeyboardKey';

const Keyboard: React.FC = () => {
  const firstRow = useMemo(
    () => (
      <div className="flex gap-1.5">
        {keyboardRow1.map((keyboardKey) => (
          <div key={keyboardKey.id} className="flex-1">
            <KeyboardKey keyboardKey={keyboardKey} />
          </div>
        ))}
      </div>
    ),
    []
  );

  const secondRow = useMemo(
    () => (
      <div className="flex gap-1.5">
        <div className="flex-[0.5]"></div>
        {keyboardRow2.map((keyboardKey) => (
          <div key={keyboardKey.id} className="flex-1">
            <KeyboardKey keyboardKey={keyboardKey} />
          </div>
        ))}
        <div className="flex-[0.5]"></div>
      </div>
    ),
    []
  );

  const thirdRow = useMemo(
    () => (
      <div className="flex gap-1.5">
        {keyboardRow3.map((keyboardKey, index) => (
          <div
            key={keyboardKey.id}
            className={classNames({
              'flex-1': index > 0 && index < keyboardRow3.length - 1,
              'flex-[1.5]': index === 0 || index === keyboardRow3.length - 1,
            })}
          >
            <KeyboardKey keyboardKey={keyboardKey} />
          </div>
        ))}
      </div>
    ),
    []
  );

  return (
    <div className="flex flex-col gap-2">
      {firstRow}
      {secondRow}
      {thirdRow}
    </div>
  );
};

export default Keyboard;
