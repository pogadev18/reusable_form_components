import * as z from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
});

export type SignInValues = z.infer<typeof SignInFormSchema>;
