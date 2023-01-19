import { InputPropsType } from "@/types";

export type InputProps = {
  id: string;
  label: string;
  error?: string;
  inputProps?: InputPropsType;
  type: string;
};

const Input = (props: InputProps) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label htmlFor={props.id} className="label block">
        <span className="label-text">{props.label}</span>
      </label>
      <input
        className="border border-gray-700 p-2"
        id={props.id}
        type={props.type ?? "text"}
        {...(props.inputProps ?? {})}
      />
      {props.error ? (
        <span className="label-text text-error">{props.error}</span>
      ) : null}
    </div>
  );
};

export default Input;
