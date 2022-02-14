import { Dispatch, SetStateAction, useState } from 'react';

export default function useErrorHandling(): {
  error: Error | undefined;
  setError: Dispatch<SetStateAction<Error | undefined>>;
} {
  const [error, setError] = useState<Error | undefined>();

  return { error, setError };
}
