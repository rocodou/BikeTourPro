import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" })
});

type NewsletterFormValues = z.infer<typeof formSchema>;

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);

    try {
      // Call the API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        form.reset();
        toast({
          title: "Subscription successful!",
          description: "Thank you for subscribing to our newsletter.",
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      toast({
        title: "Subscription failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="newsletter-form">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input 
                    placeholder="Your email address" 
                    type="email"
                    {...field} 
                    className="bg-[#121212] border border-gray-700 rounded-l-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300" 
                  />
                </FormControl>
                <FormMessage className="absolute mt-1 text-xs" />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-r-lg transition-colors duration-300"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterForm;