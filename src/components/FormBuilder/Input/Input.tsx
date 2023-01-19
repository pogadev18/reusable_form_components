import type { FormControl } from "@/types";

import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

const Input = (props: FormControl) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label id={props.id} label={props.label} />
      <input
        className="border border-gray-700 p-2"
        id={props.id}
        type={props.type ?? "text"}
        {...(props.inputProps ?? {})}
      />
      <ErrorMessage error={props.error} />
    </div>
  );
};

export default Input;
