import HeroSection from "../features/home/components/HeroSection";
import FeaturedCategories from "../features/home/components/FeaturedCategories";
import BestSellers from "../features/home/components/BestSellers";
import PromoBanner from "../features/home/components/PromoBanner";
import WhyChooseUs from "../features/home/components/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center w-full">
      <HeroSection />
      <FeaturedCategories />
      <BestSellers />
      <PromoBanner />
      <WhyChooseUs />
    </div>
  );
}