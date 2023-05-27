import React from 'react';
import { ProductCartContainer,Footer,Name,Price } from './ProductCard.style';
import { Button } from '../button/Button';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
export const ProductCard = ({ product }) => {
  const { imageUrl, name, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Card
      </Button>
    </ProductCartContainer>
  );
};
