import React, { FC } from "react";
import "./CustomButton.styles.scss";

interface CustomButtonProps {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
