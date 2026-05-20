// 1. Gom nhóm key liên quan đến Storage (localStorage/sessionStorage) vào object để quản lý
export const STORAGE_KEY = 
{
    ACCESS_TOKEN: "accessToken",
    
    REFRESH_TOKEN: "refreshToken",
    
    USER_KEY: "user"
} as const; // as const để ép kiểu literal, giúp auto-complete tốt hơn khi sử dụng STORAGE_KEY.ACCESS_TOKEN thay vì phải nhớ chính xác chuỗi "accessToken"

/*
 * Mẹo TypeScript (Tips):
 * Dùng `as const` ở cuối Object sẽ báo cho TypeScript biết rằng: 
 * "Tất cả các giá trị trong Object này là hằng số CỐ ĐỊNH, chỉ được phép ĐỌC (Readonly), 
 * tuyệt đối không được gán lại giá trị khác trong lúc chạy code".
 * Điều này giúp project của em an toàn hơn rất nhiều.
 */

