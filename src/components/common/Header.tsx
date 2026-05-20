import { ShoppingCart, User, Menu, LogOut } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  getCurrentUser,
  clearAuth,
} from "../../features/auth/utils/authStorage";

const navLinks = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
  { name: "Liên hệ", path: "/contact" },
];

// 1. [Helper] : Hàm format tên để hiển thị
const formatDisplayName = (fullName: string) => {
  if (!fullName) return "";

  // Tách tên thành mảng các từ (dựa vào khoảng trắng)
  const words = fullName.trim().split(/\s+/);

  // Nếu tên có nhiều hơn 3 từ, chỉ lấy 2 từ đầu tiên và thêm "..."
  if (words.length > 3) {
    return `${words[0]} ${words[1]}...`;
  }

  return fullName; // Nếu <= 3 từ thì giữ nguyên
};

export default function Header() {
  const navigate = useNavigate();
  // Lấy thông tin user từ localStorage
  const user = getCurrentUser();

  // Hàm xử lý đăng xuất
  const handleLogout = () => {
    clearAuth(); // Xóa token & user data
    navigate("/login"); // Điều hướng về trang đăng nhập
  };

  return (
    <header className="bg-surface-container-lowest/80 text-primary sticky top-0 w-full z-50 backdrop-blur-xl border-b border-surface-variant shadow-sm h-16">
      <div className="flex justify-between items-center px-gutter h-full max-w-container-max mx-auto">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-widest text-primary flex items-center md:tracking-wider"
        >
          LaptopStore
        </Link>

        <nav className="hidden md:flex gap-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold border-b-2 border-primary pb-1 active:scale-95 transition-transform duration-300"
                  : "text-on-surface-variant font-medium active:scale-95 transition-transform hover:text-primary duration-300"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-sm">
          <Link
            to="/cart"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2"
          >
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>

          {/* Logic kiểm tra trạng thái đăng nhập */}
          {user ? (
            <div className="flex items-center gap-3 ml-2">
              <span className="text-sm font-semibold text-on-surface hidden sm:block">
                {formatDisplayName(user.fullName)}
              </span>
              <button
                onClick={handleLogout}
                className="text-error hover:text-red-600 transition-colors duration-200 p-2 flex items-center gap-1"
                title="Đăng xuất"
              >
                <LogOut className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm font-medium hidden md:block">
                  Thoát
                </span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2"
            >
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          )}

          <button className="md:hidden text-on-surface-variant p-2">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
