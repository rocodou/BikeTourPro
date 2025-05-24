import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 md:pt-28 py-20 bg-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Get in <span className="text-primary">Touch</span></h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">Have questions or need more information? We're here to help you plan your perfect cycling adventure.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-in">
            <ContactForm />
          </div>
          
          <div className="fade-in">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
