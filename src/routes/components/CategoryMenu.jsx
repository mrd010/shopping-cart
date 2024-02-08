import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useContext } from 'react';
import Categories from '../../CategoriesContext';

const SideMenu = styled.nav`
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
  border-radius: 10px;
  margin: 1rem;
  position: sticky;
  top: 5rem;
  left: 0;
  align-self: start;
  padding-bottom: 3rem;
  box-shadow: 0 0 8px ${(props) => props.theme.shadow};

  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    border-radius: 0;
    position: static;
  }
`;

const MenuTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media screen and (max-width: 768px) {
  }
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
`;

const MenuItem = styled.li`
  background-color: #dddddd11;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  display: block;
  cursor: pointer;
`;

const MenuLink = styled(NavLink)`
  padding: 0.75rem 2rem;
  display: block;
  transition: transform 0.1s ease;
  .link-text {
    display: inline-block;
    transition: transform 0.1s ease;
  }
  &:not(.active):hover {
    border-left: 5px solid ${(props) => props.theme.main};
    background-color: #dddddd33;
    .link-text {
      transform: translateX(5px);
    }
  }
  &.pending {
    background-color: #dddddd33;
    border-left: 5px solid ${(props) => props.theme.main};
  }
  &.active {
    background-color: ${(props) => props.theme.main};
  }
`;

const CategoryMenu = () => {
  const categories = useContext(Categories);
  return (
    <SideMenu>
      <MenuTitle>Categories</MenuTitle>
      <LinkList>
        {categories.map((cat) => {
          return (
            <MenuItem key={cat}>
              <MenuLink
                to={`/shop/category/${cat}`}
                className={({ isActive, isPending }) => [
                  isActive ? 'active' : '',
                  isPending ? 'pending' : '',
                ]}
              >
                <span className="link-text">{cat}</span>
              </MenuLink>
            </MenuItem>
          );
        })}
      </LinkList>
    </SideMenu>
  );
};

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default CategoryMenu;
