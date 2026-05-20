import axiosClient from "../../../lib/axiosClient";
import type {
  LoginRequest,
  RegisterRequest,
  RefreshTokenRequest,
  RevokeRefreshTokenRequest,
} from "../types/auth.types";

export const authApi = {
  login: (data: LoginRequest) => {
    return axiosClient.post("/Auth/login", data);
  },

  register: (data: RegisterRequest) => {
    return axiosClient.post("/Auth/register",data)
  },
  refreshToken: (data: RefreshTokenRequest) => {
    return axiosClient.post("/Auth/refresh-token",data)
  },
  revokeRefreshToken: (data: RevokeRefreshTokenRequest) => {
    return axiosClient.post("/Auth/revoke-refresh-token",data)
  }
};
