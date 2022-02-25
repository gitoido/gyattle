import React, { useEffect, useState } from 'react';
import { ErrorHandlingContext } from 'src/contexts/errorHandling.context';

const ErrorHandlingProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<Error | undefined>();

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <ErrorHandlingContext.Provider
      value={{
        error,
        setError,
      }}
    >
      {children}
    </ErrorHandlingContext.Provider>
  );
};

export default ErrorHandlingProvider;
