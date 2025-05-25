import RoutesList from "@/components/routes/RoutesList";
import { motion } from "framer-motion";

const RoutesPage = () => {
  return (
    <section id="routes" className="pt-24 md:pt-28 py-20 bg-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 font-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Discover Cappadocia's <motion.span 
              className="text-primary"
              initial={{ color: "#FFFFFF" }}
              animate={{ color: "#FF5A00" }}
              transition={{ duration: 1.2, delay: 0.7 }}
            >Best Routes</motion.span>
          </motion.h2>
          <motion.p 
            className="text-[#9CA3AF] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our carefully designed routes that showcase the magical fairy chimneys, ancient cave churches, and stunning valleys of Cappadocia.
          </motion.p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <RoutesList />
        </motion.div>
      </div>
    </section>
  );
};

export default RoutesPage;