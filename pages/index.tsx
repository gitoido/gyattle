import { WordLengthContext } from 'contexts/wordLength.context';
import type { NextPage } from 'next';
import { useContext } from 'react';
import Keyboard from 'src/components/molecules/Keyboard';

const Home: NextPage = () => {
  const { wordLength, setWordLength } = useContext(WordLengthContext);

  return (
    <div>
      word length {wordLength}
      <div onClick={() => setWordLength((wordLength) => wordLength + 1)}>increase</div>
      <Keyboard onEnter={(input) => console.log(input)} />
    </div>
  );
};

export default Home;
