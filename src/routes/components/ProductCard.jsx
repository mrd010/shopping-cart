import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartDispatchContext } from '../../CartContext';
import styled from 'styled-components';
import Icon from './Icon';
import shipIcon from '../../assets/icons/local_shipping_FILL0.svg';
import rateIcon from '../../assets/icons/grade_FILL1.svg';
import { SHIP_FREE_THRESHOLD } from '../../Loaders';
import AddRemoveButton from './AddRemoveButton';

// styles
const StyledProductCard = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme.shadow};
  background-color: #fff;
  transition: transform 0.1s ease;
  transform-origin: bottom;
  &:hover {
    transform: scale(1.03);
  }
`;

const ProductInfo = styled(Link)`
  display: grid;
  grid-template-rows: 200px auto 1fr auto;
  padding: 1.5rem;
  align-items: start;
  position: relative;
  gap: 1rem;
`;

const ProductImage = styled.img`
  height: 100%;
  object-fit: contain;
`;

const ShipFreeLabel = styled.div`
  visibility: ${(props) => (props.$isFreeShip ? 'visible' : 'hidden')};
  display: grid;
  grid-template-columns: auto auto;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.bg};
  border-radius: 20px;
  justify-self: end;
  align-items: end;
  padding: 4px 0.5rem;
  gap: 5px;
  .label {
    font-size: 0.9rem;
  }
`;

const ProductName = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
`;

const ProductRate = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  .icon-wrapper {
    filter: brightness(0) saturate(100%) invert(92%) sepia(20%) saturate(3282%) hue-rotate(345deg)
      brightness(100%) contrast(97%);
  }
  .rate {
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transform: translateY(1px);
    margin-left: 2px;
  }
`;

const ProductPrice = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  .price {
    font-size: 1.8rem;
    padding: 0.25rem 0;
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .dollar {
    font-size: 1.5rem;
  }
`;
const AddToCartBtn = styled.button`
  background-color: ${(props) => props.theme.main};
  border: none;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.bg};
  cursor: pointer;
  width: 100%;
  height: 50px;
  transition: transform 0.1s ease;
  transform-origin: top;
  &:hover {
    transform: scaleX(1.2);
  }
`;

// component
const ProductCard = ({ product, count }) => {
  const dispatch = useContext(CartDispatchContext);

  const handleAddToCart = () => {
    dispatch({ type: 'added', id: product.id });
  };

  const handleRemoveFromCart = () => {
    dispatch({ type: 'removed', id: product.id });
  };

  return (
    <StyledProductCard>
      <ProductInfo to="#">
        <ProductImage src={product.image} alt={product.title} />
        <ShipFreeLabel $isFreeShip={product.price >= SHIP_FREE_THRESHOLD}>
          <Icon iconPath={shipIcon} size={20}></Icon>
          <span className="label">ShipFree</span>
        </ShipFreeLabel>
        <ProductName>{product.title}</ProductName>
        <ProductRate>
          <div className="icon-wrapper">
            <Icon iconPath={rateIcon}></Icon>
          </div>
          <span className="rate">{product.rating.rate}</span>
        </ProductRate>
        <ProductPrice>
          <span className="price">{product.price}</span>
          <span className="dollar">$</span>
        </ProductPrice>
      </ProductInfo>

      <div>
        {count <= 0 ? (
          <AddToCartBtn onClick={handleAddToCart}>
            <span className="button-text">Add to cart</span>
          </AddToCartBtn>
        ) : (
          <AddRemoveButton
            onAdd={handleAddToCart}
            onRemove={handleRemoveFromCart}
            count={count}
            style="h"
          ></AddRemoveButton>
        )}
      </div>
    </StyledProductCard>
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
