import { NavLink } from "react-router-dom";


const MENU_LINKS = [
    {path: "/" , label: "Trang chủ"},
    {path: "/products", label: "Sản phẩm"},
    {path: "/cart", label: "Giỏ hàng"},
    {path: "/orders", label: "Đơn hàng"},
    {path: "/login", label: "Đăng nhập"}
]

export default function Header()
{
    return(
        <header className="bg-white border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <NavLink to="/" className="text-xl font-bold">
                    LaptopStore
                </NavLink>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    {/* 2. Dùng map để lặp qua mảng và render ra NavLink */}
                    {MENU_LINKS.map(link => (
                        <NavLink
                        key={link.path}
                        to={link.path}
                        className={({isActive}) => isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>   
    )
}