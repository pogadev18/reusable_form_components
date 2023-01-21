import { useTsController, useDescription } from "@ts-react/form";

const CheckboxField = () => {
  const {
    field: { onChange, value },
  } = useTsController<boolean>();
  const { label } = useDescription();

  return (
    <label className="block">
      {label}
      <input
        onChange={(e) => onChange(e.target.checked)}
        checked={!!value}
        type="checkbox"
      />
    </label>
  );
};

export default CheckboxField;
