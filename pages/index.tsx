import type { NextPage } from 'next';
import { useSession, signOut, signIn } from 'next-auth/react';
import { useContext } from 'react';
import Stopwatch from 'src/components/atoms/Stopwatch';
import Game from 'src/components/organisms/Game';
import { WordLengthContext } from 'src/contexts/wordLength.context';
import gql from 'graphql-tag';

// import aws_exports from 'src/aws-exports';

const Home: NextPage = () => {
  function handler() {
  }

  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <h4 onClick={handler}>GO GO GO</h4>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
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
