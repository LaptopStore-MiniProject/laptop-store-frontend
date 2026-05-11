import { ArrowRight, Lock, Mail,ArrowLeft } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";


export default function LoginPage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-gutter py-12">
        {/* Back button */}
        <button
            type="button"
            onClick={() => navigate("/")}
            className="absolute top-6 left-6 flex items-center gap-2 text-primary font-semibold hover:underline z-20"
        >
            <ArrowLeft className="w-5 h-5" />
            Back
        </button>
      <main className="w-full max-w-[460px]">
        <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <div className="text-center">
            <Link
              to="/"
              className="inline-block text-2xl tracking-[0.15em] text-primary mb-2 font-bold hover:scale-105 transition-transform"
            >
              LaptopStore
            </Link>

            <h1 className="text-2xl font-bold text-on-surface tracking-tight">
              Đăng nhập tài khoản
            </h1>

            <p className="text-base text-on-surface-variant mt-2">
              Chào mừng bạn quay trở lại
            </p>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-on-surface-variant"
              >
                Email
              </label>

              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 group-focus-within:text-primary transition-colors" />

                <input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-11 pr-4 text-on-surface font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-on-surface-variant"
              >
                Mật khẩu
              </label>

              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5 group-focus-within:text-primary transition-colors" />

                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-3 pl-11 pr-4 text-on-surface font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline"
                />
              </div>
            </div>

            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-outline-variant bg-surface-container-lowest text-primary focus:ring-primary"
                />

                <span className="text-sm font-medium text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Ghi nhớ đăng nhập
                </span>
              </label>

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-primary hover:text-primary-container transition-all"
              >
                Quên mật khẩu?
              </Link>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-primary text-on-primary font-semibold text-base py-3 rounded-lg hover:brightness-110 transition-all duration-300 flex justify-center items-center gap-2 shadow-sm"
            >
              Đăng nhập
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          <div className="text-center">
            <p className="text-sm font-medium text-on-surface-variant">
              Chưa có tài khoản?
              <Link
                to="/register"
                className="text-primary hover:text-primary-container font-bold transition-all ml-1 underline decoration-2 underline-offset-2"
              >
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}