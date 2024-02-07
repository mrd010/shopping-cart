import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  if (error instanceof Error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return error;
};
export default ErrorPage;
