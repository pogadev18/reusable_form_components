import { RefCallback } from "react";

export type InputPropsType = {
  onChange?: (ev: any) => unknown;
  onBlur?: (ev: any) => unknown;
  ref?: RefCallback<HTMLInputElement>;
  name?: string;
  min?: string | number;
  max?: string | number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  disabled?: boolean;
};
