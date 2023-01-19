import { ChangeEvent, RefCallback, SyntheticEvent } from "react";
import { Control } from "react-hook-form";

// from react-hook-form types
export type InputProps = {
  onChange?: (ev: ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (ev: SyntheticEvent) => void;
  ref?: RefCallback<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;
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
  selectOptions?: { value: string; label: string }[]; // adjust types based on project / business -> might not always be [{value: 'dog', label: 'Dog'}] (as an example)
};
