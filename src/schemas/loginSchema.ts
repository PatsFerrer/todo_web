import { z } from "zod";
import { loginPassword, loginUsername } from "./fields";

export const loginSchema = z.object({
  username: loginUsername,
  password: loginPassword,
});

export type LoginFormData = z.infer<typeof loginSchema>;
