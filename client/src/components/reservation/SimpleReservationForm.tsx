import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SimpleReservationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [route, setRoute] = useState("");
  const [date, setDate] = useState("");
  const [participants, setParticipants] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Reservation Submitted",
      description: "Thank you for your reservation. We'll contact you shortly!",
    });
    
    setIsSubmitting(false);
    // Reset form
    setName("");
    setEmail("");
    setRoute("");
    setDate("");
    setParticipants("");
  };

  return (
    <Card className="bg-[#1E1E1E] shadow-lg border-gray-700">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Full Name</Label>
            <Input 
              id="name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name" 
              required
              className="bg-[#121212] border-gray-700 text-white" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">Email Address</Label>
            <Input 
              id="email" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com" 
              required
              className="bg-[#121212] border-gray-700 text-white" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="route" className="text-white">Select Route</Label>
            <Select value={route} onValueChange={setRoute} required>
              <SelectTrigger id="route" className="bg-[#121212] border-gray-700 text-white">
                <SelectValue placeholder="Choose a route" />
              </SelectTrigger>
              <SelectContent className="bg-[#121212] border-gray-700 text-white">
                <SelectItem value="goreme-valley-tour">Göreme Valley Tour</SelectItem>
                <SelectItem value="uchisar-pigeon-valley">Uçhisar & Pigeon Valley</SelectItem>
                <SelectItem value="red-valley-adventure">Red Valley Adventure</SelectItem>
                <SelectItem value="love-valley-exploration">Love Valley Exploration</SelectItem>
                <SelectItem value="underground-city-tour">Underground City & Soğanlı</SelectItem>
                <SelectItem value="ihlara-valley-ride">Ihlara Valley Ride</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="date" className="text-white">Tour Date</Label>
            <Input 
              id="date" 
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="bg-[#121212] border-gray-700 text-white" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="participants" className="text-white">Number of Participants</Label>
            <Select value={participants} onValueChange={setParticipants} required>
              <SelectTrigger id="participants" className="bg-[#121212] border-gray-700 text-white">
                <SelectValue placeholder="Select number" />
              </SelectTrigger>
              <SelectContent className="bg-[#121212] border-gray-700 text-white">
                <SelectItem value="1">1 person</SelectItem>
                <SelectItem value="2">2 people</SelectItem>
                <SelectItem value="3">3 people</SelectItem>
                <SelectItem value="4">4 people</SelectItem>
                <SelectItem value="5">5 people</SelectItem>
                <SelectItem value="6+">6+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-orange-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Reservation"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default SimpleReservationForm;