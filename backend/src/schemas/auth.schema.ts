import { z } from 'zod';

export const registerSchema = z
  .object({
    email: z.email(),
    name: z.string().min(2).max(50),
    password: z
      .string()
      .min(8)
      .regex(/^(?=.*[A-Za-z])(?=.*\d).+$/, 'Incluye letras y números'),
    confirmPassword: z.string().min(8),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterDto = z.infer<typeof registerSchema>;
