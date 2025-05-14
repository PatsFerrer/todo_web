"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MESSAGES } from "@/constants";
import { todoService } from "@/lib/services/todo-service";
import { TodoFormData, todoSchema } from "@/schemas/todoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function TodoHeader() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<TodoFormData>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(data: TodoFormData) {
    setIsLoading(true);
    try {
      await todoService.createTodo(data);
      toast.success(MESSAGES.CREATE_TODO_SUCCESS, {
        description: MESSAGES.CREATE_TODO_SUCCESS_DESCRIPTION,
      });
      form.reset();
      // Refresh the page to get the updated list
      window.location.reload();
    } catch (error) {
      toast.error(MESSAGES.CREATE_TODO_ERROR, {
        description: MESSAGES.CREATE_TODO_ERROR_DESCRIPTION,
      });
      console.error("error", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar nova tarefa</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center gap-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="O que precisa ser feito?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 cursor-pointer"
              disabled={isLoading}
            >
              <Plus className="mr-2 h-4 w-4" />
              Adicionar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
