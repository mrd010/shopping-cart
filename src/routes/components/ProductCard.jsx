import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDispatchContext } from '../../CartContext';

const ProductCard = ({ product, count }) => {
  const dispatch = useContext(CartDispatchContext);

  const handleAddToCart = () => {
    dispatch({ type: 'added', id: product.id });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'removed', id: product.id });
  };

  return (
    <div>
      <Link to={`product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h5>{product.title}</h5>
      </Link>
      <span>rate:{product.rating.rate}</span>
      <span>price:{product.price}$</span>
      <div>
        {count <= 0 ? (
          <button onClick={handleAddToCart}>Add to cart</button>
        ) : (
          <>
            <button onClick={handleAddToCart}>+</button>
            <span>{count}</span>
            <button onClick={handleRemoveFromCart}>-</button>
          </>
        )}
      </div>
    </div>
  );
};

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

ProductCard.propTypes = {
  count: PropTypes.number.isRequired,
  product: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string,
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
export default ProductCard;
