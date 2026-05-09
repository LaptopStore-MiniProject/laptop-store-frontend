import { Navigate, Outlet } from "react-router-dom";
import { STORAGE_KEY } from "../../constants";

export default function ProtectedRoute() 
{
    // Kiểm tra xem trong LocalStorage có Token hay không
    const token = localStorage.getItem(STORAGE_KEY.ACCESS_TOKEN);
    // Nếu KHÔNG có token -> Chưa đăng nhập hoặc token đã bị xóa
    if (!token) {
        // Navigate của React Router giúp chuyển hướng mượt mà (không bị chớp trang như window.location)
        // Thuộc tính replace = true giúp ghi đè lịch sử duyệt web, user bấm nút Back sẽ không quay lại trang cấm này được nữa.
        return <Navigate to="/login" replace />;
    }
    // Nếu CÓ token -> Cho phép đi qua thẻ Outlet để vào render các trang con (Giỏ hàng, Đơn hàng...)
    return <Outlet />;
}