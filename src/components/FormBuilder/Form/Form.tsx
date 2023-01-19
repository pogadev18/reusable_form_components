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
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const handleSubmit = methods.handleSubmit;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
};

export default Form;
