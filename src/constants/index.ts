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
  LOGIN_SUCCESS: "Login successful",
  LOGIN_SUCCESS_DESCRIPTION: "Welcome back to TaskFlow!",
  LOGIN_ERROR: "Login failed",
  LOGIN_ERROR_DESCRIPTION:
    "Please check your username and password and try again.",

  REGISTER_SUCCESS: "Registration successful",
  REGISTER_SUCCESS_DESCRIPTION: "Your account has been created. Please login.",
  REGISTER_ERROR: "Registration failed",
  REGISTER_ERROR_DESCRIPTION:
    "This username may already be taken or there was a server error.",

  LOGOUT_SUCCESS: "Logged out",
  LOGOUT_SUCCESS_DESCRIPTION: "You have been successfully logged out.",

  // Todo messages
  FETCH_TODOS_ERROR: "Failed to fetch tasks",
  FETCH_TODOS_ERROR_DESCRIPTION:
    "There was an error loading your tasks. Please try again.",

  CREATE_TODO_SUCCESS: "Task created",
  CREATE_TODO_SUCCESS_DESCRIPTION: "Your new task has been added successfully.",
  CREATE_TODO_ERROR: "Failed to create task",
  CREATE_TODO_ERROR_DESCRIPTION:
    "There was an error creating your task. Please try again.",

  UPDATE_TODO_SUCCESS: "Task updated",
  UPDATE_TODO_SUCCESS_DESCRIPTION: "Your task has been updated successfully.",
  UPDATE_TODO_ERROR: "Failed to update task",
  UPDATE_TODO_ERROR_DESCRIPTION:
    "There was an error updating your task. Please try again.",

  DELETE_TODO_SUCCESS: "Task deleted",
  DELETE_TODO_SUCCESS_DESCRIPTION: "Your task has been deleted successfully.",
  DELETE_TODO_ERROR: "Failed to delete task",
  DELETE_TODO_ERROR_DESCRIPTION:
    "There was an error deleting your task. Please try again.",
};

// Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
