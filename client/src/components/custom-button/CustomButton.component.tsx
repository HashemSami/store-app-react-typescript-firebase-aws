import React, { FC } from "react";
import "./CustomButton.styles.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
