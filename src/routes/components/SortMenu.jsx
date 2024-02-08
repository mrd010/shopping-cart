import sortUpIcon from '../../assets/icons/bx-sort-up.svg';
import sortDownIcon from '../../assets/icons/bx-sort-down.svg';
import Icon from './Icon';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const StyledSortMenu = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  justify-items: start;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    gap: 0.5rem;
    padding: 0.75rem;
  }
`;

const InputField = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 0.4rem;
`;

const Inputs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;

  select {
    padding: 0.25rem;
    border-radius: 5px;
    outline: none;
    font-weight: 600;
  }
`;

const SelectButton = styled.button`
  padding: 2px;
  cursor: pointer;
  border: none;
  outline: 1px solid ${(props) => props.theme.fg};
  transition: opacity 0.1s ease;
  ${(props) =>
    props.$selected
      ? css`
          background-color: ${(props) => props.theme.main};
          opacity: 1;
        `
      : css`
          background-color: ${(props) => props.theme.bg};
          opacity: 0.5;
        `}
`;

// component #####################
const SortMenu = ({ sortBy, order, onSortChange }) => {
  return (
    <StyledSortMenu>
      <InputField>
        <label htmlFor="sort-by">Sort By:</label>
        <Inputs>
          <select
            id="sort-by"
            onChange={(e) =>
              onSortChange({
                order: e.target.value === 'rating' ? 'descending' : order,
                sortBy: e.target.value,
              })
            }
            value={sortBy}
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </Inputs>
      </InputField>
      <InputField>
        <span>Order:</span>
        <Inputs>
          <SelectButton
            $selected={order === 'ascending'}
            onClick={() => onSortChange({ sortBy: sortBy, order: 'ascending' })}
          >
            <Icon iconPath={sortUpIcon} color={order === 'ascending' ? 'light' : 'dark'}></Icon>
          </SelectButton>
          <SelectButton
            $selected={order === 'descending'}
            onClick={() => onSortChange({ sortBy: sortBy, order: 'descending' })}
          >
            <Icon iconPath={sortDownIcon} color={order === 'descending' ? 'light' : 'dark'}></Icon>
          </SelectButton>
        </Inputs>
      </InputField>
    </StyledSortMenu>
  );
};

SortMenu.propTypes = {
  sortBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onSortChange: PropTypes.func.isRequired,
};
export default SortMenu;
