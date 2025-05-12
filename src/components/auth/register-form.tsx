"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { MESSAGES, ROUTES } from "@/constants";
import { userService } from "@/lib/services/user-service";
import {
  RegisterFormData,
  registerUserSchema,
} from "@/schemas/registerUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: RegisterFormData) {
    setIsLoading(true);
    try {
      await userService.createUser({
        username: data.username,
        password: data.password,
      });
      toast.success(MESSAGES.REGISTER_SUCCESS, {
        description: MESSAGES.REGISTER_SUCCESS_DESCRIPTION,
      });
      router.push(ROUTES.LOGIN);
    } catch (error) {
      toast.error(MESSAGES.REGISTER_ERROR, {
        description: MESSAGES.REGISTER_ERROR_DESCRIPTION,
      });
      console.error("error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmar Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader className="animate-spin w-4 h-4" />
          ) : (
            "Registrar"
          )}
        </Button>
        <div className="text-center text-sm">
          Já tem uma conta?&nbsp;
          <Link
            href={ROUTES.LOGIN}
            className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300"
          >
            Faça login
          </Link>
        </div>
      </form>
    </Form>
  );
}
