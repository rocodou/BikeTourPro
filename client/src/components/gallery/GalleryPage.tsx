import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Kapadokya galeri resimleri - tümü yerel dosyalardan
const galleryImages = [
  {
    id: "img1",
    src: "/images/routes/goreme-valley-tour.webp",
    alt: "Göreme Valley Tour",
    category: "landscape"
  },
  {
    id: "img2",
    src: "/images/routes/red-valley-adventure.webp",
    alt: "Red Valley Adventure",
    category: "landscape"
  },
  {
    id: "img3",
    src: "/images/routes/love-valley-exploration.webp",
    alt: "Love Valley Exploration",
    category: "landscape"
  },
  {
    id: "img4",
    src: "/images/routes/uchisar-pigeon-valley.webp",
    alt: "Uçhisar & Pigeon Valley",
    category: "landscape"
  },
  {
    id: "img5",
    src: "/images/routes/underground-city-tour.webp",
    alt: "Underground City Tour",
    category: "cycling"
  },
  {
    id: "img6",
    src: "/images/routes/ihlara-valley-ride.webp",
    alt: "Ihlara Valley Ride",
    category: "cycling"
  },
  {
    id: "img7",
    src: "/images/about/cycling-cappadocia.webp",
    alt: "Cappadocia Landscape",
    category: "drone"
  },
  // Aşağıdaki 8 resim rotaların kopyaları olacak - çeşitlilik için farklı kategorilerde
  {
    id: "img8",
    src: "/images/routes/red-valley-adventure.webp",
    alt: "Red Valley Views",
    category: "drone"
  },
  {
    id: "img9",
    src: "/images/routes/goreme-valley-tour.webp",
    alt: "Göreme Valley Panorama",
    category: "drone"
  },
  {
    id: "img10",
    src: "/images/routes/underground-city-tour.webp",
    alt: "Underground City Entrance",
    category: "landscape"
  },
  {
    id: "img11",
    src: "/images/routes/uchisar-pigeon-valley.webp",
    alt: "Uçhisar Panorama",
    category: "landscape"
  },
  {
    id: "img12",
    src: "/images/routes/ihlara-valley-ride.webp",
    alt: "Ihlara Valley Trail",
    category: "cycling"
  },
  {
    id: "img13",
    src: "/images/routes/goreme-valley-tour.webp",
    alt: "Biking in Göreme",
    category: "cycling"
  },
  {
    id: "img14",
    src: "/images/routes/love-valley-exploration.webp",
    alt: "Love Valley Cycling Path",
    category: "cycling"
  },
  {
    id: "img15",
    src: "/images/routes/red-valley-adventure.webp",
    alt: "Red Valley Sunset",
    category: "landscape"
  }
];

const ITEMS_PER_PAGE = 8;

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  // Pagination calculations
  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleImageClick = (src: string) => {
    window.open(src, '_blank');
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Cappadocia Bike Tour Gallery
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button 
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => {
            setSelectedCategory(null);
            setCurrentPage(1);
          }}
          className={selectedCategory === null ? "bg-primary" : ""}
        >
          All Photos
        </Button>
        <Button 
          variant={selectedCategory === 'drone' ? "default" : "outline"}
          onClick={() => {
            setSelectedCategory('drone');
            setCurrentPage(1);
          }}
          className={selectedCategory === 'drone' ? "bg-primary" : ""}
        >
          Drone Shots
        </Button>
        <Button 
          variant={selectedCategory === 'landscape' ? "default" : "outline"}
          onClick={() => {
            setSelectedCategory('landscape');
            setCurrentPage(1);
          }}
          className={selectedCategory === 'landscape' ? "bg-primary" : ""}
        >
          Landscapes
        </Button>
        <Button 
          variant={selectedCategory === 'cycling' ? "default" : "outline"}
          onClick={() => {
            setSelectedCategory('cycling');
            setCurrentPage(1);
          }}
          className={selectedCategory === 'cycling' ? "bg-primary" : ""}
        >
          Cycling
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {displayedImages.map((image) => (
          <div 
            key={image.id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
            onClick={() => handleImageClick(image.src)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                View Full Size
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            variant="outline"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
          >
            <ChevronLeft className="mr-1" size={16} /> Previous
          </Button>
          
          <span className="text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          
          <Button
            variant="outline"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}
          >
            Next <ChevronRight className="ml-1" size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;