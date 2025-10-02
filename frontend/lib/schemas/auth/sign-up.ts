import z from "zod";

export const signUpSchema = z
  .object({
    name: z.string().min(2, { error: "Name is required" }),
    email: z.email().min(1, { error: "Email is required" }),
    password: z
      .string()
      .min(8, { error: "Password has to be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { error: "Password has to be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
