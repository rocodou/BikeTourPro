import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import Home from "@/pages/Home";
import RoutesPage from "@/pages/RoutesPage";
import Contact from "@/pages/Contact";
import ContactPage from "@/pages/ContactPage";
import ReservationPage from "@/pages/ReservationPage";
import NotFound from "@/pages/not-found";
import SixDayTour from "@/pages/SixDayTour";
import AboutUs from "@/pages/AboutUs";
import Gallery from "@/pages/Gallery";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";
import TermsOfService from "@/pages/legal/TermsOfService";
import FAQ from "@/pages/legal/FAQ";
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
          <ContactPage />
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
      <Route path="/about-us">
        <PageTransition>
          <AboutUs />
        </PageTransition>
      </Route>
      <Route path="/gallery">
        <PageTransition>
          <Gallery />
        </PageTransition>
      </Route>
      <Route path="/privacy-policy">
        <PageTransition>
          <PrivacyPolicy />
        </PageTransition>
      </Route>
      <Route path="/terms-of-service">
        <PageTransition>
          <TermsOfService />
        </PageTransition>
      </Route>
      <Route path="/faq">
        <PageTransition>
          <FAQ />
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
        <main className="min-h-screen">
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
