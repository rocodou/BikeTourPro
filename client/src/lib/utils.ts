import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert date object to YYYY-MM-DD format
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

// Get today's date in YYYY-MM-DD format
export function getTodayDate(): string {
  return formatDate(new Date());
}

// Get date 6 months from now in YYYY-MM-DD format
export function getSixMonthsFromNow(): string {
  const date = new Date();
  date.setMonth(date.getMonth() + 6);
  return formatDate(date);
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Form validation
export function validateForm(formData: Record<string, any>): string[] {
  const errors: string[] = [];

  // Check required fields
  Object.entries(formData).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      errors.push(`${key} is required`);
    }
  });

  // Email validation
  if (formData.email && !isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  return errors;
}
