import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden border-b border-surface-variant min-h-[600px] lg:min-h-[760px] flex items-center justify-center px-gutter py-xl bg-surface-container-lowest"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 50%, rgba(0, 86, 150, 0.05) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-container-max w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-xl items-center relative z-10">
        <div className="flex flex-col gap-md">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface">
            Đỉnh Cao Công Nghệ Laptop
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl">
            Khám phá thế hệ laptop cao cấp tiếp theo. Hiệu suất vượt trội,
            thiết kế tinh xảo, đáp ứng mọi nhu cầu từ học tập, làm việc đến
            giải trí.
          </p>

          <div className="mt-sm flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-primary text-on-primary font-semibold text-sm md:text-base px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Mua ngay
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/products"
              className="border-2 border-outline text-primary bg-transparent font-semibold text-sm md:text-base px-6 py-3 rounded-lg hover:bg-surface-container transition-all duration-300"
            >
              Tìm hiểu thêm
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-primary-container/20 blur-[100px] rounded-full z-0 pointer-events-none" />

          <img
            alt="Laptop Hero"
            className="relative z-10 w-full max-w-[600px] object-cover drop-shadow-2xl hero-image-floating"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn2bAX_NTdY2wRcVu0Zi5rjVrK10Rwo2OoOKsNNzJO3WOLue7w57yzOk2RXKoNpwMAL4HXrpTU5A8Xf9HoQAIeN0DZ6UXUFqmoxIfzNtVgOVNbjKNs-nbUjH9jhy0kGo03hJqZ5C5wl4kql6zbIwGM8Ubl4X2knEnH8Qv8qsKbbV0gq9-fmz-TZtFwk-Bikz1oMvETN_9n9Zdy6OD_wewi4sKTywXjMcUMm7Kl9bn4-vKxYE6Z3ke_mX816LKbjMpuCL2U97-pyuU"
          />
        </div>
      </div>
    </section>
  );
}