import { Dispatch, SetStateAction, useState } from 'react';

export default function useErrorHandling(): [Error | undefined, Dispatch<SetStateAction<Error | undefined>>] {
  const [error, setError] = useState<Error | undefined>();

  return [error, setError];
}
