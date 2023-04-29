import React from 'react';
import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';
import { FormInput } from '../form-input/FormInput';
import './SignIn.Form.style.scss';
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
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
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
      // if(error.code === 'auth/wrong-password') {
      //   alert('incorrect password for email');
      // } else if (error.code === 'auth/user-not-found') {
      //   alert('no user associated with this email');
      // }
      // console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type='button ' buttonType="google" onClick={signInWithGoogle}>
            sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};
