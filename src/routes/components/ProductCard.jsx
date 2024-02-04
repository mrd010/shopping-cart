import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div>
      <Link to={`product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h5>{product.title}</h5>
      </Link>
      <span>rate:{product.rating.rate}</span>
      <span>price:{product.price}$</span>
      <button>Add to cart</button>
    </div>
  );
};

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
