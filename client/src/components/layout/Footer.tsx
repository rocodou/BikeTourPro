import { Link } from "wouter";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { isValidEmail } from "@/lib/utils";
import logoImage from "../../assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }
    
    if (!isValidEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    // API call would go here
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-[#121212] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src={logoImage} alt="Bike Tour Cappadocia" className="h-16" />
            </Link>
            <p className="text-[#9CA3AF] mb-4">Experience Cappadocia on two wheels with our premium bicycle tours designed for all skill levels.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Home</Link></li>
              <li><Link href="/routes" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Our Routes</Link></li>
              <li><Link href="/reservation" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Book a Tour</Link></li>
              <li><Link href="/contact" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Our Tours</h4>
            <ul className="space-y-2">
              <li><Link href="/routes" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Coastal Explorer</Link></li>
              <li><Link href="/routes" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Forest Adventure</Link></li>
              <li><Link href="/routes" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Mountain Challenge</Link></li>
              <li><Link href="/routes" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Vineyard Tour</Link></li>
              <li><Link href="/routes" className="text-[#9CA3AF] hover:text-primary transition-colors duration-300">Historic Tour</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-[#9CA3AF] mb-4">Subscribe to receive updates on new tours and special offers.</p>
            <form className="flex" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="flex-grow bg-[#2D2D2D] border border-gray-700 rounded-l-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
              />
              <button type="submit" className="bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg transition-colors duration-300">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#9CA3AF] text-sm">&copy; {new Date().getFullYear()} Bike Tour Cappadocia. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#9CA3AF] hover:text-primary text-sm transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-[#9CA3AF] hover:text-primary text-sm transition-colors duration-300">Terms of Service</Link>
            <Link href="/faq" className="text-[#9CA3AF] hover:text-primary text-sm transition-colors duration-300">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
