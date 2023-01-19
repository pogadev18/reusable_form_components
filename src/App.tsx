import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormControl from "./components/FormBuilder/FormControl";

import { SignInFormSchema, SignInValues } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: "test@test.com",
    },
  });

  const onSubmitReady = (data: SignInValues) => {
    console.log(data);
  };

  return (
    <div className="p-10">
      <form
        onSubmit={handleSubmit(onSubmitReady)}
        className="flex flex-col gap-5"
      >
        <FormControl
          inputProps={register("email")}
          // inputProps={(register("email"), { disabled: true })} -> with multiple input props
          control="input"
          type="email"
          id="email"
          label="Email"
          error={errors.email?.message}
        />

        <FormControl
          inputProps={register("name")}
          control="input"
          type="text"
          id="name"
          label="Name"
          error={errors.name?.message}
        />

        <FormControl
          inputProps={register("description")}
          control="textarea"
          id="description"
          label="Description"
          error={errors.description?.message}
        />
        <button
          type="submit"
          className="bg-purple-500 text-white p-3 rounded-md w-40 my-5"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
