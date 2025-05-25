import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Kapadokya galeri resimleri
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
  {
    id: "img8",
    src: "https://images.unsplash.com/photo-1641571704764-8c65bc6f392f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cappadocia Valley",
    category: "drone"
  },
  {
    id: "img9",
    src: "https://images.unsplash.com/photo-1570127922889-cbf94e973cd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cappadocia Hot Air Balloons",
    category: "drone"
  },
  {
    id: "img10",
    src: "https://images.unsplash.com/photo-1607516683538-83e21a10f348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cappadocia Caves",
    category: "landscape"
  },
  {
    id: "img11",
    src: "https://images.unsplash.com/photo-1584636633449-6d6c60cb5610?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cappadocia Fairy Chimneys",
    category: "landscape"
  },
  {
    id: "img12",
    src: "https://images.unsplash.com/photo-1671140929122-603b0de09521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cappadocia Biking Trail",
    category: "cycling"
  },
  {
    id: "img13",
    src: "https://images.unsplash.com/photo-1658322689264-37dbe22f6adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Riding through valleys",
    category: "cycling"
  },
  {
    id: "img14",
    src: "https://images.unsplash.com/photo-1677695660249-c14e405b3561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Mountain biking in Cappadocia",
    category: "cycling"
  },
  {
    id: "img15",
    src: "https://images.unsplash.com/photo-1675421059803-ccd8c8d19593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Scenic routes of Cappadocia",
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