import { z } from "zod";
import { registerPassword, registerUsername } from "./fields";

export const registerUserSchema = z
  .object({
    username: registerUsername,
    password: registerPassword,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerUserSchema>;
