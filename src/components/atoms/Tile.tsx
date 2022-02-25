import classNames from 'classnames';
import React from 'react';
import { State } from 'src/enums/state.enum';
import { ITile } from 'src/interfaces/tile.interface';

interface Props {
  tile: ITile;
}

const Tile: React.FC<Props> = ({ tile }) => {
  return (
    <div
      className={classNames(
        'absolute inset-0 flex animate-reveal items-center justify-center border-2 text-[2rem] font-medium leading-none text-white ',
        {
          'border-nwordle-gray-400 bg-white text-black': tile.state === State.IDLE,
          'border-nwordle-gray-400 bg-nwordle-gray-400': tile.state === State.ABSENT,
          'border-nwordle-yellow-50 bg-nwordle-yellow-50': tile.state === State.PRESENT,
          'border-nwordle-green-50 bg-nwordle-green-50': tile.state === State.CORRECT,
        }
      )}
    >
      {tile.letter}
    </div>
  );
};

export default Tile;
