import { Link } from "wouter";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-in">
          <h2 className="text-3xl font-bold mb-6 font-heading text-white">Why Choose <span className="text-primary">CycleTrek</span>?</h2>
          <p className="text-[#9CA3AF] mb-6">We are passionate cyclists who believe that the best way to experience any location is on two wheels. Our tours combine adventure, culture, and unforgettable experiences.</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
              <span>Expert local guides who know the hidden gems</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
              <span>Premium, well-maintained bicycle fleet for all rider types</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
              <span>Routes for all experience levels from beginner to expert</span>
            </li>
            <li className="flex items-start">
              <span className="text-secondary mr-3 mt-1"><i className="fas fa-check-circle"></i></span>
              <span>Small groups for personalized experiences</span>
            </li>
          </ul>
          <div className="mt-8">
            <Link href="/routes" className="inline-flex items-center text-primary hover:text-blue-400 font-semibold transition-colors duration-300">
              Explore Our Tours <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
        
        <div className="fade-in">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
            alt="Group of cyclists enjoying a mountain tour" 
            className="rounded-xl shadow-xl w-full h-auto" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
