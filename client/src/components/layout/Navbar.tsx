import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
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
    <div>
      {/* Full-width Logo Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black py-1">
        <div className="w-full flex justify-center">
          <Link href="/" className="flex items-center">
            <img src={logoImage} alt="Bike Tour Cappadocia" className="h-16 md:h-20" />
          </Link>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <header className={`fixed top-20 md:top-24 left-0 right-0 z-40 bg-[#121212] bg-opacity-95 backdrop-filter backdrop-blur-sm shadow-md transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-2'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="w-10"></div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/')}`}>Home</Link>
              <Link href="/routes" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/routes')}`}>Routes</Link>
              <Link href="/6-day-tour" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/6-day-tour')}`}>6-Day Tour</Link>
              <Link href="/gallery" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/gallery')}`}>Gallery</Link>
              <Link href="/about-us" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/about-us')}`}>About Us</Link>
              <Link href="/reservation" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/reservation')}`}>Reservation</Link>
              <Link href="/contact" className={`nav-link text-light hover:text-primary transition-colors duration-300 ${isActive('/contact')}`}>Contact</Link>
            </nav>
            
            <button 
              onClick={toggleMenu}
              className="md:hidden text-light hover:text-primary transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-[#1E1E1E] bg-opacity-95 backdrop-filter backdrop-blur-md shadow-lg transform origin-top transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/')}`}>Home</Link>
            <Link href="/routes" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/routes')}`}>Routes</Link>
            <Link href="/6-day-tour" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/6-day-tour')}`}>6-Day Tour</Link>
            <Link href="/about-us" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/about-us')}`}>About Us</Link>
            <Link href="/reservation" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/reservation')}`}>Reservation</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className={`nav-link mobile-link text-light hover:text-primary transition-colors duration-300 py-2 ${isActive('/contact')}`}>Contact</Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
