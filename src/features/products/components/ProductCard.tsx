import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../types/product.types";
import { formatCurrency } from "../../../utils/formatCurrency";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const specs = [product.cpu, product.ram, product.storage, product.vga]
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <Link
        to={`/products/${product.id}`}
        className="block bg-surface-container-low p-4 h-56 overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-4 flex flex-col flex-grow gap-3">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">
            {product.brand}
          </p>

          <Link to={`/products/${product.id}`}>
            <h3 className="mt-1 text-base font-bold text-on-surface line-clamp-2 hover:text-primary transition-colors">
              {product.name}
            </h3>
          </Link>
        </div>

        {specs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {specs.map((spec) => (
              <span
                key={spec}
                className="text-xs bg-surface-container text-on-surface-variant px-2 py-1 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        <p className="text-sm text-on-surface-variant line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-primary">
              {formatCurrency(product.price)}
            </p>

            {product.oldPrice && (
              <p className="text-sm text-outline line-through">
                {formatCurrency(product.oldPrice)}
              </p>
            )}
          </div>

          <button className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:brightness-110 transition-all">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}