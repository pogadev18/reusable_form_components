import { useTsController, useDescription } from "@ts-react/form";

const NumberField = ({ req }: { req: number }) => {
  const { label, placeholder } = useDescription();
  const {
    field: { onChange, value },
    error,
  } = useTsController<number>();
  return (
    <>
      <label className="label my-2 block">{label}</label>
      <span>
        <span>{`req is ${req}`}</span>
        <input
          placeholder={placeholder}
          value={value !== undefined ? value + "" : ""}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (isNaN(value)) onChange(undefined);
            else onChange(value);
          }}
        />
        {error && error.errorMessage}
      </span>
    </>
  );
};

export default NumberField;
