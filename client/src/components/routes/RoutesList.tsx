import RouteCard, { RouteInfo } from "./RouteCard";

const routes: RouteInfo[] = [
  {
    id: "goreme-valley-tour",
    name: "Göreme Valley Tour",
    difficulty: "easy",
    distance: "25 km",
    duration: "3 hours",
    description: "A relaxing ride through the unique fairy chimney landscapes of Göreme Valley, with stops at panoramic viewpoints and hidden cave churches.",
    image: "https://images.unsplash.com/photo-1640620708882-2bb28407f618?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "250€ (1 pax) / 160€ (2 pax) / 130€ (3 pax) / 110€ (4+ pax)",
    includes: [
      "English speaking licensed tour guide",
      "Pick up and drop off to hotel",
      "ORBEA LAUFEY H10 2025 bikes and helmet",
      "Local lunch",
      "Emergency support"
    ]
  },
  {
    id: "uchisar-pigeon-valley",
    name: "Uçhisar & Pigeon Valley",
    difficulty: "moderate",
    distance: "35 km",
    duration: "4 hours",
    description: "Pedal through the spectacular Pigeon Valley with its cave dwellings and climb to Uçhisar Castle for breathtaking panoramic views of Cappadocia.",
    image: "https://images.unsplash.com/photo-1580397581415-4263d2c1b0be?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "250€ (1 pax) / 160€ (2 pax) / 130€ (3 pax) / 110€ (4+ pax)",
    includes: [
      "English speaking licensed tour guide",
      "Pick up and drop off to hotel",
      "ORBEA LAUFEY H10 2025 bikes and helmet",
      "Local lunch",
      "Emergency support"
    ]
  },
  {
    id: "red-valley-adventure",
    name: "Red Valley Adventure",
    difficulty: "challenging",
    distance: "45 km",
    duration: "6 hours",
    description: "A thrilling adventure through the colorful Red and Rose Valleys with their stunning rock formations, vine vineyards, and ancient cave dwellings.",
    image: "https://images.unsplash.com/photo-1589307357824-64a9f95b9ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "250€ (1 pax) / 160€ (2 pax) / 130€ (3 pax) / 110€ (4+ pax)",
    includes: [
      "English speaking licensed tour guide",
      "Pick up and drop off to hotel",
      "ORBEA LAUFEY H10 2025 bikes and helmet",
      "Local lunch",
      "Emergency support"
    ]
  },
  {
    id: "love-valley-exploration",
    name: "Love Valley Exploration",
    difficulty: "moderate",
    distance: "30 km",
    duration: "4 hours",
    description: "Cycle through the iconic Love Valley with its unique tall, thin rock formations and explore the scenic vineyards and orchards of Cappadocia.",
    image: "https://images.unsplash.com/photo-1570330211009-ee3caf5efe44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "250€ (1 pax) / 160€ (2 pax) / 130€ (3 pax) / 110€ (4+ pax)",
    includes: [
      "English speaking licensed tour guide",
      "Pick up and drop off to hotel",
      "ORBEA LAUFEY H10 2025 bikes and helmet",
      "Local lunch",
      "Emergency support"
    ]
  },
  {
    id: "underground-city-tour",
    name: "Underground City & Soğanlı",
    difficulty: "challenging",
    distance: "50 km",
    duration: "7 hours",
    description: "An epic journey visiting the ancient Derinkuyu Underground City and the lesser-known Soğanlı Valley with its Byzantine rock-cut churches and cave villages.",
    image: "https://images.unsplash.com/photo-1523719185231-aff40a400361?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "250€ (1 pax) / 160€ (2 pax) / 130€ (3 pax) / 110€ (4+ pax)",
    includes: [
      "English speaking licensed tour guide",
      "Pick up and drop off to hotel",
      "ORBEA LAUFEY H10 2025 bikes and helmet",
      "Local lunch",
      "Emergency support"
    ]
  },
  {
    id: "ihlara-valley-ride",
    name: "Ihlara Valley Ride",
    difficulty: "moderate",
    distance: "40 km",
    duration: "5 hours",
    description: "Follow the tranquil path along the Melendiz River through the spectacular Ihlara Canyon, visiting ancient cave churches and experiencing stunning natural beauty.",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: "250€ (1 pax) / 160€ (2 pax) / 130€ (3 pax) / 110€ (4+ pax)",
    includes: [
      "English speaking licensed tour guide",
      "Pick up and drop off to hotel",
      "ORBEA LAUFEY H10 2025 bikes and helmet",
      "Local lunch",
      "Emergency support"
    ]
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
