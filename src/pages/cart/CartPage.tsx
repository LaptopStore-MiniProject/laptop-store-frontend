import { CreditCard, Minus, Plus, Trash2 } from "lucide-react";
import { MOCK_PRODUCTS } from "../../features/products/utils/mockData";
import { formatCurrency } from "../../utils/formatCurrency";

const cartItems = [
  {
    product: MOCK_PRODUCTS[0],
    quantity: 1,
  },
  {
    product: MOCK_PRODUCTS[1],
    quantity: 2,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-container-max mx-auto px-gutter py-xl">
      <h1 className="text-3xl md:text-4xl font-bold text-on-surface mb-8">
        Giỏ hàng của bạn
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
        <div className="lg:col-span-8 flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.product.id}
              className="bg-surface-container-lowest rounded-lg p-4 md:p-6 border border-surface-variant flex flex-col sm:flex-row gap-6 items-center relative transition-colors duration-300 hover:border-outline shadow-sm"
            >
              <div className="w-full sm:w-40 h-32 bg-surface rounded flex-shrink-0 flex items-center justify-center overflow-hidden p-2">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-grow flex flex-col gap-2 w-full h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-on-surface line-clamp-1">
                      {item.product.name}
                    </h3>

                    <div className="text-xs font-medium text-on-surface-variant mt-1 bg-surface-container inline-block px-3 py-1 rounded-full">
                      {[item.product.cpu, item.product.vga, item.product.ram]
                        .filter(Boolean)
                        .join(" • ")}
                    </div>
                  </div>

                  <button className="text-on-surface-variant hover:text-error transition-colors p-2 rounded-full hover:bg-error-container/20">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex justify-between items-end mt-auto pt-4">
                  <div className="text-xl font-bold text-primary">
                    {formatCurrency(item.product.price)}
                  </div>

                  <div className="flex items-center bg-surface-container rounded border border-surface-variant">
                    <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-l transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="w-10 text-center font-semibold text-sm text-on-surface">
                      {item.quantity}
                    </span>

                    <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-variant rounded-r transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-surface-variant p-6 md:p-8 lg:sticky lg:top-[100px] shadow-sm h-fit">
          <h2 className="text-2xl font-bold text-on-surface mb-6 pb-4 border-b border-surface-variant">
            Tóm tắt đơn hàng
          </h2>

          <div className="flex flex-col gap-4 text-base text-on-surface-variant mb-6">
            <div className="flex justify-between">
              <span>Tạm tính</span>
              <span className="text-on-surface font-medium">
                {formatCurrency(subtotal)}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Vận chuyển</span>
              <span className="text-primary font-medium">Miễn phí</span>
            </div>
          </div>

          <div className="flex justify-between items-center py-6 border-t border-surface-variant mb-8">
            <span className="text-lg text-on-surface font-bold">
              Tổng cộng
            </span>

            <span className="text-3xl font-bold text-primary">
              {formatCurrency(subtotal)}
            </span>
          </div>

          <button className="w-full bg-primary text-on-primary font-semibold text-base py-4 px-6 rounded-lg transition-all duration-300 hover:brightness-110 flex items-center justify-center gap-2 shadow-sm">
            <CreditCard className="w-5 h-5" />
            Thanh toán ngay
          </button>
        </div>
      </div>
    </div>
  );
}