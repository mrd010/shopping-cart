import { useState } from 'react';
import sortUpIcon from '../../assets/icons/bx-sort-up.svg';
import sortDownIcon from '../../assets/icons/bx-sort-down.svg';
import Icon from './Icon';
import styled, { css } from 'styled-components';

const StyledSortMenu = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  justify-items: start;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem;
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

const SortMenu = () => {
  const [sortSettings, setSortSettings] = useState({ sortBy: 'name', order: 'descending' });
  return (
    <StyledSortMenu>
      <InputField>
        <label htmlFor="sort-by">Sort By:</label>
        <Inputs>
          <select id="sort-by">
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
            $selected={sortSettings.order === 'ascending'}
            onClick={() => setSortSettings({ ...sortSettings, order: 'ascending' })}
          >
            <Icon
              iconPath={sortUpIcon}
              color={sortSettings.order === 'ascending' ? 'light' : 'dark'}
            ></Icon>
          </SelectButton>
          <SelectButton
            $selected={sortSettings.order === 'descending'}
            onClick={() => setSortSettings({ ...sortSettings, order: 'descending' })}
          >
            <Icon
              iconPath={sortDownIcon}
              color={sortSettings.order === 'descending' ? 'light' : 'dark'}
            ></Icon>
          </SelectButton>
        </Inputs>
      </InputField>
    </StyledSortMenu>
  );
};
export default SortMenu;
