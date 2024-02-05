import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideMenu = styled.nav`
  background-color: ${(props) => props.theme.fg};
  color: ${(props) => props.theme.bg};
  border-radius: 10px;
  margin: 1rem;
  position: sticky;
  top: 5rem;
  left: 0;
  align-self: start;
  padding-bottom: 5rem;
  box-shadow: 0 0 8px ${(props) => props.theme.shadow};
`;

const MenuTitle = styled.h3`
  font-size: 1.5rem;
  margin: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
`;

const MenuItem = styled.li`
  background-color: #dddddd11;
  font-size: 1rem;
  font-weight: 600;
  text-transform: capitalize;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #dddddd33;
    border-left: 5px solid ${(props) => props.theme.main};
  }
`;

const MenuLink = styled(NavLink)`
  padding: 0.75rem 2rem;
  display: block;
  transition: transform 0.1s ease;
  &:hover {
    transform: translateX(5px);
  }
`;

const CategoryMenu = ({ categories }) => {
  return (
    <SideMenu>
      <MenuTitle>Categories</MenuTitle>
      <LinkList>
        {categories.map((cat) => {
          return (
            <MenuItem key={cat}>
              <MenuLink to={`category/${cat}`}>{cat}</MenuLink>
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
