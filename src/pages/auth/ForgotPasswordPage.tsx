import { Mail,ArrowLeft } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center px-gutter py-12">
        {/* Back button */}
        <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 flex items-center gap-2 text-primary font-semibold hover:underline z-20"
        >
            <ArrowLeft className="w-5 h-5" />
            Back
        </button>
      <div className="w-full max-w-[460px] bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block text-2xl tracking-[0.15em] text-primary mb-2 font-bold"
          >
            LaptopStore
          </Link>

          <h1 className="text-2xl font-bold text-on-surface">
            Quên mật khẩu
          </h1>

          <p className="text-on-surface-variant mt-2">
            Nhập email để nhận hướng dẫn đặt lại mật khẩu.
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

          <button
            type="submit"
            className="w-full bg-primary text-on-primary font-semibold text-base py-3 rounded-lg hover:brightness-110 transition-all"
          >
            Gửi yêu cầu
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm text-primary font-semibold hover:text-primary-container"
          >
            Quay lại đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
}