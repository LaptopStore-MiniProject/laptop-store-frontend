import axios from "axios";
import {env} from "../config/env";
import { STORAGE_KEY } from "../constants";


// ==============================================================================
// 1. CÁC BIẾN STATE & HÀM HỖ TRỢ CHO CƠ CHẾ REFRESH TOKEN (Đưa lên đầu)
// ==============================================================================
// Biến cờ: Đánh dấu xem có đang trong quá trình đi xin token mới hay không?
let isRefreshing = false;

interface QueueItem 
{
    resolve: (value: string | PromiseLike<string>) => void;
    reject: (reason?: any) => void;
}

// Hàng đợi: Chứa các request bị lỗi 401 đến sau, đang phải đứng chờ token mới
let failedQueue: QueueItem[] = [];
// Hàm này dùng để xử lý hàng đợi sau khi xin được token mới (hoặc xin thất bại)
const processQueue = (error: Error | null, token: string | null = null) => {
    failedQueue.forEach(prom => 
        {
            if(error)
            {
                prom.reject(error); // Xin thất bại -> Cho toàn bộ request đang chờ chết luôn
            }
            else
            {
                prom.resolve(token as string); // Xin thành công -> Phát token mới cho các request đang chờ
            }
        })
    failedQueue = []; // Xử lý xong thì reset hàng đợi
}


// ==============================================================================
// 2. KHỞI TẠO AXIOS CLIENT
// ==============================================================================

// 2. Tạo một instance bản sao của axios 
// + Giúp cấu hình mặc định (baseURL,headers) một lần sử dụng cho toàn app,
// thay vì phải cấu hình lại ở mỗi lần gọi API
const axiosClient = axios.create(
    {
        // Cấu hình baseURL mặc định cho tất cả request, giúp dễ dàng thay đổi endpoint API khi cần (vd: dev vs prod)
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            // Mặc định báo cho Backend (vd: ASP.NET Core) biết data gửi lên là định dạng JSON
            "Content-Type": "application/json",
        }
    }
);

// ==============================================================================
// 3. REQUEST INTERCEPTOR
// ==============================================================================

// 3. Request Interceptor: Chặn tất cả request trước khi gửi đi, để thêm token vào header Authorization nếu có
axiosClient.interceptors.request.use(
    (config) => {
        // Lấy token từ localStorage (nếu có)
        const token = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);
        if(token){
            // Đính kèm token vào header để Backend xác thực (ví dụ bằng JWT Middleware)
            console.log("[AxiosClient] : Adding Authorization header", token);
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("[AxiosClient] : Request Intercepted", config);
        return config;
    },
    (error) => {
        // [AxiosClient] : Log lỗi interceptor để dễ debug
        console.error("[AxiosClient] : Request Error", error);
        return Promise.reject(error);
    }
);

// ==============================================================================
// 4. RESPONSE INTERCEPTOR
// ==============================================================================

axiosClient.interceptors.response.use(
    (response) => 
        {
            // [AxiosClient] : Log response interceptor để dễ debug
            console.log("[AxiosClient] : Response Intercepted", response);
            return response.data; // Chỉ trả về data, giúp các component gọi API dễ dàng xử lý hơn mà không cần phải truy cập response.data mỗi lần
            // Mặc định là axios sẽ bọc cục JSON của backend vào thuộc tính data của nó, 
            // nếu chỉ trả về response thì các component sẽ phải truy cập response.data để lấy data thực VD:response.data.data,

        },
        async (error) => {

            // Lấy config gốc của request vừa bị lỗi
            const originalRequest = error.config;

            console.error("[AxiosClient] : Response Error", error?.response?.status);
            // Nếu lỗi 401 và request này chưa từng được retry (chống lặp vô hạn)
            if(error.response?.status === 401 && !originalRequest._retry)
                {

                // NẾU ĐANG CÓ NGƯỜI ĐI XIN TOKEN RỒI (Request thứ 2, 3... rơi vào đây)
                if (isRefreshing) {
                    // Trả về một Promise "treo" (đưa vào hàng đợi) để ép request này đứng đợi
                    return new Promise((resolve, reject) => 
                        {
                            failedQueue.push({ resolve, reject }); // Đưa hàm resolve/reject của request này vào hàng đợi
                        }).then(token => {
                            // Khi lấy được token mới, cập nhật lại header và gọi lại request ban đầu
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            console.log("[AxiosClient] : Token refreshed by another request, retrying original request...");
                            return axiosClient(originalRequest); // Gọi lại request ban đầu với token mới
                        })
                        .catch(err => {
                            console.error("[AxiosClient] : Failed to refresh token by another request", err);
                            return Promise.reject(err);
                        });
                }
                // NẾU ĐÂY LÀ REQUEST ĐẦU TIÊN BỊ 401
                originalRequest._retry = true;
                isRefreshing = true; // Bật cờ "Tôi đang đi xin token đây, mấy người đến sau đứng chờ đi!"

                try
                {
                    console.log("[AxiosClient] : Token expired, attempting to refresh...");
                    // 1. Lấy Refresh Token từ Storage (nhớ thêm key này vào constants)
                    const refreshToken = localStorage.getItem(STORAGE_KEY.REFRESH_TOKEN);
                    // 2. Gọi API (không qua axiosClient để tránh loop) xin token mới
                    const rs = await axios.post(`${env.apiUrl}/api/auth/refresh-token`,{token: refreshToken});
                    // 3. Lấy token mới từ response backend { status, message, data }
                    const newAccessToken = rs.data.data.accessToken;
                    // 4. Lưu lại vào Storage
                    localStorage.setItem(STORAGE_KEY.ACCESS_TOKEN, newAccessToken);

                    // [Quan trọng] Xử lý thành công: Mở khóa hàng đợi, phát token cho các request đang chờ
                    processQueue(null, newAccessToken); // Mở khóa hàng đợi, phát token mới cho các request đang chờ

                    // 5. Cập nhật header và gọi lại request ban đầu
                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    console.log("[AxiosClient] : Token refreshed successfully, retrying original request...");
                    return axiosClient(originalRequest); // Gọi lại request ban đầu với token mới
                }catch(_error)
                {
                    // Nếu nhận được lỗi 401 Unauthorized, có thể token đã hết hạn hoặc không hợp lệ
                    // Đã thử refresh nhưng thất bại (refresh token cũng chết)
                    console.error("[AxiosClient] : Refresh token expired or invalid");

                    // [Quan trọng] Xử lý thất bại: Báo lỗi cho toàn bộ request đang chờ
                    processQueue(_error as Error, null);

                    // Xử lý logout hoặc xóa token khỏi localStorage
                    localStorage.removeItem(STORAGE_KEY.ACCESS_TOKEN);
                    localStorage.removeItem(STORAGE_KEY.REFRESH_TOKEN);
                    // Có thể redirect về trang login hoặc hiển thị thông báo cho người dùng
                    window.location.href = "/login"; // Redirect về trang login sau khi logout
                    return Promise.reject(_error);
                }finally
                {
                    // Xin xong rồi (dù thành công hay thất bại) thì tắt cờ đi
                    isRefreshing = false;
                }
            }
            return Promise.reject(error);
        }
)


export default axiosClient;