import type { NextPage } from 'next';
import { useContext } from 'react';
import Stopwatch from 'src/components/atoms/Stopwatch';
import Game from 'src/components/organisms/Game';
import { WordLengthContext } from 'src/contexts/wordLength.context';

const Home: NextPage = () => {
  const { wordLength, setWordLength } = useContext(WordLengthContext);

  return (
    <>
      {/* word length {wordLength}
      <div onClick={() => setWordLength((wordLength) => wordLength + 1)}>increase</div>

      <Game /> */}
    </>
  );
};

export default Home;
