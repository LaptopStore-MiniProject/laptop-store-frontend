export interface ApiResponse<T>{
    status: number;
    message: string;
    data: T
}

export interface AuthResponse{
    accessToken: string;
    expiredAtUtc: string;

    refreshToken: string;
    refreshTokenExpiredAtUtc: string;

    userId: string;
    fullName: string;
    email: string;
    roleName: string;
}


export interface LoginRequest{
    email:string;
    password: string;
}

export interface RefreshTokenRequest{
    accessToken: string;
    refreshToken: string;
}

export interface RegisterRequest{
    fullName: string;
    email: string;
    password: string;
    phoneNumber?: string ;
    address?: string;
}


export interface RevokeRefreshTokenRequest{
    refreshToken: string;
}
