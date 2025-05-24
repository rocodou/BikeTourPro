import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample tour image URLs
const tourImages = [
  {
    url: "https://images.unsplash.com/photo-1633155970179-999da74d10f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    caption: "Göreme Valley scenic views from the trail"
  },
  {
    url: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    caption: "Cappadocia's unique rock formations along the bike route"
  },
  {
    url: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    caption: "Riding through valleys and traditional villages"
  },
  {
    url: "https://images.unsplash.com/photo-1637153177128-9608c9352f93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    caption: "Aladağlar Mountain views during the tour"
  },
  {
    url: "https://images.unsplash.com/photo-1637179660383-7b8c8d693f49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80",
    caption: "Exploring Ihlara Valley's natural beauty"
  }
];

const SixDayTourGallery = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center text-white">
        Tour Gallery
      </h3>
      <Carousel className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {tourImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-xl">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
                  <p className="text-white text-sm md:text-base">{image.caption}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white border-white hover:bg-white/10" />
        <CarouselNext className="text-white border-white hover:bg-white/10" />
      </Carousel>
    </div>
  );
};

export default SixDayTourGallery;