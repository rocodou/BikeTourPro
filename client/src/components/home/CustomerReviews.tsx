import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Review = {
  id: number;
  name: string;
  country: string;
  rating: number;
  text: string;
  date: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    country: "United States",
    rating: 5,
    text: "An absolutely unforgettable experience! The stunning landscapes of Cappadocia are even more magical when explored by bike. Our guide Ismail was incredibly knowledgeable and made sure everyone in our group was comfortable. The routes were perfectly chosen to show both the famous sites and hidden gems that most tourists miss.",
    date: "April 15, 2023"
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    text: "The best way to experience Cappadocia! The bikes were high quality and well-maintained. Our guide knew all the perfect spots for photos and shared fascinating stories about the region's history and geology. The picnic lunch in a secluded valley was a highlight - delicious local food with an incredible view!",
    date: "May 22, 2023"
  },
  {
    id: 3,
    name: "Emma Wilson",
    country: "Australia",
    rating: 5,
    text: "I was a bit nervous about the difficulty level as I'm not an experienced cyclist, but I needn't have worried. The tour was perfectly paced with plenty of stops. The fairy chimneys and cave churches were breathtaking, and cycling through the valleys gave us access to places tour buses can't reach. Highly recommended!",
    date: "June 10, 2023"
  },
  {
    id: 4,
    name: "Tomas Schmidt",
    country: "Germany",
    rating: 5,
    text: "As an avid cyclist, I appreciated the quality of the bikes and the well-planned routes. Cappadocia's terrain offers a perfect mix of challenges and rewards. Our guide was excellent - professional, friendly, and accommodating to everyone's needs. The support vehicle was always nearby, though we never needed it.",
    date: "July 5, 2023"
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    country: "Japan",
    rating: 5,
    text: "A magical way to explore this unique landscape! The early morning start was worth it to see the hot air balloons rising while we cycled through the valleys. The tour was well-organized from start to finish, and they provided everything we needed. I'll never forget watching the sunset from Rose Valley after a day of cycling.",
    date: "August 18, 2023"
  }
];

const CustomerReviews = () => {
  const [expandedReviews, setExpandedReviews] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    if (expandedReviews.includes(id)) {
      setExpandedReviews(expandedReviews.filter(reviewId => reviewId !== id));
    } else {
      setExpandedReviews([...expandedReviews, id]);
    }
  };

  const isExpanded = (id: number) => expandedReviews.includes(id);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <svg 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Customers Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover why cyclists from around the world choose our tours for their Cappadocia adventure.
          </p>
        </div>
        
        <div className="hidden md:block">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full bg-[#1E1E1E] border-gray-800 hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-300 mb-4 line-clamp-4">
                        "{review.text}"
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-800">
                        <p className="font-semibold text-white">{review.name}</p>
                        <p className="text-sm text-gray-400">{review.country}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static" />
              <CarouselNext className="relative static" />
            </div>
          </Carousel>
        </div>
        
        <div className="md:hidden space-y-4">
          {reviews.slice(0, 3).map((review) => (
            <Card key={review.id} className="bg-[#1E1E1E] border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-300 mb-3">
                  {isExpanded(review.id) ? review.text : `${review.text.substring(0, 100)}...`}
                </p>
                <Button 
                  variant="link" 
                  onClick={() => toggleExpand(review.id)} 
                  className="p-0 h-auto text-primary hover:text-primary/80"
                >
                  {isExpanded(review.id) ? 'Read less' : 'Read more'}
                </Button>
                <div className="mt-3 pt-3 border-t border-gray-800">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.country}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild className="bg-transparent border border-primary hover:bg-primary/10 text-primary">
            <a href="#" className="inline-flex items-center">
              See All Reviews
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;