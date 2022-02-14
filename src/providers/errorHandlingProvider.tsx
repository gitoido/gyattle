import React from 'react';
import { ErrorHandlingContext } from 'src/contexts/errorHandling.context';
import useErrorHandling from 'src/hooks/useErrorHandling';

const ErrorHandlingProvider: React.FC = ({ children }) => {
  const [error, setError] = useErrorHandling();

  return <ErrorHandlingContext.Provider value={{ error, setError }}>{children}</ErrorHandlingContext.Provider>;
};

export default ErrorHandlingProvider;
