import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 0.7rem 1.4rem;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 0 5px ${(props) => props.theme.shadow};
  border: 2px solid ${(props) => props.theme.fg};
  transition:
    color 0.1s ease,
    background-color 0.1s ease,
    border-color 0.1s ease;
  &:hover {
    color: ${(props) => props.theme.bg};
    background-color: ${(props) => props.theme.main};
    border-color: ${(props) => props.theme.main};
  }
`;
const CustomLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};

CustomLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};
export default CustomLink;
