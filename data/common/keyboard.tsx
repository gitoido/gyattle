import { generateId } from 'lib/id';
import BackspaceSVG from 'public/svg/backspace.svg';
import { State } from 'src/enums/state.enum';
import { IKeyboardKey } from 'src/interfaces/keyboardKey.interface';

export const keyboardRow1: IKeyboardKey[] = [
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'q',
    content: <>q</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'w',
    content: <>w</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'e',
    content: <>e</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'r',
    content: <>r</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 't',
    content: <>t</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'y',
    content: <>y</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'u',
    content: <>u</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'i',
    content: <>i</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'o',
    content: <>o</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'p',
    content: <>p</>,
  },
];

export const keyboardRow2: IKeyboardKey[] = [
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'a',
    content: <>a</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 's',
    content: <>s</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'd',
    content: <>d</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'f',
    content: <>f</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'g',
    content: <>g</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'h',
    content: <>h</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'j',
    content: <>j</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'k',
    content: <>k</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'l',
    content: <>l</>,
  },
];

export const keyboardRow3: IKeyboardKey[] = [
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'Enter',
    content: <>enter</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'z',
    content: <>z</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'x',
    content: <>x</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'c',
    content: <>c</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'v',
    content: <>v</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'b',
    content: <>b</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'n',
    content: <>n</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'm',
    content: <>m</>,
  },
  {
    id: generateId(),
    state: State.IDLE,
    dataKey: 'Backspace',
    content: <BackspaceSVG />,
  },
];
