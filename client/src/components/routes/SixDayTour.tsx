import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Bike, Tent, Clock } from "lucide-react";

const SixDayTour = () => {
  // Define the tour days data
  const tourDays = [
    {
      day: "Day 1",
      title: "Göreme – Soğanlı Valley",
      route: "Göreme - Çavuşin - Ürgüp - Ortahisar - Mustafapaşa - Cemil - Taşkınpaşa - Şahinefendi - Derbentbaşı - Başköy - Güzelöz - Soğanlı",
      distance: "75 km",
      ascent: "1400 m",
      descent: "1200 m",
      description: "Starting from the heart of Cappadocia, this stage takes you through the historic villages of Çavuşin and Ürgüp to the charming town of Mustafapaşa. From there, rural backroads lead through Cemil and Taşkınpaşa to the lesser-known but stunning landscapes of Şahinefendi and Derbentbaşı, ending in Soğanlı Valley. Expect ancient ruins, old Greek villages, and scenic valleys.",
      accommodation: "Camping or Guesthouse (optional, reservation available upon request)"
    },
    {
      day: "Day 2",
      title: "Soğanlı – Çukurbağ (Foothills of Aladağlar)",
      route: "Soğanlı - Araplı - Doğanlı - Dikilitaş - İçmeli - Kocapınar - Orhaniye - Bademdere - Pınarbaşı - Demirkazık - Çukurbağ",
      distance: "75 km",
      ascent: "1100 m",
      descent: "950 m",
      description: "Start your day in the tranquil atmosphere of Soğanlı. Cycle through traditional Anatolian villages such as Araplı, Doğanlı, and Kocapınar, enjoying remote roads and natural beauty. As you approach the foothills of the Aladağlar Mountains, the landscape becomes more rugged. Finish the day with views of Demirkazık Mountain.",
      accommodation: "Camping or Guesthouse (optional, reservation available upon request)"
    },
    {
      day: "Day 3",
      title: "Çukurbağ – Çiftlik",
      route: "Çukurbağ - Çamardı - Üçkapılı - Niğde - Yeşilöz - Tepeköy - Azatlı - Çiftlik",
      distance: "90 km",
      ascent: "2250 m",
      descent: "2100 m",
      description: "One of the toughest days of the tour. Begin at the base of Aladağlar and ride toward Niğde, crossing mountain passes such as Üçkapılı. Descend through Tepeköy and Azatlı. This challenging stage rewards you with jaw-dropping mountain views and rich cultural encounters.",
      accommodation: "Camping or Guesthouse (optional, reservation available upon request)"
    },
    {
      day: "Day 4",
      title: "Çiftlik – Selime (Ihlara Valley)",
      route: "Çiftlik - Kula - Mahmutlu - Kitreli - Ihlara - Ilısu - Güzelyurt - Belisırma - Ihlara Valley - Selime",
      distance: "55 km",
      ascent: "900 m",
      descent: "1300 m",
      description: "Today's highlight is the majestic Ihlara Valley. Cycle through scenic villages like Güzelyurt and Belisırma to reach Selime. Though shorter, this stage is rich in nature and history—perfect for those seeking a balance of adventure and culture.",
      accommodation: "Camping or Guesthouse (optional, reservation available upon request)"
    },
    {
      day: "Day 5",
      title: "Selime – Derinkuyu (Underground Cities)",
      route: "Selime - Aşıklı Höyük - Kızılkaya - Demirci - Alanyurt - Gaziemir(Underground City) - Sofular - Gösterli - Yazıhüyük - Derinkuyu(Underground City)",
      distance: "62 km",
      ascent: "800 m",
      descent: "600 m",
      description: "Begin at the archaeological site of Aşıklı Höyük and pass through historic towns like Kızılkaya, Alanyurt, and Gaziemir. End the day at Derinkuyu, home to one of the region's most famous underground cities. This stage is filled with ancient wonders and perfect photo spots.",
      accommodation: "Hotel or Guesthouse (optional, reservation available upon request)"
    },
    {
      day: "Day 6",
      title: "Derinkuyu – Göreme (Final Stage)",
      route: "Derinkuyu - Kaymaklı(Underground City) - Kavak - Uçhisar - Göreme",
      distance: "42 km",
      ascent: "550 m",
      descent: "800 m",
      description: "The final ride takes you through Kaymaklı Underground City and up to Uçhisar via Kavak Village. Enjoy breathtaking views from Pigeon Valley and Uçhisar Castle before descending into Göreme. A fitting end to an unforgettable adventure in Cappadocia.",
      accommodation: "Tour Finish: Göreme"
    }
  ];

  return (
    <div className="py-12 bg-gray-900 rounded-xl border border-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">6-Day Self-Guided Gravel Bike Tour</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Explore Greater Cappadocia</p>
        </div>

        <div className="mb-8 bg-gray-800/50 p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Tour Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Start & End Point: Göreme</span>
            </div>
            <div className="flex items-center gap-2">
              <Bike className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Tour Type: Self-Guided (GPX-Supported)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Duration: 6 Days / 5 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <Tent className="h-5 w-5 text-primary" />
              <span className="text-gray-300">Style: Bikepacking</span>
            </div>
          </div>
          
          <h4 className="text-xl font-semibold mb-2 text-white">What's Included:</h4>
          <ul className="list-disc pl-5 text-gray-300 mb-6 space-y-1">
            <li>Orbea Laufey H10 bike rental (50€/day)</li>
            <li>Helmet, water bottle, spare parts, and repair kit</li>
            <li>GPX files & daily route briefings</li>
            <li>Emergency support line</li>
            <li>Pre-tour technical and navigation briefing</li>
          </ul>
          
          <p className="text-yellow-400 italic">
            Note: This price includes only bike rental. Hostel accommodations are optional and can be reserved upon request.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-white">Daily Itinerary</h3>
          
          <Accordion type="single" collapsible className="w-full">
            {tourDays.map((day, index) => (
              <AccordionItem key={index} value={`day-${index+1}`} className="border-gray-700">
                <AccordionTrigger className="text-white hover:text-primary text-lg font-medium py-4">
                  <div className="flex justify-between items-center w-full pr-4">
                    <span>{day.day}: {day.title}</span>
                    <Badge variant="outline" className="ml-2 bg-blue-900/30 text-blue-300 border-blue-700">
                      {day.distance}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6">
                  <Card className="bg-gray-800/30 border-gray-700">
                    <CardContent className="p-5">
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Route:</h4>
                        <p className="text-gray-400">{day.route}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <span className="text-white font-semibold">Distance:</span>
                          <span className="text-gray-400 ml-2">{day.distance}</span>
                        </div>
                        <div>
                          <span className="text-white font-semibold">Ascent:</span>
                          <span className="text-gray-400 ml-2">{day.ascent}</span>
                        </div>
                        <div>
                          <span className="text-white font-semibold">Descent:</span>
                          <span className="text-gray-400 ml-2">{day.descent}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Description:</h4>
                        <p className="text-gray-400">{day.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Accommodation:</h4>
                        <p className="text-gray-400">{day.accommodation}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/reservation?tour=self-guided" className="inline-flex items-center bg-primary hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 text-lg font-medium">
            Book This Tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default SixDayTour;