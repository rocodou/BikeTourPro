import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { Link } from "wouter";

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
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Explore <span className="text-primary">Cappadocia</span> On Two Wheels
          </h1>
          <p className="text-lg md:text-xl mb-8 text-[#D1D5DB] max-w-2xl mx-auto">
            Unforgettable bicycle adventures through fairy chimneys, ancient valleys, and the magical landscapes of Cappadocia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              <Link href="/reservation">Book a Tour</Link>
            </Button>
            <Button 
              asChild
              className="bg-transparent border border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              <Link href="/routes">Explore Routes</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full overflow-hidden">
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
