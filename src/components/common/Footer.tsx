import { Link } from "react-router-dom";

export default function Footer()
{
    return(
        <footer className="bg-surface-container-lowest text-primary text-base w-full py-12 border-t border-surface-variant mt-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-8 px-8 xl:max-w-7xl mx-auto items-center">
                <div className="flex flex-col gap-2">
                    <div className="text-2xl font-bold text-primary">
                        LaptopStore
                    </div>
                    
                    <p className="text-on-surface-variant text-sm">
                        LaptopStore © {new Date().getFullYear()} {/* Lấy năm động luôn cho xịn */}
                    </p>
                
                </div>
            <nav className="flex flex-wrap gap-md lg:gap-lg">
                <Link
                    to="#"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                    Chính sách bảo hành
                </Link>

                <Link
                    to="#"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                    Vận chuyển
                </Link>

                <Link
                    to="#"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                    Hỗ trợ kỹ thuật
                </Link>

                <Link
                    to="#"
                    className="text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                    Điều khoản sử dụng
                </Link>
            </nav>
            </div>
        </footer>
    )
}