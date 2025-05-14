import axios from "axios";
import { Todo } from "../types";
import { getAuthHeader } from "../utils";
import { TodoEndpoints } from "../endpoints";

interface TodoResponse {
  message: string;
  data: Todo[];
}

interface CreateTodoRequest {
  title: string;
}

interface CreateTodoResponse {
  message: string;
  data: Todo;
}

interface UpdateTodoRequest {
  isCompleted?: boolean;
  title?: string;
}

export const todoService = {
  async getTodos(): Promise<TodoResponse> {
    const response = await axios.get<TodoResponse>(TodoEndpoints.getTodos, {
      headers: getAuthHeader(),
    });
    return response.data;
  },

  async createTodo(data: CreateTodoRequest): Promise<CreateTodoResponse> {
    const response = await axios.post<CreateTodoResponse>(
      TodoEndpoints.createTodo,
      data,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  async updateTodo(
    id: string,
    data: UpdateTodoRequest
  ): Promise<CreateTodoResponse> {
    const response = await axios.patch<CreateTodoResponse>(
      TodoEndpoints.updateTodo(id),
      data,
      {
        headers: getAuthHeader(),
      }
    );
    return response.data;
  },

  async deleteTodo(id: string): Promise<void> {
    await axios.delete(TodoEndpoints.deleteTodo(id), {
      headers: getAuthHeader(),
    });
  },
};
