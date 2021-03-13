import React, { FC } from "react";
import "./FormInput.styles.scss";

interface FormInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
}

const FormInput: FC<FormInputProps> = ({ onChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...otherProps} />
      {label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
