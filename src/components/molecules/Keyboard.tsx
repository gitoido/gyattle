import classNames from 'classnames';
import { WordLengthContext } from 'contexts/wordLength.context';
import { keyboardRow1, keyboardRow2, keyboardRow3 } from 'data/common/keyboard';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import KeyboardKey from 'src/components/atoms/KeyboardKey';

interface Props {
  onEnter: (input: string[]) => void;
}

const Keyboard: React.FC<Props> = ({ onEnter }) => {
  const [input, setInput] = useState<string[]>([]);
  const { wordLength } = useContext(WordLengthContext);

  useEffect(() => {
    setInput([]);
  }, [wordLength]);

  const inputHandler = useCallback(
    (key: string) => {
      switch (key) {
        case 'Enter':
          onEnter(input);
          break;
        case 'Backspace':
          setInput((input) => {
            input.splice(-1);

            return input;
          });
          break;
        default:
          if (input.length >= wordLength) {
            return;
          }

          setInput((input) => {
            input.push(key);

            return input;
          });
          break;
      }
    },
    [input, wordLength, onEnter]
  );

  const keydownHandler = useCallback(
    (event: KeyboardEvent) => {
      if (event.code.startsWith('Key') || event.key === 'Backspace' || event.key === 'Enter') {
        inputHandler(event.key);
      }
    },
    [inputHandler]
  );

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);

    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);

  const firstRow = useMemo(
    () => (
      <div className="flex gap-1.5">
        {keyboardRow1.map((keyboardKey) => (
          <div key={keyboardKey.id} className="flex-1">
            <KeyboardKey keyboardKey={keyboardKey} onPress={() => inputHandler(keyboardKey.dataKey)} />
          </div>
        ))}
      </div>
    ),
    [inputHandler]
  );

  const secondRow = useMemo(
    () => (
      <div className="flex gap-1.5">
        <div className="flex-[0.5]"></div>
        {keyboardRow2.map((keyboardKey) => (
          <div key={keyboardKey.id} className="flex-1">
            <KeyboardKey keyboardKey={keyboardKey} onPress={() => inputHandler(keyboardKey.dataKey)} />
          </div>
        ))}
        <div className="flex-[0.5]"></div>
      </div>
    ),
    [inputHandler]
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
            <KeyboardKey keyboardKey={keyboardKey} onPress={() => inputHandler(keyboardKey.dataKey)} />
          </div>
        ))}
      </div>
    ),
    [inputHandler]
  );

  return (
    <>
      <div className="flex touch-manipulation flex-col gap-2">
        {firstRow}
        {secondRow}
        {thirdRow}
      </div>
    </>
  );
};

export default Keyboard;
