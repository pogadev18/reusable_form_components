import type { FormControl } from "@/types";

import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

const Checkbox = (props: FormControl) => {
  return (
    <div className="form-control w-full max-w-xs">
      <span className="label-text">{props.label}</span>
      {props.options?.map((option) => (
        <div className="flex gap-2" key={option.value}>
          <input
            {...(props.inputProps ?? {})}
            value={option.value}
            id={option.label}
            type="checkbox"
          />
          <Label id={option.label} label={option.label} />
        </div>
      ))}
      <ErrorMessage error={props.error} />
    </div>
  );
};

export default Checkbox;
