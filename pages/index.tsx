import type { NextPage } from 'next';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useContext } from 'react';
import Stopwatch from 'src/components/atoms/Stopwatch';
import Game from 'src/components/organisms/Game';
import { WordLengthContext } from 'src/contexts/wordLength.context';

const Home: NextPage = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
  // const { wordLength, setWordLength } = useContext(WordLengthContext);

  // return (
  //   <>

  //     {/* word length {wordLength}
  //     <div onClick={() => setWordLength((wordLength) => wordLength + 1)}>increase</div>

  //     <Game /> */}
  //   </>
  // );
};

export default Home;
