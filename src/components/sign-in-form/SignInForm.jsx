import React from 'react';
import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  
  
} from '../../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/FormInput';
import { SignInContainer, ButtonsContainer } from './SignInForm.style';
import { Button } from '../button/Button';


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
      const { user } = await signInAuthUserWithEmailAndPassword(
         email,
        password
      )
      
      
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect passwor for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
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
          <Button type="submit">Sign In</Button>
          <Button type="button " buttonType="google" onClick={signInWithGoogle}>
            sign in with google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};
