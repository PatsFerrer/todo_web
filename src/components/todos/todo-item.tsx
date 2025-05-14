"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { Todo } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Trash } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string, isCompleted: boolean) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggleComplete, onDelete }: TodoItemProps) {
  const formattedDate =
    todo.createdAt && !isNaN(new Date(todo.createdAt).getTime())
      ? formatDistanceToNow(new Date(todo.createdAt), {
          locale: ptBR,
          addSuffix: true,
        })
      : "data inválida";

  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center gap-3">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.isCompleted}
          onCheckedChange={() => onToggleComplete(todo.id, todo.isCompleted)}
          className="cursor-pointer"
        />
        <div className="space-y-1">
          <label
            htmlFor={`todo-${todo.id}`}
            className={`font-medium ${
              todo.isCompleted ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </label>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Criado {formattedDate || "data inválida"}
          </p>
        </div>
      </div>
      <Button
        className="cursor-pointer"
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
}
