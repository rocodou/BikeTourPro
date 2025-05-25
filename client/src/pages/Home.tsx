import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedRoutes from "@/components/home/FeaturedRoutes";
import CustomerReviews from "@/components/home/CustomerReviews";

const Home = () => {
  return (
    <>
      <div className="relative">
        <Hero />
      </div>
      <div className="relative z-10">
        <FeaturedRoutes />
      </div>
      <div className="relative z-10">
        <WhyChooseUs />
      </div>
      <div className="relative z-10">
        <CustomerReviews />
      </div>
    </>
  );
};

export default Home;
