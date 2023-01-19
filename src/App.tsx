// import Form from "@/components/FormBuilder/Form";
// import FormControl from "@/components/FormBuilder/FormController";

import Form from "./components/FormBuilder/Form";
import FormController from "./components/FormBuilder/FormController";

import { SignInFormSchema, SignInValues } from "./schema";

function App() {
  const handleSubmit = (data: SignInValues) => {
    console.log(data);
  };

  return (
    <div className="p-10">
      <Form
        defaultValues={{ email: "" }}
        schema={SignInFormSchema}
        onSubmit={handleSubmit}
      >
        <>
          <FormController
            control="input"
            type="email"
            id="email"
            label="Email"
            inputProps={register("email")}
          />

          <FormController
            inputProps={register("name")}
            control="input"
            type="text"
            id="name"
            label="Name"
          />
          <button
            type="submit"
            className="bg-purple-500 text-white p-3 rounded-md w-40 my-5"
          >
            submit
          </button>
        </>
      </Form>
    </div>
  );
}

export default App;
