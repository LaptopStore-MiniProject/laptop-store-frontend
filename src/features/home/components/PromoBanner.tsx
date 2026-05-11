import { Link } from "react-router-dom";

export default function PromoBanner() {
  return (
    <section className="py-xl px-gutter max-w-container-max mx-auto bg-surface w-full">
      <div className="bg-gradient-to-r from-surface-container-high to-surface-container border border-outline-variant rounded-2xl overflow-hidden relative shadow-sm">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-container/30 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-xl">
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase text-primary mb-3 block tracking-widest">
              SIÊU ƯU ĐÃI THÁNG NÀY
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-on-surface mb-4 leading-tight">
              Giảm Giá Lên Đến 20%
            </h2>

            <p className="text-base md:text-lg text-on-surface-variant mb-8 max-w-md mx-auto md:mx-0">
              Nâng cấp thiết bị của bạn ngay hôm nay với các mẫu laptop cấu hình
              cao cấp nhất.
            </p>

            <Link
              to="/products"
              className="inline-block bg-primary text-on-primary font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Khám phá ưu đãi
            </Link>
          </div>

          <div className="flex-1 flex justify-center mt-8 md:mt-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdwBuYYP1jr5w_Hauewtdh80TgkZF4h9C5F7tQDA9Srw-I__noJ9L6IEhFHE4rg43LrB1UA-6dnpK68TK_gj2mzdrtjtS8TURVR66uiip_sdo6Zj2PgRGHB9vLamv94EePwgHNbAlawvtmgem3tQU1Oz8kYG67arkJSRNhgsENwjbN1txRq7_mWmoYA0bEIlnm1VD5wpLotHEnx1c_9ClkM_mejxuqLaEOrJijxpIVHXkVqeCWLVS009RHi7Y_w2V7IxrigZU2qpg"
              alt="Promo Laptops"
              className="w-full max-w-[400px] object-cover rounded-xl shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}