import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartDispatchContext } from '../../CartContext';
import styled from 'styled-components';
import AddRemoveButton from './AddRemoveButton';

const StyledCartCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  gap: 1rem;
`;

const ProductCartInfo = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 150px minmax(100px, 300px) auto;
  grid-template-rows: repeat(2, 60px);
  border: 1px solid ${(props) => props.theme.fg};
  padding: 1rem;
  border-radius: 10px;
  background-color: #fff;
`;

const DeleteProduct = styled.div`
  display: grid;
  button {
    padding: 2rem;
    display: grid;
    gap: 0.5rem;
    place-content: center;
    justify-items: center;
    color: ${(props) => props.theme.fg};
    border: 1px solid ${(props) => props.theme.fg};
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 10px;
    background-color: #fff;
    transition: transform 0.1s ease;
    &:hover {
      background-color: ${(props) => props.theme.main};
      color: ${(props) => props.theme.bg};
      border-color: transparent;
    }
  }
`;
const ProductImage = styled.img`
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  height: 100%;
  object-fit: contain;
`;
const ProductTitle = styled.span`
  font-size: 1.2rem;
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  align-self: end;
`;
const ProductTotalPrice = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / 3;
  display: grid;
  align-content: center;
  align-self: start;
  .text {
    font-size: 1rem;
  }
  .price {
    font-weight: 600;
    font-size: 2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

const StyledAddRemoveButton = styled.div`
  grid-row: 1 / -1;
  grid-column: 3 / -1;
  align-self: center;
`;

// component
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
    <StyledCartCard>
      <ProductCartInfo>
        <ProductImage src={product.image} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductTotalPrice>
          <span className="text">Total Price</span>
          <span className="price">
            {(product.price * count).toFixed(2)}
            <sup>$</sup>
          </span>
        </ProductTotalPrice>
        <StyledAddRemoveButton>
          <AddRemoveButton
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
            count={count}
            style="v"
          ></AddRemoveButton>
        </StyledAddRemoveButton>
      </ProductCartInfo>
      <DeleteProduct>
        <button onClick={handleDeleteFromCart}>Remove From Cart</button>
      </DeleteProduct>
    </StyledCartCard>
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
