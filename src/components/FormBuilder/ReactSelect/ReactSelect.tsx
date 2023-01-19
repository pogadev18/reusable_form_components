import { Controller } from "react-hook-form";
import Select from "react-select";

import type { FormControl } from "@/types";

import ErrorMessage from "../ErrorMessage";
import Label from "../Label";

const ReactSelect = (props: FormControl) => {
  return (
    <div className="form-control w-full max-w-xs">
      <Label id={props.id} label={props.label} />
      <Controller
        control={control}
        render={({ field: { onChange, value, name, ref } }) => {
          const currentSelection = props.selectOptions?.find(
            (c) => c.value === value
          );

          const handleSelectChange = (
            selectedOption: { value: string; label: string } | null
          ) => {
            onChange(selectedOption?.value);
          };

          return (
            <Select
              value={currentSelection}
              options={props.selectOptions}
              onChange={handleSelectChange}
            />
          );
        }}
        name={props.inputProps?.name ?? "select"}
      />
      <ErrorMessage error={props.error} />
    </div>
  );
};

export default ReactSelect;
