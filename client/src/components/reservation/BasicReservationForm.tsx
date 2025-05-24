import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BasicReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    route: "",
    date: "",
    participants: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Success message
    toast({
      title: "Reservation Successful!",
      description: "Thank you for your reservation. We'll contact you shortly."
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      route: "",
      date: "",
      participants: "",
      notes: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-gray-800">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-white mb-1">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your full name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-white mb-1">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-white mb-1">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your phone number"
          />
        </div>
        
        <div>
          <label htmlFor="route" className="block text-white mb-1">Select Route *</label>
          <select
            id="route"
            name="route"
            value={formData.route}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="" disabled>Choose a route</option>
            <option value="goreme-valley-tour">Göreme Valley Tour</option>
            <option value="uchisar-pigeon-valley">Uçhisar & Pigeon Valley</option>
            <option value="red-valley-adventure">Red Valley Adventure</option>
            <option value="love-valley-exploration">Love Valley Exploration</option>
            <option value="underground-city-tour">Underground City & Soğanlı</option>
            <option value="ihlara-valley-ride">Ihlara Valley Ride</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="date" className="block text-white mb-1">Tour Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        
        <div>
          <label htmlFor="participants" className="block text-white mb-1">Number of Participants *</label>
          <select
            id="participants"
            name="participants"
            value={formData.participants}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="" disabled>Select number</option>
            <option value="1">1 person (250€)</option>
            <option value="2">2 people (160€ per person)</option>
            <option value="3">3 people (130€ per person)</option>
            <option value="4">4 people (110€ per person)</option>
            <option value="5">5 people (110€ per person)</option>
            <option value="6+">6+ people (group discount)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="notes" className="block text-white mb-1">Additional Notes</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="form-input"
            rows={4}
            placeholder="Any special requirements or questions?"
          ></textarea>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
        >
          {isSubmitting ? "Submitting..." : "Submit Reservation"}
        </button>
      </form>
    </div>
  );
};

export default BasicReservationForm;