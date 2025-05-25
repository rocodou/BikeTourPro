import { useState } from "react";
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export type RouteDocument = {
  name: string;
  description: string;
  fileUrl: string;
};

interface RouteDocumentsProps {
  documents: RouteDocument[];
  routeName: string;
}

const RouteDocuments = ({ documents, routeName }: RouteDocumentsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (!documents || documents.length === 0) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  const downloadButtonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      color: "#4F46E5",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div 
      className="mt-6 p-4 bg-[#1A1A1A] rounded-lg border border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.01 }}
      >
        <motion.h3 
          className="text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Route Documents
        </motion.h3>
        <motion.button
          className="text-primary p-1 rounded-full hover:bg-primary/10"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </motion.button>
      </motion.div>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.p 
              className="text-sm text-[#9CA3AF] my-4"
              variants={itemVariants}
            >
              Download these documents for more information about the {routeName} route:
            </motion.p>
            <motion.div className="space-y-3">
              {documents.map((doc, index) => (
                <motion.div 
                  key={index} 
                  className="flex justify-between items-center p-3 bg-[#121212] rounded-lg hover:bg-[#252525] transition-colors duration-200"
                  variants={itemVariants}
                  whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
                >
                  <div>
                    <h4 className="text-sm font-medium">{doc.name}</h4>
                    <p className="text-xs text-[#9CA3AF]">{doc.description}</p>
                  </div>
                  <motion.a 
                    href={doc.fileUrl} 
                    download 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    variants={downloadButtonVariants}
                    whileHover="hover"
                  >
                    <Button variant="ghost" size="sm" className="gap-1">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                      >
                        <FileDown size={16} />
                      </motion.div>
                      <span className="text-xs">Download</span>
                    </Button>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RouteDocuments;