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
  createUser: `${API_URL}/${VERSION}/user`,
};

export const TodoEndpoints = {
  getTodos: `${API_URL}/${VERSION}/todo`,
  createTodo: `${API_URL}/${VERSION}/todo`,
  updateTodo: (id: string) => `${API_URL}/${VERSION}/todo/status/${id}`,
  deleteTodo: (id: string) => `${API_URL}/${VERSION}/todo/${id}`,
};
