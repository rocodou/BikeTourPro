import GalleryPage from "@/components/gallery/GalleryPage";

const Gallery = () => {
  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Our Photo Gallery</h1>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-gray-300 mb-4">
            Explore the breathtaking landscapes of Cappadocia through our photo gallery. From stunning 
            fairy chimneys to panoramic valley views, these images showcase the magical experience 
            awaiting you on our bike tours.
          </p>
          <p className="text-gray-300">
            Click on any image to view it in full size. You can filter photos by category using the buttons below.
          </p>
        </div>
        
        <GalleryPage />
      </div>
    </section>
  );
};

export default Gallery;