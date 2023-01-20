import type { FormControl } from "@/types";

import Input from "../Input";
import Textarea from "../Textarea";
// import DefaultSelect from "../DefaultSelect"; // if needed is ready to be used
import Select from "../Select";
import RadioButtons from "../RadioButtons";
import Checkbox from "../Checkbox";

type FormControlProps = FormControl & {
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
};

// TODO: build more components (i.e: file upload, 3rd parties)

// decides what field to render based on the control prop
const FormControl = ({ control, ...rest }: FormControlProps) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select": // 3rd party react-select
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    default:
      return null;
  }
};

export default FormControl;
