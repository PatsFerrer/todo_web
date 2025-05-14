"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { todoService } from "@/lib/services/todo-service";
import type { Todo } from "@/lib/types";
import { MESSAGES } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { TodoItem } from "./todo-item";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await todoService.getTodos();
      setTodos(response.data);
    } catch (error) {
      toast.error(MESSAGES.FETCH_TODOS_ERROR, {
        description: MESSAGES.FETCH_TODOS_ERROR_DESCRIPTION,
      });
      console.error("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleComplete = async (id: string, isCompleted: boolean) => {
    try {
      await todoService.updateTodo(id, { isCompleted: !isCompleted });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
        )
      );
      toast.success(MESSAGES.UPDATE_TODO_SUCCESS, {
        description: MESSAGES.UPDATE_TODO_SUCCESS_DESCRIPTION,
      });
    } catch (error) {
      toast.error(MESSAGES.UPDATE_TODO_ERROR, {
        description: MESSAGES.UPDATE_TODO_ERROR_DESCRIPTION,
      });
      console.error("error", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await todoService.deleteTodo(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      toast.success(MESSAGES.DELETE_TODO_SUCCESS, {
        description: MESSAGES.DELETE_TODO_SUCCESS_DESCRIPTION,
      });
    } catch (error) {
      toast.error(MESSAGES.DELETE_TODO_ERROR, {
        description: MESSAGES.DELETE_TODO_ERROR_DESCRIPTION,
      });
      console.error("error", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <Card>
      <CardContent className="p-6">
        {todos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <h3 className="text-lg font-medium">Nenhuma tarefa ainda</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Crie sua primeira tarefa para começar
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTodo}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
