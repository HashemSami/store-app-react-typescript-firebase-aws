import React from "react";
import "./SignInAndSignUpPage.styles.scss";

import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SingUp.conponent";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
