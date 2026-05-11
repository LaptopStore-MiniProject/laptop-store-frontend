import { Gamepad2, Laptop, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: "gaming",
    title: "Laptop Gaming",
    description: "Hiệu năng tối đa, đồ họa đỉnh cao.",
    icon: Gamepad2,
  },
  {
    id: "ultrabook",
    title: "Ultrabook",
    description: "Mỏng nhẹ, sang trọng, di động.",
    icon: Laptop,
  },
  {
    id: "creator",
    title: "Đồ họa",
    description: "Màn hình chuẩn màu, sức mạnh render.",
    icon: Palette,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto w-full bg-surface">
      <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-lg text-center tracking-tight">
        Danh Mục Nổi Bật
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {categories.map((cat) => (
          <Link key={cat.id} to="/products" className="block group">
            <div className="relative bg-surface-container-lowest border border-outline-variant rounded-xl p-lg overflow-hidden cursor-pointer hover:border-primary/50 hover:shadow-md transition-all duration-300 h-full">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary mb-md group-hover:scale-110 transition-transform">
                <cat.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-on-surface mb-2">
                {cat.title}
              </h3>

              <p className="text-on-surface-variant">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}