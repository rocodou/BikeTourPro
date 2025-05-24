import SimpleReservationForm from "@/components/reservation/SimpleReservationForm";

const ReservationPage = () => {
  return (
    <section id="reservation" className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Book Your <span className="text-primary">Adventure</span></h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">Ready to explore? Fill out the form below to reserve your spot on one of our exciting bicycle tours.</p>
        </div>
        
        <div className="max-w-xl mx-auto">
          <SimpleReservationForm />
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto p-6 bg-[#1E1E1E] rounded-lg shadow-md border border-gray-800">
          <h3 className="text-xl font-bold mb-4 text-white">What's Included in Your Tour:</h3>
          <ul className="space-y-2 text-[#D1D5DB]">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Professional English-speaking licensed guide</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Hotel pickup and drop-off service</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>ORBEA LAUFEY H10 2025 bikes</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Helmets and safety equipment</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Water and snacks</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Lunch at a local restaurant</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Emergency support vehicle</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;