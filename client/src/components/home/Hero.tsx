import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Load YouTube iframe API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Lazy load the YouTube video
    const loadVideo = () => {
      if (videoRef.current && !videoRef.current.src) {
        videoRef.current.src = 'https://www.youtube.com/embed/Gcxv7i02lXc?autoplay=1&mute=1&loop=1&playlist=Gcxv7i02lXc&controls=0&showinfo=0&rel=0&enablejsapi=1';
      }
    };

    // Check if the video is in viewport or close to it
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadVideo();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="pt-16">
      <div className="video-container">
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading text-white">Explore the World <span className="text-primary">On Two Wheels</span></h1>
            <p className="text-lg md:text-xl mb-8 text-[#9CA3AF] max-w-2xl mx-auto">Unforgettable bicycle adventures through stunning landscapes, hidden gems, and cultural experiences.</p>
            <Button 
              onClick={() => scrollToElement('reservation')}
              className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Tour
            </Button>
          </div>
        </div>
        <iframe 
          ref={videoRef}
          title="Cycling adventure video"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Hero;
