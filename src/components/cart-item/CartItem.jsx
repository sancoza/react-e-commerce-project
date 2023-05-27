import React from 'react';
import { CartItemContainer, ItemDetails } from './CartItem.style';
export const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x $ {price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};
