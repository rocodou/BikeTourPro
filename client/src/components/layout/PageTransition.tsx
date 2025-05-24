import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300); // This should match the duration of the animation
    }
  }, [location, displayLocation]);

  const variants = {
    fadeIn: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    fadeOut: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayLocation}
        variants={variants}
        animate={transitionStage}
        initial="fadeOut"
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;