import { State } from 'src/enums/state.enum';

export interface IGridCell {
  id: string;
  state: State;
  letter: string;
}
