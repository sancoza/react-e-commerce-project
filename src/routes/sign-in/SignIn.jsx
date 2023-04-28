import React from 'react';
import { Button } from '../../components/button/Button';
import {

  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../components/utils/firebase/firebase.utils';
import { SignUpForm } from '../../components/sign-up-form/SignUpForm';

export const SignIn = () => {


  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
 
  return (
    <div>
      <h1>SignIn</h1>
      <Button onClick={logGoogleUser}>SignIn with Google</Button>
      <SignUpForm />
    </div>
  );
};
