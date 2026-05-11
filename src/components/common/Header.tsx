import { ShoppingCart, User, Menu } from 'lucide-react';
import { Link,NavLink  } from 'react-router-dom';

const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Sản phẩm', path: '/products' },
    { name: 'Liên hệ', path: '/contact' },
]

export default function Header()
{
    return(
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

          <Link
            to="/login"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 p-2"
          >
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>

          <button className="md:hidden text-on-surface-variant p-2">
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </header>
    )
}