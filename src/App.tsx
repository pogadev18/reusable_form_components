import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormController from "./components/FormBuilder/FormController";

import { SignInFormSchema, SignInValues } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInValues>({
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmitReady = (data: SignInValues) => {
    console.log(data);
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmitReady)}>
        <FormController
          control="input"
          type="email"
          id="email"
          label="Email"
          inputProps={register("email")}
          error={errors.email?.message}
        />

        <FormController
          inputProps={register("name")}
          control="input"
          type="text"
          id="name"
          label="Name"
          error={errors.name?.message}
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
