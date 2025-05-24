import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { scrollToElement } from "@/lib/utils";

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
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-500 hover:bg-green-600';
      case 'moderate':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'challenging':
        return 'bg-red-500 hover:bg-red-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  const handleViewAllRoutes = () => {
    scrollToElement('routes');
  };

  return (
    <section className="py-16 bg-black/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Popular Cappadocia Routes</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our most popular bike tours through the magical landscapes of Cappadocia, 
            featuring unique geological formations and ancient historical sites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {featuredRoutes.map((route) => (
            <Card key={route.id} className="overflow-hidden bg-gray-900 border-gray-800 hover:border-primary transition-all duration-300 h-full">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <Badge className={`absolute top-2 right-2 ${getDifficultyColor(route.difficulty)}`}>
                  {route.difficulty.charAt(0).toUpperCase() + route.difficulty.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-bold mb-2 text-white">{route.name}</h3>
                <p className="text-gray-400 mb-4">{route.shortDescription}</p>
                <Link href={`/routes#${route.id}`} className="text-primary hover:text-blue-400 font-medium transition-colors duration-300">
                  View Details →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/routes" className="inline-flex items-center bg-primary hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 text-lg font-medium">
            Explore All Routes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoutes;