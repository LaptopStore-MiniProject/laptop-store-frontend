import { Headset, ShieldCheck, Truck } from "lucide-react";

const reasons = [
  {
    title: "Giao hàng nhanh",
    description: "Nhận máy nhanh chóng, đóng gói an toàn, hỗ trợ kiểm tra hàng.",
    icon: Truck,
  },
  {
    title: "Bảo hành uy tín",
    description: "Cam kết linh kiện chính hãng, hỗ trợ bảo hành rõ ràng.",
    icon: ShieldCheck,
  },
  {
    title: "Hỗ trợ tận tâm",
    description: "Đội ngũ tư vấn luôn sẵn sàng hỗ trợ chọn máy phù hợp.",
    icon: Headset,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto border-t border-surface-variant mb-xl bg-surface w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-on-surface mb-lg text-center tracking-tight">
        Tại Sao Chọn LaptopStore
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="flex flex-col items-center text-center gap-4 justify-center h-full"
          >
            <div className="w-16 h-16 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform duration-300">
              <reason.icon className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-semibold text-on-surface">
              {reason.title}
            </h3>

            <p className="text-base text-on-surface-variant max-w-xs">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}