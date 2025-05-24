const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20booking%20a%20bicycle%20tour" 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-float flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fab fa-whatsapp text-white text-2xl"></i>
    </a>
  );
};

export default WhatsAppButton;
