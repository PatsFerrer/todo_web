import axios from "axios";
import { UserEndpoints } from "@/lib/endpoints";

interface CreateUserRequest {
  username: string;
  password: string;
}

interface CreateUserResponse {
  id: string;
  username: string;
}

export const userService = {
  async createUser(data: CreateUserRequest): Promise<CreateUserResponse> {
    const response = await axios.post<CreateUserResponse>(
      UserEndpoints.createUser,
      data
    );
    return response.data;
  },
};
