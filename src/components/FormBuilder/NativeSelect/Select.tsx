import type { FormControl } from "@/types";

import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

const Select = (props: FormControl) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label id={props.id} label={props.label} />
      <select
        className="border w-full border-gray-700 p-2"
        {...(props.inputProps ?? {})}
        id={props.id}
      >
        <option value="">Choose...</option>
        {props.selectOptions?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage error={props.error} />
    </div>
  );
};

export default Select;
