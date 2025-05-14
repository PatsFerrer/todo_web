import { z } from "zod";

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "O título da tarefa é obrigatório" })
    .max(100, {
      message: "O título da tarefa deve ter menos de 100 caracteres",
    }),
});

export type TodoFormData = z.infer<typeof todoSchema>;
