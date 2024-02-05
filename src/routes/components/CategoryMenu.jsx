import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuOpener from './MenuOpener';
import { useState } from 'react';

const CategoryMenu = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <MenuOpener text="Categories" isExpanded={isOpen} onToggle={handleMenuToggle}></MenuOpener>
      <ul>
        {categories.map((cat) => {
          return (
            <li key={cat}>
              <NavLink to={`category/${cat}`}>{cat}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

export default CategoryMenu;
