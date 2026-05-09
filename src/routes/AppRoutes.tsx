import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/products/ProductListPage";
import ProductDetailPage from "../pages/products/ProductDetailPage";
import ProtectedRoute from "../components/common/ProtectedRoute";
import NotFoundPage from "../pages/NotFoundPage";
// import LoginPage from "../pages/LoginPage";

export const router = createBrowserRouter([
    {
        // 1. ROUTE: cha
        path: "/",
        element: <MainLayout />,

        errorElement: <NotFoundPage />, // [THÊM DÒNG NÀY Ở ĐÂY] - Bắt mọi lỗi ở tầng Layout, bao gồm cả lỗi 404. Nếu có lỗi nào xảy ra trong các Route con, nó sẽ nhảy vào đây.
        // Các Route con nằm trong 'children' sẽ được render thay thế vào vị trí thẻ <Outlet />
        children: [
            {
                // 'index: true' nghĩa là đường dẫn gốc (/). Khi vừa vào web, nó sẽ nạp HomePage.
                index: true, 
                element: <HomePage />,
            },
            {
                path: "products",
                element: <ProductListPage />,
            },
            {
                // 2. DYNAMIC ROUTE (Đường dẫn động)
                // Dấu hai chấm ':id' đại diện cho một tham số thay đổi (ví dụ: /products/1, /products/2).
                // Vào trong ProductDetailPage, em sẽ dùng hook useParams() để lấy số 1, 2 này ra gọi API.
                path: "products/:id",
                element: <ProductDetailPage />,
            },

            {
                element: <ProtectedRoute />, 
                children: [
                // Chỉ khi có Token mới lọt được vào đây
                { path: "cart", element: <div>Trang giỏ hàng</div> },
                { path: "orders", element: <div>Trang đơn hàng</div> },
                ]
            }
            // Sau này có trang cart, orders em cứ tiếp tục nhét vào đây
        ],
    },
    // 3. ROUTE ĐỘC LẬP (Không nằm trong Layout)
    // Thường thì trang Đăng nhập/Đăng ký không xài chung Header và Footer với trang chủ, 
    // nên ta đưa nó ra ngoài, đứng ngang hàng với MainLayout.
    // {
    //     path: "/login",
    //     element: <LoginPage />,
    // },
])