import { Controller } from "react-hook-form";
import Select from "react-select";

import type { FormControl } from "@/types";

import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

type Option = { value: string; label: string };

const SelectInput = (props: FormControl) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label id={props.id} label={props.label} />
      <Controller
        control={props.reactHookFormControl}
        render={({ field: { onChange, value } }) => {
          const handleMultiOptions = (option: Option[] | null) =>
            onChange(option?.map((option) => option.value));

          const handleSingleOption = (option: Option | null) =>
            onChange(option?.value);

          return (
            <Select
              id={props.id}
              isMulti={props.isMultiSelect ?? false}
              value={props.options?.find((option) => option.value === value)}
              options={props.options}
              // @ts-ignore -> typescript is yelling here but it's working (couldn't find a solution yet, TODO: fix this)
              onChange={
                props.isMultiSelect ? handleMultiOptions : handleSingleOption
              }
            />
          );
        }}
        name={props.inputProps?.name ?? "select"}
      />
      <ErrorMessage error={props.error} />
    </div>
  );
};

export default SelectInput;
