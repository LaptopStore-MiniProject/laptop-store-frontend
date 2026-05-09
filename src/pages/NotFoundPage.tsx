import { Link } from "react-router-dom";

export default function NotFoundPage() 
{
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Không tìm thấy trang.
            </h2>
            <p className="mt-2 text-gray-500 text-center max-w-md">
                Đường dẫn bạn đang cố truy cập không tồn tại hoặc đã bị gỡ bỏ. 
                Vui lòng kiểm tra lại.
            </p>
            {/* Nút quay về trang chủ */}
            <Link
            to="/"
            className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
                Quay về trang chủ
            </Link>
        </div>
    )
}

