import Input from "../Input";
import { InputProps } from "../Input/Input";

type FormControlProps = InputProps & {
  control: "input" | "textarea" | "select" | "radio" | "checkbox" | "date";
};

// decides what field to render based on the control prop
const FormController = ({ control, ...rest }: FormControlProps) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
    case "select":
    case "radio":
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormController;
