import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { productApi } from "../../features/products/api/productApi";
import { mapProductFromApi } from "../../features/products/utils/productMapper";
import type {
  Product,
  ProductApiResponse,
} from "../../features/products/types/product.types";
import { MOCK_PRODUCTS } from "../../lib/mockData";
import { formatCurrency } from "../../utils/formatCurrency";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProductDetail() {
      if (!id) return;

      try {
        const response = await productApi.getProductById(id);
        const item = response.data as ProductApiResponse;

        setProduct(mapProductFromApi(item));
      } catch (error) {
        console.error("[ProductDetailPage] Fetch product detail failed:", error);

        const fallbackProduct =
          MOCK_PRODUCTS.find((item) => String(item.id) === String(id)) ??
          MOCK_PRODUCTS[0];

        setProduct(fallbackProduct);
      }
    }

    fetchProductDetail();
  }, [id]);

  if (!product) {
    return (
      <div className="max-w-container-max mx-auto px-gutter py-xl">
        Đang tải chi tiết sản phẩm...
      </div>
    );
  }

  const specs = [
    { label: "CPU", value: product.cpu },
    { label: "RAM", value: product.ram },
    { label: "Ổ cứng", value: product.storage },
    { label: "Màn hình", value: product.screenSize },
    { label: "Card đồ họa", value: product.vga },
  ].filter((item) => item.value);

  return (
    <div className="max-w-container-max mx-auto px-gutter py-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl bg-surface-container-lowest border border-outline-variant rounded-2xl p-6 md:p-10 shadow-sm">
        <div className="bg-surface-container-low rounded-xl p-8 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[480px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-primary">
              {product.brand}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-on-surface mt-2">
              {product.name}
            </h1>
          </div>

          <p className="text-3xl font-bold text-primary">
            {formatCurrency(product.price)}
          </p>

          <p className="text-on-surface-variant leading-7">
            {product.description}
          </p>

          {specs.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-surface border border-outline-variant rounded-lg p-4"
                >
                  <p className="text-xs text-on-surface-variant uppercase">
                    {spec.label}
                  </p>

                  <p className="font-semibold text-on-surface mt-1">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-4 mt-4">
            <button className="bg-primary text-on-primary font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition-all">
              <ShoppingCart className="w-5 h-5" />
              Thêm vào giỏ hàng
            </button>

            <span className="text-sm text-on-surface-variant">
              Còn lại: {product.stock}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}