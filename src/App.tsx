import { ChangeEvent, SyntheticEvent } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormControl from "./components/FormBuilder/FormControl";
import { TestFormSchema, TestValues } from "./schema";
import { PETS, COLORS, NUMBER_OF_LEGS, SUPER_POWERS } from "./constants";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<TestValues>({
    resolver: zodResolver(TestFormSchema),
    defaultValues: {
      email: "test@test.com",
    },
  });

  const onSubmitReady = (data: TestValues) => {
    console.log(data);
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl uppercase mb-10">BUILD YOUR PET 🐕 🔥🐉</h2>
      <form
        onSubmit={handleSubmit(onSubmitReady)}
        className="flex flex-col gap-5"
      >
        <FormControl
          inputProps={{ ...register("email"), name: "email" }}
          control="input"
          type="email"
          id="email"
          label="Email address for pet offer"
          error={errors.email?.message}
        />

        <hr />

        <FormControl
          inputProps={{ ...register("date"), name: "date" }}
          control="input"
          type="date"
          id="date"
          label="Date"
          error={errors.date?.message}
        />

        <FormControl
          inputProps={{ ...register("name"), name: "name" }}
          control="input"
          type="text"
          id="name"
          label="Pet Name"
          error={errors.name?.message}
        />

        <FormControl
          control="textarea"
          inputProps={{ ...register("description"), name: "description" }}
          id="description"
          label="Description"
          error={errors.description?.message}
        />

        <FormControl
          inputProps={{
            ...register("pet"),
            name: "pet",
          }}
          control="select"
          reactHookFormControl={control}
          id="animal"
          label="Choose species (single select)"
          options={PETS}
          error={errors.pet?.message}
        />

        <FormControl
          inputProps={{ ...register("color"), name: "color" }}
          control="select"
          reactHookFormControl={control}
          id="color"
          label="Choose a color (multi select)"
          options={COLORS}
          isMultiSelect
          error={errors.color?.message}
        />

        <FormControl
          inputProps={register("numberOfLegs")}
          control="radio"
          id="numberOfLegs"
          label="Choose number of legs"
          options={NUMBER_OF_LEGS}
          error={errors.numberOfLegs?.message}
        />

        <FormControl
          inputProps={register("superpowers")}
          control="checkbox"
          id="superpowers"
          label="Choose superpowers"
          options={SUPER_POWERS}
          error={errors.superpowers?.message}
        />

        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white p-3 rounded-md w-40 my-5"
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
