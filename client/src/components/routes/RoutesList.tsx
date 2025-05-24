import RouteCard, { RouteInfo } from "./RouteCard";

const routes: RouteInfo[] = [
  {
    id: "coastal-explorer",
    name: "Coastal Explorer",
    difficulty: "easy",
    distance: "25 km",
    duration: "3 hours",
    description: "A relaxing ride along stunning coastal paths with breathtaking ocean views, beach stops, and seaside villages.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "$49 / person"
  },
  {
    id: "forest-adventure",
    name: "Forest Adventure",
    difficulty: "moderate",
    distance: "40 km",
    duration: "5 hours",
    description: "Immerse yourself in nature as you ride through ancient forests, discover hidden waterfalls, and spot local wildlife.",
    image: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "$69 / person"
  },
  {
    id: "mountain-challenge",
    name: "Mountain Challenge",
    difficulty: "challenging",
    distance: "60 km",
    duration: "7 hours",
    description: "A thrilling adventure for experienced cyclists with steep climbs, technical descents, and unforgettable panoramic views.",
    image: "https://images.unsplash.com/photo-1503669678209-c68d00b3765d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "$89 / person"
  },
  {
    id: "vineyard-tour",
    name: "Vineyard Tour",
    difficulty: "easy",
    distance: "30 km",
    duration: "4 hours",
    description: "Cycle through picturesque vineyards and rolling hills, with stops at local wineries for tastings and gourmet experiences.",
    image: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "$79 / person"
  },
  {
    id: "historic-tour",
    name: "Historic Tour",
    difficulty: "easy",
    distance: "20 km",
    duration: "3 hours",
    description: "Discover the region's rich heritage on this leisurely ride through historic sites, ancient architecture, and cultural landmarks.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "$59 / person"
  },
  {
    id: "riverside-ride",
    name: "Riverside Ride",
    difficulty: "moderate",
    distance: "45 km",
    duration: "5 hours",
    description: "Follow the gentle flow of the river through varied landscapes, charming villages, and peaceful natural settings.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "$65 / person"
  }
];

const RoutesList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {routes.map((route) => (
        <RouteCard key={route.id} route={route} />
      ))}
    </div>
  );
};

export default RoutesList;
