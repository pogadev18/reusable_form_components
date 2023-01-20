import * as z from "zod";

export const TestFormSchema = z.object({
  email: z.string().email(),
  date: z.string().min(1, { message: "Select date" }),
  name: z
    .string()
    .min(3, { message: "Your name is too short (3 letters minimum)" }),
  description: z
    .string()
    .min(10, { message: "Your description is too short (10 words minimum)" }),
  pet: z.string().min(1, { message: "Select 1 pet" }),
  // TODO: investigate why error messages are not displayed correctly
  color: z.string().array().min(2, { message: "Select at least 2 colors" }),
  numberOfLegs: z.string().min(1, { message: "Selcet set of legs" }),
  superpowers: z
    .string()
    .array()
    .min(2, { message: "Select at least 2 superpowers" }),
});

export type TestValues = z.infer<typeof TestFormSchema>;
