import axios from "axios";
import { TOKEN_KEY } from "@/constants";
import { AuthEndpoints } from "../endpoints";

interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const authService = {
  async login(data: LoginRequest): Promise<void> {
    const response = await axios.post<LoginResponse>(AuthEndpoints.login, data);
    localStorage.setItem(TOKEN_KEY, response.data.token);
  },
};
