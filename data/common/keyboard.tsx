import { generateId } from 'lib/id';
import Image from 'next/image';
import BackspaceSVG from 'public/svg/backspace.svg';
import { KeyboardKeyState } from 'src/enums/keyboardKeyState';
import { IKeyboardKey } from 'src/interfaces/keyboardKey.interface';

export const keyboardRow1: IKeyboardKey[] = [
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'q',
    content: <>q</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'w',
    content: <>w</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'e',
    content: <>e</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'r',
    content: <>r</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 't',
    content: <>t</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'y',
    content: <>y</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'u',
    content: <>u</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'i',
    content: <>i</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'o',
    content: <>o</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'p',
    content: <>p</>,
  },
];

export const keyboardRow2: IKeyboardKey[] = [
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'a',
    content: <>a</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 's',
    content: <>s</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'd',
    content: <>d</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'f',
    content: <>f</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'g',
    content: <>g</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'h',
    content: <>h</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'j',
    content: <>j</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'k',
    content: <>k</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'l',
    content: <>l</>,
  },
];

export const keyboardRow3: IKeyboardKey[] = [
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'Enter',
    content: <>enter</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'z',
    content: <>z</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'x',
    content: <>x</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'c',
    content: <>c</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'v',
    content: <>v</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'b',
    content: <>b</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'n',
    content: <>n</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'm',
    content: <>m</>,
  },
  {
    id: generateId(),
    state: KeyboardKeyState.IDLE,
    dataKey: 'Backspace',
    content: <Image src={BackspaceSVG} alt="Backspace icon" />,
  },
];
