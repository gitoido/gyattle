import React, { Dispatch, SetStateAction } from 'react';

export const ErrorHandlingContext = React.createContext<{
  error: Error | undefined;
  setError: Dispatch<SetStateAction<Error | undefined>>;
}>({
  error: undefined,
  setError: () => {},
});
