import { z } from "zod";
import { loginPassword, usernameField } from "./fields";

export const loginSchema = z.object({
  username: usernameField,
  password: loginPassword,
});

export type LoginFormData = z.infer<typeof loginSchema>;
