import React, { useState } from "react";
import "./SignIn.styles.scss";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const [formElements, setFormElements] = useState({
    email: "",
    password: "",
  });

  // this function will look into our database to confirm user signing in
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formElements;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setFormElements({ email: "", password: "" });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormElements({ ...formElements, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={formElements.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={formElements.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>

          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
