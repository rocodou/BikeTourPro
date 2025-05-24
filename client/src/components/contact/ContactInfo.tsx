const ContactInfo = () => {
  return (
    <div>
      <div className="bg-[#1E1E1E] p-8 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-bold mb-6 font-heading">Contact Information</h3>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white">Our Address</p>
              <p className="text-[#9CA3AF]">123 Adventure Street, Biking Valley, 12345</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary">
              <i className="fas fa-phone"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white">Phone</p>
              <a href="tel:+11234567890" className="text-primary hover:text-blue-400 transition-colors duration-300">+1 (123) 456-7890</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white">Email</p>
              <a href="mailto:info@cycletrek.com" className="text-primary hover:text-blue-400 transition-colors duration-300">info@cycletrek.com</a>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary">
              <i className="fas fa-clock"></i>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-white">Open Hours</p>
              <p className="text-[#9CA3AF]">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex space-x-4">
          <a href="#" className="h-10 w-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="h-10 w-10 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      
      <div className="h-64 rounded-xl overflow-hidden shadow-lg">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937834!2d2.2922926156741654!3d48.858370079287475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1621546585191!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy"
          title="Our location"
        ></iframe>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-[#9CA3AF]">Need help? <a href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20booking%20a%20bicycle%20tour" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline"><i className="fab fa-whatsapp mr-1"></i> Chat with us directly on WhatsApp!</a></p>
      </div>
    </div>
  );
};

export default ContactInfo;
