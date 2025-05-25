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

// Define some sample image names
const galleryImageNames = [
  'DJI_0046.webp',
  'DJI_0049.webp',
  'DJI_0050.webp',
  'DJI_0051.webp',
  'IMG_0336.webp',
  'IMG_0358.webp',
  'IMG_1230.webp',
  'IMG_1301.webp',
  'IMG_1355.webp',
  '20190328_064352.webp',
  '20190330_103537.webp',
  '20190404_062339.webp',
  '20190404_062551.webp',
  '20190404_063050.webp',
  '20190404_063053.webp',
  '20190404_063747.webp',
  '20190404_063752.webp',
  '20190405_113020.webp',
  '20190503_072121.webp',
  '20190503_073439.webp',
  '20190503_073705.webp',
  '20190503_073953.webp',
  '20190520_165112.webp',
  '20190808_103522.webp',
  '20190916_152935.webp',
  '20191018_105901.webp',
  '20201115_105152.webp',
  '20201115_114000.webp',
  '20210430_171330.webp'
];

// Placeholder images from Unsplash for Cappadocia
const placeholderImages = [
  'https://images.unsplash.com/photo-1570127922889-cbf94e973cd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1607516683538-83e21a10f348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1641571704764-8c65bc6f392f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1523297731179-6fb81051553d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1584636633449-6d6c60cb5610?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1641571702293-99d75d487093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1658322689264-37dbe22f6adf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1640622657946-9c6ef5849424?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1677695660249-c14e405b3561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1657735312096-3a6d9202f48c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1675421059803-ccd8c8d19593?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1603137071762-802f6a51daea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1671140929122-603b0de09521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1640622299541-8c8ab8a098f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1674922934299-3bc50c3bbd37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
];

// Function to prepare gallery data
const prepareGalleryData = () => {
  return placeholderImages.map((url, index) => {
    const imageName = `cappadocia-${index + 1}.jpg`;
    
    // Categorize images
    const category = index % 3 === 0 ? 'drone' 
                   : index % 3 === 1 ? 'landscape' 
                   : 'cycling';
    
    return {
      id: `img-${index}`,
      url,
      name: imageName,
      category
    };
  });
};

const PhotoGallery = () => {
  const [galleryImages, setGalleryImages] = useState<{id: string, url: string, name: string, category: string}[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    // Prepare gallery data
    const images = prepareGalleryData();
    setGalleryImages(images);
  }, []);

  const filteredImages = selectedCategory 
    ? galleryImages.filter(img => img.category === selectedCategory)
    : galleryImages;

  const handleImageClick = (id: string, index: number) => {
    setSelectedImage(id);
    setSelectedIndex(index);
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
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div 
                className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
                onClick={() => handleImageClick(image.id, index)}
              >
                <img 
                  src={image.url} 
                  alt={`Cappadocia tour - ${image.name}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl bg-black bg-opacity-90 border-gray-800" onKeyDown={handleKeyDown}>
              <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black flex items-center justify-center' : ''}`}>
                <img 
                  src={filteredImages[selectedIndex]?.url || image.url} 
                  alt={`Cappadocia tour - ${filteredImages[selectedIndex]?.name || image.name}`}
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
    </div>
  );
};

export default PhotoGallery;