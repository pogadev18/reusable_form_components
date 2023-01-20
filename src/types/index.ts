import { RefCallback } from "react";
// import { Control } from "react-hook-form";

// from react-hook-form types
export type InputProps = {
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
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
  reactHookFormControl?: any; // todo: type this
  type?: string;
  selectOptions?: { value: string; label: string }[]; // adjust types based on project / business -> might not always be [{value: 'dog', label: 'Dog'}] (as an example)
  isMultiSelect?: boolean;
};
