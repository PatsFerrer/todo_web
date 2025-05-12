import { API_URL } from "@/constants";

const VERSION = "api";

// const endpoints = {
//   register: {
//     user: () => `${API_URL}/${VERSION}/auth/login`,
//   },
//   login: {
//     user: () => `/auth/login`,
//   },
//   groq: {
//     ask: () => `/message`,
//   },
// };

// export default endpoints;

// TODO: Alterar em breve para o modelo de cima
export const AuthEndpoints = {
  login: `${API_URL}/${VERSION}/auth/login`,
};

export const UserEndpoints = {
  createUser: `${API_URL}/users`,
};

export const TodoEndpoints = {
  getTodos: `${API_URL}/todos`,
  createTodo: `${API_URL}/todos`,
  updateTodo: (id: string) => `${API_URL}/todos/${id}`,
  deleteTodo: (id: string) => `${API_URL}/todos/${id}`,
};
