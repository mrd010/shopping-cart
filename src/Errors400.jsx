import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import CustomLink from './routes/components/CustomLink';

const Styled400Error = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
  justify-items: center;
  .header {
    font-size: 5rem;
    font-weight: 700;
    color: ${(props) => props.theme.main};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 1rem;
  }
  .message {
    font-size: 1.5rem;
    margin: 0;
  }
  .data {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Errors400 = () => {
  const error = useRouteError();
  return (
    <Styled400Error>
      {isRouteErrorResponse(error) ? (
        <>
          <h1 className="header">{error.status}</h1>
          <p className="message">Oops! Something went wrong</p>
          {error.data.length && <span className="data">({error.data})</span>}
        </>
      ) : (
        <>
          <h3 className="header">Unknown Error</h3>
        </>
      )}
      <CustomLink to="/">Back to Home</CustomLink>
    </Styled400Error>
  );
};
export default Errors400;
