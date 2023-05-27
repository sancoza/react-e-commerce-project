import React from 'react';

import { SignUpForm } from '../../components/sign-up-form/SignUpForm';
import { SignInForm } from '../../components/sign-in-form/SignInForm';
import { AuthenticationContainer } from './Authentication.style';
export const Authentication = () => {

  return (
    <AuthenticationContainer>
      
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};
