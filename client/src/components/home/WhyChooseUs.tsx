import { Link } from "wouter";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#1A1A1A] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose <span className="text-primary">Bike Tour Cappadocia</span>?
          </h2>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We are passionate cyclists who believe that the best way to experience any location is on two wheels. 
            Our tours combine adventure, culture, and unforgettable experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <ul className="space-y-6 text-gray-200">
              <li className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <i className="fas fa-check text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Expert Tour Guides</h3>
                  <p className="text-gray-400">English speaking licensed tour guides who know the hidden gems of Cappadocia</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <i className="fas fa-bicycle text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Premium Equipment</h3>
                  <p className="text-gray-400">ORBEA LAUFEY H10 2025 bicycle fleet with helmets and safety gear</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <i className="fas fa-map-marked-alt text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Diverse Routes</h3>
                  <p className="text-gray-400">Routes for all experience levels from beginner to expert riders</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-primary/20 p-3 rounded-full mr-4">
                  <i className="fas fa-shuttle-van text-primary"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Full Service</h3>
                  <p className="text-gray-400">Hotel pickup/drop-off and local lunch included with every tour</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10">
              <Link href="/routes" className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors duration-300">
                Explore Our Tours <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
          
          <div className="rounded-xl shadow-xl overflow-hidden h-[450px]">
            <img 
              src="/images/routes/love-valley-exploration.webp" 
              alt="Cycling in Cappadocia" 
              className="w-full h-full object-cover" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
