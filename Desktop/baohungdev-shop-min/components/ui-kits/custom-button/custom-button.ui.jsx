import React from "react";
import { CustomButtonContainer } from "./custom-button.ui.styles";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
