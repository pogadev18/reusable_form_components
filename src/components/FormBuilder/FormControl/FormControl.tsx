import type { FormControl } from "@/types";

import Input from "../Input";
import Textarea from "../Textarea";
// import Select from "../NativeSelect"; // if needed is ready to be used
import SelectInput from "../Select";

type FormControlProps = FormControl & {
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
};

// decides what field to render based on the control prop
const FormControl = ({ control, ...rest }: FormControlProps) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <SelectInput {...rest} />;
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormControl;
