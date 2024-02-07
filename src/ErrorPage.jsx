import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import styled from 'styled-components';

const StyledErrorContainer = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
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
  button {
    background-color: ${(props) => props.theme.main};
    border: none;
    padding: 0.5rem 1rem;
    font-weight: 600;
    border-radius: 5px;
    color: ${(props) => props.theme.bg};
  }
`;
const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(location);
  if (!isRouteErrorResponse(error)) {
    return (
      <StyledErrorContainer>
        <h2 className="header">Error</h2>
        <p className="message">{error.message}</p>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </StyledErrorContainer>
    );
  }
  throw error;
};
export default ErrorPage;
