import { PASSWORD_REGEX } from "@/constants";
import { z } from "zod";

export const registerUsername = z
  .string()
  .min(4, { message: "Username deve ter no mínimo 4 caracteres" });

export const registerPassword = z
  .string()
  .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
  .regex(PASSWORD_REGEX, {
    message:
      "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais",
  });

export const loginUsername = z
  .string()
  .min(1, { message: "Username é obrigatório" });

export const loginPassword = z.string().min(1, "Senha é obrigatória");
