import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartDispatchContext } from '../../CartContext';

const ProductCardCart = ({ product, count }) => {
  const dispatch = useContext(CartDispatchContext);

  const handleAddToCart = () => {
    dispatch({ type: 'added', id: product.id });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'removed', id: product.id });
  };

  const handleDeleteFromCart = () => {
    dispatch({ type: 'deleted', id: product.id });
  };

  return (
    <div>
      <div>
        <img src={product.image} alt="" />
        <h6>{product.title}</h6>
        <span>Total Price: {product.price * count}$</span>
        <div>
          <button onClick={handleAddToCart}>+</button>
          <span>{count}</span>
          <button onClick={handleRemoveFromCart}>-</button>
        </div>
      </div>
      <div>
        <button onClick={handleDeleteFromCart}>Delete</button>
      </div>
    </div>
  );
};
export default ProductCardCart;

// Prop types ####################################
const isUrl = (props, propName, componentName) => {
  try {
    new URL(props[propName]);
  } catch (error) {
    return new Error(
      `Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`
    );
  }
};

ProductCardCart.propTypes = {
  count: PropTypes.number.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: isUrl,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.exact({
      count: PropTypes.number.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
