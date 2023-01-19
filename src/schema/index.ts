import * as z from "zod";

export const SignInFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  description: z.string().min(10),
  pet: z.string().min(1),
});

export type SignInValues = z.infer<typeof SignInFormSchema>;
