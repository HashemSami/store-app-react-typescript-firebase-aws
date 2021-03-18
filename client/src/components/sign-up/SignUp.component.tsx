import React, { useState, FC } from "react";
import "./SignUp.styles.scss";

import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";

// willneed auth when creating a new user
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { useActions } from "../../hooks/useActions";

interface FormElements {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: FC = () => {
  const [formElements, setFormElements] = useState<FormElements>({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { SetCurrentUser } = useActions();

  // this function will talk to our server to look for the user after submitting
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formElements;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      // this will create our new user in the auth service with the email and password
      // and will return a user object once it is finish
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      // then will send that object to our createUserProfileDocument to save the user in our database
      // and retun the saved user to use in our app
      const userData = await createUserProfileDocument(user);
      if (!userData) {
        return;
      }
      const { token, uid } = userData;

      SetCurrentUser(uid, token);

      setFormElements({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormElements({
      ...formElements,
      [name]: value,
    });
  };

  const { displayName, email, password, confirmPassword } = formElements;

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="DisplayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
