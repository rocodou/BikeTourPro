import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Handle window resize for responsive video
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  // Update window dimensions when resized
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Load YouTube iframe API and video
  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    
    // Lazy load the YouTube video with responsive settings
    const loadVideo = () => {
      if (videoRef.current && !videoRef.current.src) {
        // Determine aspect ratio for responsiveness
        // On mobile (portrait), we need a different approach to video sizing
        const isMobile = windowSize.width < 768;
        const videoParams = isMobile ? 
          "autoplay=1&mute=1&loop=1&playlist=_vf8wzsYm88&controls=0&showinfo=0&rel=0&enablejsapi=1&modestbranding=1" :
          "autoplay=1&mute=1&loop=1&playlist=_vf8wzsYm88&controls=0&showinfo=0&rel=0&enablejsapi=1";
          
        videoRef.current.src = `https://www.youtube.com/embed/_vf8wzsYm88?${videoParams}`;
        setIsVideoLoaded(true);
      }
    };
    
    // Check if the video is in viewport or close to it
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
  }, [windowSize]);
  
  // Start the zoom animation when video is loaded
  useEffect(() => {
    if (isVideoLoaded) {
      // Start the zoom animation
      controls.start({
        scale: 1.1,
        transition: { 
          duration: 30,
          ease: "linear",
        }
      });
    }
  }, [isVideoLoaded, controls]);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <motion.div 
        ref={videoContainerRef}
        className="absolute inset-0 w-full h-full z-0"
        animate={controls}
        initial={{ scale: 1.0 }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            ref={videoRef}
            title="Cycling adventure video"
            className="absolute w-[300%] md:w-[200%] lg:w-[140%] h-[100%] md:h-[100%] lg:h-[100%]"
            style={{ 
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              minWidth: '100%',
              minHeight: '100%'
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
      
      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Explore <span className="text-primary">Cappadocia</span> On Two Wheels
          </h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 text-[#D1D5DB] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Unforgettable bicycle adventures through fairy chimneys, ancient
            valleys, and the magical landscapes of Cappadocia.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
