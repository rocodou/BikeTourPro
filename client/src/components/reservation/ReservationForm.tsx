import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Check, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import { getTodayDate, getSixMonthsFromNow } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(8, { message: "Please enter a valid phone number" }),
  route: z.string({ required_error: "Please select a route" }),
  date: z.string()
    .refine(val => !!val, { message: "Please select a date" })
    .refine(val => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(val);
      return selectedDate >= today;
    }, { message: "Date cannot be in the past" }),
  participants: z.string({ required_error: "Please select number of participants" }),
  tourType: z.enum(["group", "private"], { required_error: "Please select tour type" }),
  notes: z.string().optional()
});

type ReservationFormValues = z.infer<typeof formSchema>;

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { toast } = useToast();
  const [location, setLocation] = useLocation();
  
  // Get route from URL query params
  const params = new URLSearchParams(location.split('?')[1] || '');
  const routeFromUrl = params.get('route') || '';

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      route: routeFromUrl,
      date: "",
      participants: "",
      tourType: "group",
      notes: ""
    }
  });

  // Update route field when URL param changes
  useEffect(() => {
    form.setValue('route', routeFromUrl);
  }, [routeFromUrl, form]);

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    setSuccess(false);
    setError(false);

    try {
      // Call the reservation API endpoint
      const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setSuccess(true);
        form.reset();
        toast({
          title: "Reservation Successful!",
          description: "Thank you for your reservation. We'll contact you shortly to confirm the details.",
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (err) {
      console.error('Reservation submission error:', err);
      setError(true);
      toast({
        title: "Something went wrong",
        description: "Please check your information and try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto fade-in">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-[#1E1E1E] p-8 rounded-xl shadow-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your full name" 
                            {...field} 
                            className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your.email@example.com" 
                            type="email"
                            {...field} 
                            className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Phone Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your phone number" 
                            type="tel"
                            {...field} 
                            className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="route"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Select Route *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                              <SelectValue placeholder="Choose a route" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#121212] border border-gray-700 text-white">
                            <SelectItem value="goreme-valley-tour">Göreme Valley Tour</SelectItem>
                            <SelectItem value="uchisar-pigeon-valley">Uçhisar & Pigeon Valley</SelectItem>
                            <SelectItem value="red-valley-adventure">Red Valley Adventure</SelectItem>
                            <SelectItem value="love-valley-exploration">Love Valley Exploration</SelectItem>
                            <SelectItem value="underground-city-tour">Underground City & Soğanlı</SelectItem>
                            <SelectItem value="ihlara-valley-ride">Ihlara Valley Ride</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Date of Tour *</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            min={getTodayDate()}
                            max={getSixMonthsFromNow()}
                            {...field} 
                            className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="participants"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Number of Participants *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[#121212] border border-gray-700 text-white">
                            <SelectItem value="1">1 person</SelectItem>
                            <SelectItem value="2">2 people</SelectItem>
                            <SelectItem value="3">3 people</SelectItem>
                            <SelectItem value="4">4 people</SelectItem>
                            <SelectItem value="5">5 people</SelectItem>
                            <SelectItem value="6+">6+ people (group discount)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="tourType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-white">Tour Type *</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="group" id="group" className="text-primary" />
                            <label htmlFor="group" className="text-white">Group Tour</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="private" id="private" className="text-primary" />
                            <label htmlFor="private" className="text-white">Private Tour</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="notes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-white">Additional Notes</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special requirements or questions?" 
                          rows={4}
                          {...field} 
                          className="w-full bg-[#121212] border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? "Submitting..." : "Submit Reservation"}
                </Button>
              </form>
            </Form>
            
            {success && (
              <Alert className="bg-[#22C55E] bg-opacity-20 border border-[#22C55E] text-[#22C55E] p-4 rounded-lg mt-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 mt-1 mr-3" />
                  <div>
                    <AlertTitle>Reservation Successful!</AlertTitle>
                    <AlertDescription>Thank you for your reservation. We'll contact you shortly to confirm the details.</AlertDescription>
                  </div>
                </div>
              </Alert>
            )}
            
            {error && (
              <Alert className="bg-[#EF4444] bg-opacity-20 border border-[#EF4444] text-[#EF4444] p-4 rounded-lg mt-6">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 mt-1 mr-3" />
                  <div>
                    <AlertTitle>Something went wrong</AlertTitle>
                    <AlertDescription>Please check your information and try again. If the problem persists, please contact us directly.</AlertDescription>
                  </div>
                </div>
              </Alert>
            )}
          </div>
        </div>
        
        {/* Pricing Card */}
        <div className="md:col-span-1">
          <Card className="bg-[#1E1E1E] border-gray-700 shadow-lg">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-white">Tour Pricing</CardTitle>
              <CardDescription className="text-[#9CA3AF]">Group discounts available</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">1 person</span>
                  <span className="text-[#F59E0B] font-bold">250€ per person</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">2 people</span>
                  <span className="text-[#F59E0B] font-bold">160€ per person</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">3 people</span>
                  <span className="text-[#F59E0B] font-bold">130€ per person</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-700">
                  <span className="text-[#9CA3AF]">4+ people</span>
                  <span className="text-[#F59E0B] font-bold">110€ per person</span>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-md font-semibold text-white mb-3">Package Includes:</h4>
                <ul className="space-y-2 text-[#9CA3AF]">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                    <span>English speaking licensed tour guide</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                    <span>Pick up and drop off to hotel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                    <span>ORBEA LAUFEY H10 2025 bikes and helmet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                    <span>Local lunch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2 mt-0.5"><i className="fas fa-check-circle text-xs"></i></span>
                    <span>Emergency support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
