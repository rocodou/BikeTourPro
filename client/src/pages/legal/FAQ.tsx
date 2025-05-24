import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

const FAQ = () => {
  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">Frequently Asked Questions</h1>
        
        <div className="bg-[#1E1E1E] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 mb-8">
          <Accordion type="single" collapsible className="w-full">
            {/* General Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">General Questions</h2>
              
              <AccordionItem value="item-1" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">What is the best time of year to visit Cappadocia for cycling?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>The best times to visit Cappadocia for cycling are spring (April to June) and fall (September to November). During these seasons, the weather is pleasant with mild temperatures, making it ideal for outdoor activities. Summer (July and August) can be quite hot, while winter (December to March) can be cold with possible snow, though winter cycling tours are still available with proper equipment.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Do I need to be an experienced cyclist to join your tours?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Not at all! We offer tours for all skill levels, from beginners to advanced cyclists. Our routes are clearly marked with difficulty levels (easy, moderate, challenging), so you can choose the one that best matches your experience and fitness level. Our guides are trained to accommodate cyclists of varying abilities, ensuring everyone has an enjoyable experience.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">What is included in the tour price?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Our tour prices include:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Professional English-speaking licensed guide</li>
                    <li>Hotel pickup and drop-off service</li>
                    <li>High-quality ORBEA LAUFEY H10 2025 bikes</li>
                    <li>Helmets and safety equipment</li>
                    <li>Water and snacks during the ride</li>
                    <li>Lunch at a local restaurant</li>
                    <li>Emergency support vehicle</li>
                    <li>All taxes and fees</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">How large are your tour groups?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Our standard group tours typically have 4-8 participants to ensure quality service and personal attention. For a more exclusive experience, we also offer private tours for individuals, couples, or your own group. Larger groups of 10+ people can be accommodated with advance notice, and we offer special group rates.</p>
                </AccordionContent>
              </AccordionItem>
            </div>
            
            {/* Booking & Reservations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Booking & Reservations</h2>
              
              <AccordionItem value="item-5" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">How far in advance should I book a tour?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>We recommend booking at least 2-3 weeks in advance, especially during the peak seasons (May-June and September-October). This ensures availability and gives us time to arrange all necessary details for your tour. For last-minute bookings, please contact us directly via WhatsApp or email, and we'll do our best to accommodate your request based on availability.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">What is your cancellation policy?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Our cancellation policy is as follows:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Cancellations made more than 30 days before the tour date: full refund minus a 10% administrative fee</li>
                    <li>Cancellations made 15-30 days before the tour date: 50% refund</li>
                    <li>Cancellations made less than 15 days before the tour date: no refund</li>
                  </ul>
                  <p className="mt-2">We understand that plans can change unexpectedly, so we do our best to be flexible. Please contact us as soon as possible if you need to modify or cancel your booking. We strongly recommend purchasing travel insurance to cover unforeseen cancellations.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Do you offer discounts for larger groups?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Yes, we offer progressive discounts based on group size:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>1 person: 250€ per person</li>
                    <li>2 people: 160€ per person</li>
                    <li>3 people: 130€ per person</li>
                    <li>4+ people: 110€ per person</li>
                  </ul>
                  <p className="mt-2">For groups larger than 10 people, please contact us directly for special rates and customized tour options.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Can I request a specific guide for my tour?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Yes, if you've toured with us before and would like to request a specific guide, please mention this in the "Notes" section when making your reservation. While we cannot guarantee availability, we'll do our best to accommodate your request. All our guides are licensed professionals with extensive knowledge of the region and cycling experience.</p>
                </AccordionContent>
              </AccordionItem>
            </div>
            
            {/* Equipment & Preparation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Equipment & Preparation</h2>
              
              <AccordionItem value="item-9" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">What type of bikes do you provide?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>We provide high-quality ORBEA LAUFEY H10 2025 mountain bikes that are perfect for Cappadocia's diverse terrain. These bikes feature:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Lightweight aluminum frames</li>
                    <li>Front suspension forks</li>
                    <li>Hydraulic disc brakes</li>
                    <li>Wide-range gearing for climbing hills</li>
                    <li>Comfortable saddles</li>
                  </ul>
                  <p className="mt-2">We have different frame sizes available to ensure a proper fit for all riders. If you're an avid cyclist and prefer to bring your own bike, you're welcome to do so (please let us know in advance).</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">What should I wear and bring on the tour?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>We recommend wearing:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Comfortable athletic clothing suitable for the season</li>
                    <li>Closed-toe shoes (athletic or cycling shoes)</li>
                    <li>Sunglasses and sunscreen (even in cooler months)</li>
                    <li>Light jacket or windbreaker (mornings can be cool)</li>
                  </ul>
                  <p className="mt-2">We provide helmets, but you're welcome to bring your own if you prefer. We also suggest bringing:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Camera or smartphone for photos</li>
                    <li>Small backpack or fanny pack</li>
                    <li>Personal medications if needed</li>
                  </ul>
                  <p className="mt-2">Water, snacks, and lunch are provided on all tours.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-11" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">How physically demanding are the tours?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Our tours vary in difficulty:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li><strong>Easy tours:</strong> 15-25 km with minimal elevation gain, suitable for beginners and families with children</li>
                    <li><strong>Moderate tours:</strong> 25-40 km with some hills, suitable for recreational cyclists with some experience</li>
                    <li><strong>Challenging tours:</strong> 40-60 km with significant elevation gain, suitable for experienced cyclists</li>
                  </ul>
                  <p className="mt-2">All tours include regular breaks for rest, water, and photo opportunities. Our support vehicle is always nearby if you need to take a break or cut the ride short.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-12" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Do you offer e-bikes or bikes for children?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Yes, we offer e-bikes at an additional cost of 30€ per day. E-bikes are excellent for those who want to enjoy the scenery without the full physical exertion or for couples/groups with varying fitness levels.</p>
                  <p className="mt-2">For children, we provide:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Small-frame bikes for children ages 10 and up</li>
                    <li>Tag-along attachments for children ages 4-9</li>
                    <li>Child seats for toddlers (ages 1-3)</li>
                  </ul>
                  <p className="mt-2">Please specify any special bike requirements when making your reservation.</p>
                </AccordionContent>
              </AccordionItem>
            </div>
            
            {/* Tour Experience */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Tour Experience</h2>
              
              <AccordionItem value="item-13" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Will we have time to take photos during the tour?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Absolutely! We understand that Cappadocia's landscapes are breathtaking and photo-worthy. Our guides will stop at scenic viewpoints and interesting locations throughout the tour, giving you plenty of opportunities to take photos. We never rush through the experience and ensure you have time to appreciate and capture the beauty of the region.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-14" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Can you accommodate dietary restrictions on your tours?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Yes, we can accommodate most dietary restrictions and preferences. Please inform us of any special dietary needs (vegetarian, vegan, gluten-free, allergies, etc.) when booking your tour. We work with local restaurants that can provide options for various dietary requirements. For very specific or strict dietary needs, please contact us in advance so we can make proper arrangements.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-15" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">What happens if it rains on the day of our tour?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Light rain doesn't typically affect our tours – we'll provide rain jackets if needed. In case of heavy rain or severe weather, we'll contact you to discuss options:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Rescheduling to another day during your stay</li>
                    <li>Modifying the route or duration</li>
                    <li>Offering a full refund if no alternative is possible</li>
                  </ul>
                  <p className="mt-2">Safety is our priority, and we monitor weather conditions closely. Cappadocia typically has very good weather, so rain cancellations are rare.</p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-16" className="border-b border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary py-4">Can we combine a bike tour with other activities in Cappadocia?</AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-4">
                  <p>Yes, we offer combination packages that include:</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>Hot air balloon rides + afternoon bike tour</li>
                    <li>Morning bike tour + evening Turkish night show</li>
                    <li>Multi-day packages with different activities each day</li>
                  </ul>
                  <p className="mt-2">We can also help arrange other popular activities like horseback riding, ATV tours, or pottery workshops to complement your cycling adventure. Contact us for custom itineraries that maximize your Cappadocia experience.</p>
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
          
          <div className="mt-10 border-t border-gray-700 pt-6">
            <h3 className="text-xl font-bold mb-4 text-white">Still have questions?</h3>
            <p className="text-gray-300 mb-4">
              If you couldn't find the answer to your question, please don't hesitate to contact us. We're here to help make your Cappadocia cycling experience memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-lg inline-block transition-colors duration-300">
                Contact Us
              </Link>
              <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white py-2 px-6 rounded-lg inline-block transition-colors duration-300">
                WhatsApp Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;