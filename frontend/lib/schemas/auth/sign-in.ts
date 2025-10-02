import z from "zod";

export const signInSchema = z.object({
  email: z.email().min(1, { error: "Email is required" }),
  password: z
    .string()
    .min(8, { error: "Password has to be at least 8 characters" }),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
