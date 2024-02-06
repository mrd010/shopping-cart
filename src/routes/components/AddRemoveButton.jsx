import styled, { css } from 'styled-components';
import Icon from './Icon';
import addIcon from '../../assets/icons/add_FILL0.svg';
import removeIcon from '../../assets/icons/remove_FILL0.svg';
import PropTypes from 'prop-types';

const AddRemoveBtn = styled.div`
  display: grid;
  gap: 0.5rem;
  ${(props) =>
    props.$style === 'v'
      ? css`
          grid-template-rows: auto 1fr auto;
          justify-items: center;
        `
      : css`
          grid-template-columns: auto 1fr auto;
          height: 50px;
          align-items: center;
          padding: 0 2rem;
        `}
  button {
    background-color: ${(props) => props.theme.main};
    border: none;
    padding: 0.4rem 0.4rem;
    border-radius: 10px;
  }
  .count {
    text-align: center;
    background-color: #ddd;
    padding: 0.4rem 0.4rem;
    border-radius: 10px;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.3rem;
  }
`;

const AddRemoveButton = ({ onAdd, onRemove, count, style }) => {
  return (
    <AddRemoveBtn $style={style}>
      <button onClick={onAdd} className="add-button">
        <Icon iconPath={addIcon}></Icon>
      </button>
      <span className="count">{count}</span>
      <button onClick={onRemove} className="remove-button">
        <Icon iconPath={removeIcon}></Icon>
      </button>
    </AddRemoveBtn>
  );
};

AddRemoveButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
};
export default AddRemoveButton;
