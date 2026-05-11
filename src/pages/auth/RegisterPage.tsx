import { Link, useNavigate } from "react-router-dom";
import {ArrowLeft } from "lucide-react";

export default function RegisterPage() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-gutter relative overflow-hidden bg-surface">
        {/* Back button */}
        <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 flex items-center gap-2 text-primary font-semibold hover:underline z-20"
        >
            <ArrowLeft className="w-5 h-5" />
            Back
        </button>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[480px] bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-lg p-8 relative z-10">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-block text-2xl tracking-[0.15em] text-primary mb-2 font-bold"
          >
            LaptopStore
          </Link>

          <h1 className="text-2xl font-bold text-on-surface mb-2 tracking-tight">
            Đăng ký
          </h1>

          <p className="text-base text-on-surface-variant">
            Tạo tài khoản LaptopStore của bạn
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider"
            >
              Họ và tên
            </label>

            <input
              type="text"
              id="fullName"
              placeholder="Nhập họ và tên"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-medium placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              placeholder="Nhập địa chỉ email"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-medium placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider"
            >
              Mật khẩu
            </label>

            <input
              type="password"
              id="password"
              placeholder="Nhập mật khẩu"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-medium placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider"
            >
              Số điện thoại
            </label>

            <input
              type="tel"
              id="phone"
              placeholder="Nhập số điện thoại"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-medium placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        {/* Thêm địa chỉ ở đây */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider"
            >
              Địa chỉ
            </label>

            <input
              type="text"
              id="address"
              placeholder="Nhập địa chỉ"
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-on-surface font-medium placeholder:text-outline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-primary text-on-primary font-semibold text-base py-3 px-6 rounded-lg hover:brightness-110 transition-all"
          >
            Đăng ký
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm font-medium text-on-surface-variant">
            Đã có tài khoản?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary-container font-bold transition-colors underline decoration-2 underline-offset-2"
            >
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}