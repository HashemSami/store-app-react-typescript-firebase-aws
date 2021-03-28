import React, { FC } from "react";
import { CustomButtonContainer } from "./CustomButton.styles";

interface CustomButtonProps {
  children: React.ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  withItem?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const CustomButton: FC<CustomButtonProps> = ({ children, ...otherProps }) => (
  <CustomButtonContainer className="custom-button " {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
