export interface ApiResponse<T>{
    status: number;
    message: string;
    data: T
}

export interface AuthResponse{
    accessToken: string;
    expiredAtUtc: string;
    userId: string;
    fullName: string;
    email: string;
    roleName: string;
}


export interface LoginRequest{
    email:string;
    password: string;
}

export interface RegisterRequest{
    fullName: string;
    email: string;
    password: string;
    phoneNumber?: string ;
    address?: string;
}
