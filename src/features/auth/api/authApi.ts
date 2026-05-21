import axiosClient from "../../../lib/axiosClient";
import type {
  LoginRequest,
  RegisterRequest,
} from "../types/auth.types";

export const authApi = {
  login: (data: LoginRequest) => {
    return axiosClient.post("/Auth/login", data);
  },

  register: (data: RegisterRequest) => {
    return axiosClient.post("/Auth/register",data)
  },
  refreshToken: () => {
    return axiosClient.post("/Auth/refresh-token")
  },
  logout: () => {
    return axiosClient.post("/Auth/logout")
  } 
};
