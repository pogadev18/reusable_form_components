import { TestForm } from "./components/TestForm";
import { TestFormSchema, TestFormValues } from "./schema";

function App() {
  const onSubmit = (data: TestFormValues) => console.log(data);

  return (
    <div className="">
      <h1>Hello</h1>
      <TestForm
        schema={TestFormSchema}
        onSubmit={onSubmit}
        renderAfter={() => <button type="submit">Submit</button>}
        props={{
          password: { type: "password" },
        }}
      />
    </div>
  );
}

export default App;
