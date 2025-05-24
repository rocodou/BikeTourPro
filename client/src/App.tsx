import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Routes from "@/pages/Routes";
import Contact from "@/pages/Contact";
import Reservation from "@/pages/Reservation";
import NotFound from "@/pages/not-found";
import SixDayTour from "@/pages/SixDayTour";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/routes" component={Routes} />
      <Route path="/contact" component={Contact} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/6-day-tour" component={SixDayTour} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Function to handle fade-in effect on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const checkFade = () => {
      const triggerBottom = window.innerHeight * 0.8;
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initial check
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    return () => {
      window.removeEventListener('scroll', checkFade);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Navbar />
        <main>
          <Router />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
