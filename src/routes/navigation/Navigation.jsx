import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import {
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  LogoContainer,
} from './Navigation.style';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CradIcon } from '../../components/cart-icon/CradIcon';
import { CartDropdown } from '../../components/cart-dropdown/CartDropdown';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div className="logo">
            <CrwnLogo />
          </div>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CradIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};
