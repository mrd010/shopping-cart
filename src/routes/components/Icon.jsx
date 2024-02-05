import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.img`
  filter: ${(props) =>
    props.$color === 'dark'
      ? 'filter: brightness(0) saturate(100%) invert(11%) sepia(3%) saturate(5340%) hue-rotate(191deg) brightness(98%) contrast(121%);'
      : 'invert(99%) sepia(34%) saturate(493%) hue-rotate(175deg) brightness(99%) contrast(96%)'};
  width: ${(props) => `${props.$size}px`};
  height: ${(props) => `${props.$size}px`};
`;

const Icon = ({ iconPath, size = 25, color = 'light' }) => {
  return <StyledIcon src={iconPath} $size={size} $color={color} />;
};

// PropTypes #####################
Icon.propTypes = {
  iconPath: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};
export default Icon;
