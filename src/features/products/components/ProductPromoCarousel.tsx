import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    title: "Nâng Tầm Công Nghệ",
    description:
      "Khám phá bộ sưu tập laptop cao cấp, hiệu năng vượt trội dành cho công việc, giải trí và sáng tạo đỉnh cao.",
    cta: "Khám phá ngay",
    to: "/products",
  },
  {
    id: 2,
    title: "Laptop Gaming Cực Mạnh",
    description:
      "Sở hữu hiệu năng vượt trội với RTX, màn hình tần số quét cao và hệ thống tản nhiệt tối ưu.",
    cta: "Xem laptop gaming",
    to: "/products",
  },
  {
    id: 3,
    title: "Ưu Đãi Cho Sinh Viên",
    description:
      "Các mẫu laptop mỏng nhẹ, pin tốt, giá hợp lý cho học tập, làm việc và lập trình.",
    cta: "Xem ưu đãi",
    to: "/products",
  },
];

export default function ProductPromoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function goToPrevious() {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev + 1));
  }

  function goToNext() {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      goToNext();
    }, 3000);
    return () => {
      window.clearInterval(timer);
    };
  });
  const banner = banners[currentIndex];

  return (
    <section className="relative w-full h-[300px] sm:h-[280px] md:h-[260px] overflow-hidden rounded-2xl border border-outline-variant bg-gradient-to-r from-surface-container-high to-surface-container-low px-10 shadow-sm flex items-center justify-center">
      <button
        type="button"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-container-lowest/80 border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-container-lowest/80 border border-outline-variant flex items-center justify-center text-primary hover:bg-surface-container transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="mx-auto max-w-3xl text-center transition-all duration-300 px-8 pb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-on-surface tracking-tight leading-tight">
          {banner.title}
        </h2>

        <p className="mt-3 text-sm sm:text-base md:text-lg text-on-surface-variant leading-7">
          {banner.description}
        </p>

        <Link
          to={banner.to}
          className="mt-5 inline-flex bg-primary text-on-primary font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all"
        >
          {banner.cta}
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {banners.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={
              index === currentIndex
                ? "h-2.5 w-8 rounded-full bg-primary transition-all"
                : "h-2.5 w-2.5 rounded-full bg-outline-variant hover:bg-outline transition-all"
            }
          />
        ))}
      </div>
    </section>
  );
}
