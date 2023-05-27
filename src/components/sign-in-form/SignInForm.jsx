import React from 'react';
import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  
  
} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/FormInput';
import { SignInContainer, ButtonsContainer } from './SignInForm.style';
import { Button, BUTTON_TYPE_CLASSES } from '../button/Button';


const defaultformFields = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultformFields);
  const { email, password } = formFields;

 

  const resetFormFields = () => {
    setFormFields(defaultformFields);
  };

  const signInWithGoogle = async () => {
   await signInWithGooglePopup();
   
    
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log('user sign in failed', error);
    }
  };


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Alredy have an account?</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          autoComplete="username"
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          autoComplete="new-password"
        />

<ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
