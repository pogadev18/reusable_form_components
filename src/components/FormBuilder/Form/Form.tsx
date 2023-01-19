import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormProps = {
  schema: any;
  onSubmit: (data: any) => unknown;
  children: React.ReactElement;
  defaultValues?: Record<string, any>;
};

const Form = ({ defaultValues, schema, onSubmit, children }: FormProps) => {
  const { handleSubmit, register } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map((child) => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name,
                  },
                })
              : child;
          })
        : children}
    </form>
  );
};

export default Form;
