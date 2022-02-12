import { KeyboardKeyState } from 'src/enums/keyboardKeyState';

export interface IKeyboardKey {
  id: string;
  dataKey: string;
  state: KeyboardKeyState;
  content: JSX.Element;
}
