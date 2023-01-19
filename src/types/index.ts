import { RefCallback } from "react";

// from react-hook-form types
export type InputProps = {
  onChange?: (ev: any) => unknown;
  onBlur?: (ev: any) => unknown;
  ref?: RefCallback<HTMLInputElement | HTMLTextAreaElement>;
  name?: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};

export type FormControl = {
  id: string;
  label: string;
  error?: string;
  inputProps?: InputProps;
  type?: string;
};
