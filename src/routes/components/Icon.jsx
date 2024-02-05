import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.img`
  filter: invert(99%) sepia(34%) saturate(493%) hue-rotate(175deg) brightness(99%) contrast(96%);
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`;

const Icon = ({ iconPath, size = 25 }) => {
  return <StyledIcon src={iconPath} size={size} />;
};

// PropTypes #####################
Icon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  size: PropTypes.number,
};
export default Icon;
