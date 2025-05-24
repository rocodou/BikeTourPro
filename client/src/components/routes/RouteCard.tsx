import { Link } from "wouter";

import RouteDocuments, { RouteDocument } from './RouteDocuments';

export type RouteInfo = {
  id: string;
  name: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  distance: string;
  duration: string;
  description: string;
  image: string;
  price: string;
  includes?: string[];
  documents?: RouteDocument[];
};

type RouteCardProps = {
  route: RouteInfo;
};

const RouteCard = ({ route }: RouteCardProps) => {
  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'moderate': return 'difficulty-moderate';
      case 'challenging': return 'difficulty-challenging';
      default: return 'difficulty-easy';
    }
  };

  return (
    <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in">
      <img 
        src={route.image} 
        alt={`${route.name} bicycle route`} 
        className="w-full h-48 object-cover"
        loading="lazy" 
      />
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-heading">{route.name}</h3>
          <span className={`difficulty-badge ${getDifficultyClass(route.difficulty)}`}>
            {route.difficulty}
          </span>
        </div>
        
        <div className="flex items-center text-[#9CA3AF] mb-4 text-sm">
          <div className="flex items-center mr-4">
            <i className="fas fa-route mr-2 text-primary"></i>
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock mr-2 text-primary"></i>
            <span>{route.duration}</span>
          </div>
        </div>
        
        <p className="text-[#9CA3AF] mb-6 text-sm">{route.description}</p>
        
        <div className="mb-6 h-32 bg-[#121212] rounded-lg overflow-hidden">
          {/* Google Maps iframe would go here in production */}
          <div className="w-full h-full flex items-center justify-center bg-[#121212] text-[#9CA3AF]">
            <span>Route Map Preview</span>
          </div>
        </div>
        
        {route.includes && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-white mb-2">Package Includes:</h4>
            <ul className="text-[#9CA3AF] text-xs space-y-1">
              {route.includes.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-secondary mr-2 mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-[#F59E0B] font-bold">{route.price}</span>
          <Link href={`/reservation?route=${route.id}`} className="inline-flex items-center bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300">
            <span>Select This Route</span>
          </Link>
        </div>
        
        {route.documents && route.documents.length > 0 && (
          <RouteDocuments documents={route.documents} routeName={route.name} />
        )}
      </div>
    </div>
  );
};

export default RouteCard;
