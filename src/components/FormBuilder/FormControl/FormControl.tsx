import type { FormControl } from "@/types";

import Input from "../Input";
import Textarea from "../Textarea";
import Select from "../Select";
import ReactSelect from "../ReactSelect";

type FormControlProps = FormControl & {
  control:
    | "input"
    | "textarea"
    | "select"
    | "radio"
    | "checkbox"
    | "date"
    | "3rdPartySelect";
};

// decides what field to render based on the control prop
const FormControl = ({ control, ...rest }: FormControlProps) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "3rdPartySelect":
      return <ReactSelect {...rest} />;
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormControl;
