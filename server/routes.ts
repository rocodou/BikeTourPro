import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

// Define schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

// Define schema for reservation form
const reservationFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  route: z.string(),
  date: z.string(),
  participants: z.string(),
  tourType: z.enum(["group", "private"]),
  notes: z.string().optional(),
});

// Define schema for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Process contact form (in a real app, you might send an email or save to DB)
      // For now, we'll just return success
      
      res.status(200).json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Reservation form submission
  app.post('/api/reservation', async (req, res) => {
    try {
      const validatedData = reservationFormSchema.parse(req.body);
      
      // Process reservation (in a real app, you might create a booking in DB)
      // For now, we'll just return success
      
      res.status(200).json({ 
        success: true, 
        message: "Reservation submitted successfully",
        reservationId: `RES-${Date.now()}`
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  // Newsletter subscription
  app.post('/api/newsletter', async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      
      // Process newsletter subscription (in a real app, you might add to a mailing list)
      // For now, we'll just return success
      
      res.status(200).json({ 
        success: true, 
        message: "Newsletter subscription successful" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while processing your request" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
