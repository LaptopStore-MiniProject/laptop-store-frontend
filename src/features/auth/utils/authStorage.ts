import type { AuthResponse } from "../types/auth.types";
import { STORAGE_KEY } from "../../../constants/index"

export function saveAuth(auth: AuthResponse) {
    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN,auth.accessToken);

    localStorage.setItem(
        STORAGE_KEY.USER_KEY,
        JSON.stringify({
            userId: auth.userId,
            fullName: auth.fullName,
            email: auth.email,
            roleName: auth.roleName,
            expiredAtUtc: auth.expiredAtUtc,
        })
    );
}

export function getAccessToken(){
    return localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN)
}

export function getCurrentUser(){
    const rawUser = localStorage.getItem(STORAGE_KEY.USER_KEY)

    if(!rawUser) return null;

    try{
        return JSON.parse(rawUser)
    }catch{
        return null;
    }
}

export function clearAuth(){
    localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN)
    localStorage.removeItem(STORAGE_KEY.USER_KEY)
}

