import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Home from "@/pages/Home";
import RoutesPage from "@/pages/RoutesPage";
import Contact from "@/pages/Contact";
import ReservationPage from "@/pages/ReservationPage";
import NotFound from "@/pages/not-found";
import SixDayTour from "@/pages/SixDayTour";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

function Router() {
  return (
    <Switch>
      <Route path="/">
        <PageTransition>
          <Home />
        </PageTransition>
      </Route>
      <Route path="/routes">
        <PageTransition>
          <RoutesPage />
        </PageTransition>
      </Route>
      <Route path="/contact">
        <PageTransition>
          <Contact />
        </PageTransition>
      </Route>
      <Route path="/reservation">
        <PageTransition>
          <ReservationPage />
        </PageTransition>
      </Route>
      <Route path="/6-day-tour">
        <PageTransition>
          <SixDayTour />
        </PageTransition>
      </Route>
      <Route>
        <PageTransition>
          <NotFound />
        </PageTransition>
      </Route>
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
