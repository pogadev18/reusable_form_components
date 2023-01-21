import { useTsController, useDescription } from "@ts-react/form";

interface TextFieldProps {
  type?: string;
}

const TextField = (props: TextFieldProps) => {
  const { field, error } = useTsController<string>();
  const { label, placeholder } = useDescription();

  return (
    <>
      <label className="label my-2 block">{label}</label>
      <input
        type={props.type ?? "text"}
        placeholder={placeholder}
        className="border border-gray-700 p-2"
        value={field.value ? field.value : ""} // conditional to prevent "uncontrolled to controlled" react warning
        onChange={(e) => {
          field.onChange(e.target.value);
        }}
      />
      {error?.errorMessage && <span>{error?.errorMessage}</span>}
    </>
  );
};

export default TextField;
