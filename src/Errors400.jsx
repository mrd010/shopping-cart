import { useRouteError } from 'react-router-dom';

const Errors400 = () => {
  const error = useRouteError();

  return (
    <div>
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
    </div>
  );
};
export default Errors400;
