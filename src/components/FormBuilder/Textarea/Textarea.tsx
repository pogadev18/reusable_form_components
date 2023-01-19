import type { FormControl } from "@/types";

import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

const Textarea = (props: FormControl) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label id={props.id} label={props.label} />
      <textarea
        className="border border-gray-700 p-2"
        rows={10} // make this as props if needed
        cols={50} // make this as props if needed
        id={props.id}
        {...(props.inputProps ?? {})}
      />
      <ErrorMessage error={props.error} />
    </div>
  );
};

export default Textarea;
