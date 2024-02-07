import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const StyledErrorContainer = styled.div`
  display: grid;
  place-content: center;
  padding-top: 20vh;

  .header {
    font-size: 3rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-transform: uppercase;
    color: ${(props) => props.theme.main};
    margin: 0;
  }
  .message {
    font-size: 1.2rem;
    text-align: center;
  }
`;
const ErrorPage = () => {
  const error = useRouteError();
  if (error instanceof Error) {
    return (
      <StyledErrorContainer>
        <h2 className="header">Error</h2>
        <p className="message">{error.message}</p>
      </StyledErrorContainer>
    );
  }
  return error;
};
export default ErrorPage;
