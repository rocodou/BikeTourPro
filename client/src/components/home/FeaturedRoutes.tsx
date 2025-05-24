import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type RoutePreview = {
  id: string;
  name: string;
  shortDescription: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  image: string;
};

const featuredRoutes: RoutePreview[] = [
  {
    id: "goreme-valley-tour",
    name: "Göreme Valley Tour",
    shortDescription: "Experience the iconic fairy chimneys and cave churches on this family-friendly route.",
    difficulty: "easy",
    image: "https://images.unsplash.com/photo-1640620708882-2bb28407f618?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "red-valley-adventure",
    name: "Red Valley Adventure",
    shortDescription: "Challenging ride through vibrant colored canyons with breathtaking panoramic views.",
    difficulty: "challenging",
    image: "https://images.unsplash.com/photo-1589307357824-64a9f95b9ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  },
  {
    id: "love-valley-exploration",
    name: "Love Valley Exploration",
    shortDescription: "Moderate terrain through unique rock formations and traditional Cappadocian villages.",
    difficulty: "moderate",
    image: "https://images.unsplash.com/photo-1570330211009-ee3caf5efe44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
  }
];

const FeaturedRoutes = () => {
  // Get the correct CSS class for difficulty badge
  const getDifficultyClass = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'difficulty-easy';
      case 'moderate':
        return 'difficulty-moderate';
      case 'challenging':
        return 'difficulty-challenging';
      default:
        return 'difficulty-moderate';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Popular Cappadocia Routes</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our most popular bike tours through the magical landscapes of Cappadocia, 
            featuring unique geological formations and ancient historical sites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredRoutes.map((route) => (
            <Card key={route.id} className="overflow-hidden bg-[#1E1E1E] border-gray-800 hover:border-primary transition-all duration-300 h-full">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <span className={`difficulty-badge ${getDifficultyClass(route.difficulty)}`}>
                    {route.difficulty.charAt(0).toUpperCase() + route.difficulty.slice(1)}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{route.name}</h3>
                <p className="text-gray-400 mb-4">{route.shortDescription}</p>
                <Link href={`/routes#${route.id}`} className="text-primary hover:text-primary/80 font-medium flex items-center">
                  View Details <span className="ml-1">→</span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 px-8 py-6 text-base">
            <Link href="/routes">Explore All Routes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoutes;