import { useState, useEffect } from 'react';
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2
} from "lucide-react";

// Import photo constants 
const getGalleryImages = () => {
  // Use context to import all images
  const galleryImagesContext = import.meta.glob('/src/assets/gallery/*.webp');
  
  // Return the paths
  return Object.keys(galleryImagesContext).map(path => {
    // Extract filename from path
    const filename = path.split('/').pop() || '';
    return {
      path,
      filename,
      // Some images might be drone shots, landscapes, or people cycling
      category: filename.startsWith('DJI') ? 'drone' 
              : filename.includes('IMG') ? 'landscape' 
              : 'cycling'
    };
  });
};

const PhotoGallery = () => {
  const [galleryImages, setGalleryImages] = useState<{path: string, filename: string, category: string}[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [imageElements, setImageElements] = useState<{[key: string]: any}>({});

  useEffect(() => {
    // Get all gallery images
    const images = getGalleryImages();
    setGalleryImages(images);

    // Dynamically import the images
    const loadImages = async () => {
      const elements: {[key: string]: any} = {};
      
      for (const image of images) {
        try {
          // Import the image
          const imported = await import(/* @vite-ignore */ image.path);
          elements[image.path] = imported.default;
        } catch (error) {
          console.error(`Failed to load image: ${image.path}`, error);
        }
      }
      
      setImageElements(elements);
    };
    
    loadImages();
  }, []);

  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  const handleImageClick = (path: string, index: number) => {
    setSelectedImage(path);
    setSelectedIndex(index);
  };

  const handlePrevious = () => {
    if (selectedIndex > 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
      setSelectedImage(filteredImages[newIndex].path);
    }
  };

  const handleNext = () => {
    if (selectedIndex < filteredImages.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
      setSelectedImage(filteredImages[newIndex].path);
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

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Cappadocia Bike Tour Gallery
      </h2>
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Button 
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => setSelectedCategory(null)}
          className={selectedCategory === null ? "bg-primary" : ""}
        >
          All Photos
        </Button>
        <Button 
          variant={selectedCategory === 'drone' ? "default" : "outline"}
          onClick={() => setSelectedCategory('drone')}
          className={selectedCategory === 'drone' ? "bg-primary" : ""}
        >
          Drone Shots
        </Button>
        <Button 
          variant={selectedCategory === 'landscape' ? "default" : "outline"}
          onClick={() => setSelectedCategory('landscape')}
          className={selectedCategory === 'landscape' ? "bg-primary" : ""}
        >
          Landscapes
        </Button>
        <Button 
          variant={selectedCategory === 'cycling' ? "default" : "outline"}
          onClick={() => setSelectedCategory('cycling')}
          className={selectedCategory === 'cycling' ? "bg-primary" : ""}
        >
          Cycling
        </Button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <Dialog key={image.path}>
            <DialogTrigger asChild>
              <div 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => handleImageClick(image.path, index)}
              >
                {imageElements[image.path] ? (
                  <img 
                    src={imageElements[image.path]} 
                    alt={`Cappadocia tour - ${image.filename}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                    <span className="text-gray-400">Loading...</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl bg-black bg-opacity-90 border-gray-800" onKeyDown={handleKeyDown}>
              <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : ''}`}>
                {imageElements[image.path] ? (
                  <img 
                    src={imageElements[image.path]} 
                    alt={`Cappadocia tour - ${image.filename}`}
                    className={`max-h-[80vh] mx-auto ${isFullscreen ? 'max-w-screen max-h-screen object-contain' : ''}`}
                  />
                ) : (
                  <div className="w-full h-[60vh] bg-gray-800 animate-pulse flex items-center justify-center">
                    <span className="text-gray-400">Loading...</span>
                  </div>
                )}
                
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
    </div>
  );
};

export default PhotoGallery;