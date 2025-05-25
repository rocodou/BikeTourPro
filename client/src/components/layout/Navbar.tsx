import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import logoImage from "../../assets/logocapo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => {
    return location === path ? 'active' : '';
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Integrated Header with Logo and Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'py-0' : 'py-0'}`}>
        <div className="shadow-lg bg-[#000000a6]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between py-1">
              {/* Logo */}
              <motion.div 
                className="flex justify-center mb-1 md:mb-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/" className="flex items-center">
                  <img src={logoImage} alt="Bike Tour Cappadocia" className="h-12 md:h-14" />
                </Link>
              </motion.div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6 lg:space-x-8">
                <Link href="/" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/')}`}>Home</Link>
                <Link href="/routes" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/routes')}`}>Routes</Link>
                <Link href="/6-day-tour" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/6-day-tour')}`}>6-Day Tour</Link>
                <Link href="/gallery" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/gallery')}`}>Gallery</Link>
                <Link href="/about-us" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/about-us')}`}>About Us</Link>
                <Link href="/reservation" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/reservation')}`}>Reservation</Link>
                <Link href="/contact" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/contact')}`}>Contact</Link>
              </nav>
              
              {/* Mobile Menu Button */}
              <motion.button 
                onClick={toggleMenu}
                className="md:hidden text-light hover:text-primary transition-colors duration-300 absolute right-4 top-4"
                aria-label="Toggle mobile menu"
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-bars text-xl"></i>
              </motion.button>
            </div>
          </div>
        
          {/* Mobile Navigation Menu */}
          <motion.div 
            className={`md:hidden bg-[#1E1E1E] bg-opacity-95 backdrop-filter backdrop-blur-md shadow-lg transform origin-top transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/')}`}>Home</Link>
              <Link href="/routes" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/routes')}`}>Routes</Link>
              <Link href="/6-day-tour" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/6-day-tour')}`}>6-Day Tour</Link>
              <Link href="/gallery" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/gallery')}`}>Gallery</Link>
              <Link href="/about-us" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/about-us')}`}>About Us</Link>
              <Link href="/reservation" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/reservation')}`}>Reservation</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/contact')}`}>Contact</Link>
            </div>
          </motion.div>
        </div>
      </header>
      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-[50px] md:h-[50px]"></div>
    </motion.div>
  );
};

export default Navbar;
