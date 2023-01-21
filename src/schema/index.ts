import * as z from "zod";

export const TestFormSchema = z.object({
  email: z
    .string()
    .email("Enter a real email.")
    .describe("Email // test@test.com"), // renders TextField
  password: z.string().describe("Password // ***********"), //
  address: z.string().describe("Address // Some Citiy, USA"),
  isOver18: z.boolean().describe("I am over 18"), // renders CheckBoxField
});

export type TestFormValues = z.infer<typeof TestFormSchema>;
