import SixDayTourComponent from "@/components/routes/SixDayTour";
import SixDayTourGallery from "@/components/routes/SixDayTourGallery";

const SixDayTourPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        6-Day Self-Guided Gravel Bike Tour
      </h1>
      <SixDayTourGallery />
      <SixDayTourComponent />
    </div>
  );
};

export default SixDayTourPage;