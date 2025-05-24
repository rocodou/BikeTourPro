import BasicReservationForm from "@/components/reservation/BasicReservationForm";

const ReservationPage = () => {
  return (
    <section id="reservation" className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Book Your <span className="text-primary">Adventure</span></h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">Ready to explore? Fill out the form below to reserve your spot on one of our exciting bicycle tours.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-2">
            <BasicReservationForm />
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md border border-gray-800 mb-6">
              <h3 className="text-xl font-bold mb-4 text-white">Tour Pricing</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">1 person</span>
                  <span className="text-[#F59E0B] font-bold">250€ per person</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">2 people</span>
                  <span className="text-[#F59E0B] font-bold">160€ per person</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">3 people</span>
                  <span className="text-[#F59E0B] font-bold">130€ per person</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">4+ people</span>
                  <span className="text-[#F59E0B] font-bold">110€ per person</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-md border border-gray-800">
              <h3 className="text-xl font-bold mb-4 text-white">What's Included:</h3>
              <ul className="space-y-2 text-[#D1D5DB]">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Professional English-speaking guide</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Hotel pickup and drop-off</span>
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
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;