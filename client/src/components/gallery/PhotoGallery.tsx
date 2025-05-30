import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2,
  ChevronRight as NextIcon
} from "lucide-react";

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
    src: "https://images.unsplash.com/photo-1523297731179-6fb81051553d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  // Pagination calculations
  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleImageClick = (id: string, index: number) => {
    // Adjust index to account for pagination
    const globalIndex = startIndex + index;
    setSelectedImage(id);
    setSelectedIndex(globalIndex);
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(filteredImages[newIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(filteredImages[newIndex].id);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevious();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'Escape') {
      setSelectedImage(null);
    }
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
        {displayedImages.map((image, index) => (
          <Dialog key={image.id}>
            <DialogTitle className="sr-only">View Photo</DialogTitle>
            <DialogTrigger asChild>
              <div 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => handleImageClick(image.id, index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
            </Dialog.Trigger>
            <DialogContent 
              className="sm:max-w-4xl bg-black bg-opacity-90 border-gray-800" 
              onKeyDown={handleKeyDown}
              aria-describedby="gallery-item-description"
            >
              <div id="gallery-item-description" className="sr-only">Cappadocia bike tour photo gallery image</div>
              <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : ''}`}>
                <img 
                  src={filteredImages[selectedIndex]?.src} 
                  alt={filteredImages[selectedIndex]?.alt}
                  className={`max-h-[80vh] mx-auto ${isFullscreen ? 'max-w-screen max-h-screen object-contain' : ''}`}
                />
                
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button 
                    onClick={toggleFullscreen}
                    className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
                  >
                    <Maximize2 size={20} />
                  </button>
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <button 
                  onClick={handlePrevious}
                  disabled={selectedIndex === 0}
                  className={`absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200 ${selectedIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={handleNext}
                  disabled={selectedIndex === filteredImages.length - 1}
                  className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-all duration-200 ${selectedIndex === filteredImages.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </DialogContent>
          </Dialog>
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
            Next <NextIcon className="ml-1" size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;