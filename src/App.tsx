import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormControl from "./components/FormBuilder/FormControl";
import { PetBuilderFormSchema, PetBuilderValues } from "./schema";
import { PETS, COLORS, NUMBER_OF_LEGS, SUPER_POWERS } from "./constants";

// TODO: reiterate entrie code and refactor where needed
// TODO: add some (basic) styling

function App() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<PetBuilderValues>({
    resolver: zodResolver(PetBuilderFormSchema),
    defaultValues: {
      // can add more default values here
      email: "test@test.com",
    },
  });

  const onSubmitReady = (data: PetBuilderValues) => {
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
        <section className="flex gap-4 items-center mb-5">
          <div>
            <FormControl
              inputProps={{ ...register("date"), name: "date" }}
              control="input"
              type="date"
              id="date"
              label="Date"
              error={errors.date?.message}
            />
          </div>

          <div>
            <FormControl
              inputProps={{ ...register("name"), name: "name" }}
              control="input"
              type="text"
              id="name"
              label="Pet Name"
              error={errors.name?.message}
            />
          </div>
        </section>

        <section className="flex gap-4 items-center mb-5">
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
        </section>

        <section className="flex gap-4 items-center">
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
        </section>

        <FormControl
          control="textarea"
          inputProps={{ ...register("description"), name: "description" }}
          id="description"
          label="Description"
          error={errors.description?.message}
        />

        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-purple-500 hover:bg-purple-700 text-white p-3 rounded-md w-40 my-5 disabled:bg-gray-500"
        >
          {isSubmitting ? "creating your pet" : "submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
