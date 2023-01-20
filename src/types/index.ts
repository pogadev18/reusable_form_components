import { RefCallback } from "react";
// import { Control } from "react-hook-form";

// from react-hook-form types
export type InputProps = {
  onChange?: (e: any) => void; // todo: maybe type the events as well
  onBlur?: (e: any) => void; // todo: maybe type the events as well
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
  options?: { value: string | number; label: string }[]; // adjust types based on project / business -> might not always be [{value: 'dog', label: 'Dog'}] (as an example)
  isMultiSelect?: boolean;
};
