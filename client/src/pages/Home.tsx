import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedRoutes from "@/components/home/FeaturedRoutes";
import CustomerReviews from "@/components/home/CustomerReviews";

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedRoutes />
      <WhyChooseUs />
      <CustomerReviews />
    </>
  );
};

export default Home;
