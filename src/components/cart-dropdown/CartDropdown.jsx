import React from 'react';
import './CartDropdown.style.scss';
import {Button} from '../button/Button';
export const CartDropdown = () => {
  return <div className='cart-dropdown-container '>
    <div className='cart-items'>
      <Button>
        GO TO CHECKOUT
      </Button>
    </div>
  </div>;
};
