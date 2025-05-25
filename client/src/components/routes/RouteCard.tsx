import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

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
  const [isHovered, setIsHovered] = useState(false);
  
  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'difficulty-easy';
      case 'moderate': return 'difficulty-moderate';
      case 'challenging': return 'difficulty-challenging';
      default: return 'difficulty-easy';
    }
  };

  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hover: { y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }
  };

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { 
      yoyo: Infinity, 
      duration: 0.8,
      ease: "easeInOut" 
    }}
  };

  const includedItemVariants = {
    initial: { opacity: 0, x: -10 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.3
      }
    })
  };

  return (
    <motion.div 
      className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg transition-all duration-300 fade-in"
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="overflow-hidden h-48">
        <motion.img 
          src={route.image} 
          alt={`${route.name} bicycle route`} 
          className="w-full h-48 object-cover"
          loading="lazy"
          variants={imageVariants}
          animate={isHovered ? "hover" : "initial"}
        />
      </motion.div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-xl font-bold font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {route.name}
          </motion.h3>
          <motion.span 
            className={`difficulty-badge ${getDifficultyClass(route.difficulty)}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {route.difficulty}
          </motion.span>
        </div>
        
        <motion.div 
          className="flex items-center text-[#9CA3AF] mb-4 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center mr-4">
            <i className="fas fa-route mr-2 text-primary"></i>
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock mr-2 text-primary"></i>
            <span>{route.duration}</span>
          </div>
        </motion.div>
        
        <motion.p 
          className="text-[#9CA3AF] mb-6 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {route.description}
        </motion.p>
        
        <motion.div 
          className="mb-6 h-32 bg-[#121212] rounded-lg overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 128 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {/* Google Maps iframe would go here in production */}
          <div className="w-full h-full flex items-center justify-center bg-[#121212] text-[#9CA3AF]">
            <span>Route Map Preview</span>
          </div>
        </motion.div>
        
        {route.includes && (
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="text-sm font-medium text-white mb-2">Package Includes:</h4>
            <ul className="text-[#9CA3AF] text-xs space-y-1">
              {route.includes.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={includedItemVariants}
                  initial="initial"
                  animate="animate"
                  custom={index}
                >
                  <motion.span 
                    className="text-secondary mr-2 mt-0.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index + 0.6 }}
                  >
                    <i className="fas fa-check-circle text-xs"></i>
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        
        <div className="flex justify-between items-center">
          <motion.span 
            className="text-[#F59E0B] font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {route.price}
          </motion.span>
          <motion.div
            variants={buttonVariants}
            animate={isHovered ? "hover" : "initial"}
          >
            <Link 
              href={`/reservation?route=${route.id}`} 
              className="inline-flex items-center bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors duration-300"
            >
              <span>Select This Route</span>
            </Link>
          </motion.div>
        </div>
        
        {route.documents && route.documents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <RouteDocuments documents={route.documents} routeName={route.name} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default RouteCard;
