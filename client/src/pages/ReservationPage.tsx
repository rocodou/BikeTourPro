import ReservationForm from "@/components/reservation/ReservationForm";

const ReservationPage = () => {
  return (
    <section id="reservation" className="pt-24 md:pt-28 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Book Your <span className="text-primary">Adventure</span></h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">Ready to explore? Fill out the form below to reserve your spot on one of our exciting bicycle tours.</p>
        </div>
        
        <ReservationForm />
      </div>
    </section>
  );
};

export default ReservationPage;