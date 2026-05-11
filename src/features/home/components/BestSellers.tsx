import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../../products/components/ProductCard";
import { MOCK_PRODUCTS } from "../../../lib/mockData";

export default function BestSellers() {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto border-t border-surface-variant bg-surface w-full">
      <div className="flex justify-between items-end mb-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-on-surface tracking-tight">
          Sản Phẩm Bán Chạy
        </h2>

        <Link
          to="/products"
          className="text-primary hover:text-primary-container transition-colors duration-200 text-sm font-semibold flex items-center gap-1 group"
        >
          Xem tất cả
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}