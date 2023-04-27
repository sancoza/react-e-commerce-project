import React from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../components/utils/firebase/firebase.utils';
export const SignIn = () => {

  const logGoogleUser = async () => {
    const {user} =await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>SignIn with Google</button>
    </div>
  );
};
