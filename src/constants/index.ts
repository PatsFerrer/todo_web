export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://localhost:7264";

export const TOKEN_KEY = "taskflow_token";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  TODOS: "/todos",
};

export const MESSAGES = {
  // Auth messages
  LOGIN_SUCCESS: "Login bem-sucedido",
  LOGIN_SUCCESS_DESCRIPTION: "Bem-vindo de volta ao TaskFlow!",
  LOGIN_ERROR: "Falha no login",
  LOGIN_ERROR_DESCRIPTION:
    "Verifique seu nome de usuário e senha e tente novamente.",

  REGISTER_SUCCESS: "Registro realizado com sucesso",
  REGISTER_SUCCESS_DESCRIPTION: "Sua conta foi criada. Por favor, faça login.",
  REGISTER_ERROR: "Falha no registro",
  REGISTER_ERROR_DESCRIPTION:
    "Este nome de usuário pode já ter sido usado ou pode ter ocorrido um erro no servidor.",

  LOGOUT_SUCCESS: "Desconectado",
  LOGOUT_SUCCESS_DESCRIPTION: "Você foi desconectado com sucesso.",

  // Todo messages
  FETCH_TODOS_ERROR: "Falha ao buscar tarefas",
  FETCH_TODOS_ERROR_DESCRIPTION:
    "Ocorreu um erro ao carregar suas tarefas. Tente novamente.",

  CREATE_TODO_SUCCESS: "Tarefa criada",
  CREATE_TODO_SUCCESS_DESCRIPTION:
    "Sua nova tarefa foi adicionada com sucesso.",
  CREATE_TODO_ERROR: "Falha ao criar tarefa",
  CREATE_TODO_ERROR_DESCRIPTION:
    "Ocorreu um erro ao criar sua tarefa. Tente novamente.",

  UPDATE_TODO_SUCCESS: "Tarefa atualizada",
  UPDATE_TODO_SUCCESS_DESCRIPTION: "Sua tarefa foi atualizada com sucesso.",
  UPDATE_TODO_ERROR: "Falha ao atualizar a tarefa",
  UPDATE_TODO_ERROR_DESCRIPTION:
    "Ocorreu um erro ao atualizar sua tarefa. Tente novamente.",

  DELETE_TODO_SUCCESS: "Tarefa excluída",
  DELETE_TODO_SUCCESS_DESCRIPTION: "Sua tarefa foi excluída com sucesso.",
  DELETE_TODO_ERROR: "Falha ao excluir tarefa",
  DELETE_TODO_ERROR_DESCRIPTION:
    "Ocorreu um erro ao excluir sua tarefa. Tente novamente.",
};

export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
