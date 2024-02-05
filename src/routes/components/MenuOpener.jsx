import PropTypes from 'prop-types';
import expandIcon from '../../assets/icons/expand_more_FILL0.svg';
import Icon from './Icon';
import styled from 'styled-components';

const AnimatedIcon = styled.div`
  transform: ${(props) => (props.$expanded ? 'rotate(-90deg)' : 'rotate(0)')};
  transform-origin: center;
  transition: transform 0.2s ease;
`;

const MenuOpener = ({ text, isExpanded, onToggle }) => {
  return (
    <button onClick={() => onToggle()}>
      <span>{text}</span>
      <AnimatedIcon $expanded={isExpanded}>
        <Icon iconPath={expandIcon} color="dark"></Icon>
      </AnimatedIcon>
    </button>
  );
};

MenuOpener.propTypes = {
  text: PropTypes.string,
  isExpanded: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
};
export default MenuOpener;
