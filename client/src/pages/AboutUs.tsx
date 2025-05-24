import { Link } from "wouter";

const AboutUs = () => {
  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">About Us</h1>
        
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-[#1E1E1E] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-4">
                At Cappadocia Bike Tour, we offer unforgettable cycling adventures through the breathtaking landscapes of Cappadocia. 
                From fairy chimneys and ancient valleys to charming villages steeped in history, our tours go beyond the ordinary, 
                allowing you to truly connect with nature and culture on two wheels.
              </p>
              <p className="text-gray-300 mb-4">
                Our local guides and experienced team know every corner of the region, ensuring your ride is not only exciting 
                but also safe and well-organized. Whether you're a casual cyclist or a seasoned rider, we tailor each tour to 
                match your pace, interests, and experience level.
              </p>
              <p className="text-gray-300">
                Our mission is more than just providing a tour — we create experiences that let you feel the heart and soul of Cappadocia. 
                With every turn of the pedal, you'll uncover new wonders and hidden gems that make this region so unique.
              </p>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden h-[300px] mb-6">
              <img 
                src="https://images.unsplash.com/photo-1570330211009-ee3caf5efe44" 
                alt="Cycling in Cappadocia" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="bg-[#1E1E1E] p-6 rounded-lg shadow-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-3 text-white">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Local expertise and intimate knowledge of Cappadocia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>High-quality bikes and safety equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Customized tours for all skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Small groups for personalized experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Authentic cultural experiences beyond cycling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1E1E1E] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Meet Our Expert Guide</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Ismail - Tour Guide & Mechanic" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-2">Ismail</h3>
              <p className="text-primary font-semibold mb-4">Tour Guide & Mechanic</p>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Ismail is the heart and soul of our tours; a talented guide, a skilled mechanic and a former 
                  racer with a deep passion for cycling. His experience on and off the trails makes every ride 
                  smoother, safer and much more fun.
                </p>
                
                <p className="text-gray-300 mb-4">
                  Ismail's vision, dedication and creative energy are behind many of our most popular YouTube videos. 
                  He now proudly represents cycling tourism in Türkiye, working to grow the sport and share his joy 
                  with visitors from all over the world.
                </p>
                
                <p className="text-gray-300">
                  Known for his endless energy, infectious laughter and love of music, Ismail brings a special kind of 
                  magic to every tour. When you ride with him, you're not just exploring Cappadocia, you're also joining 
                  a journey full of fun, connection and unforgettable memories.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-[#1E1E1E] p-6 md:p-8 rounded-lg shadow-lg border border-gray-800 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Mehmet Yilmaz</h3>
              <p className="text-primary mb-2">Founder & Lead Guide</p>
              <p className="text-gray-300 text-sm">
                Born and raised in Cappadocia, Mehmet has been cycling these trails for over 20 years
                and knows every hidden gem in the region.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Ayse Kaya</h3>
              <p className="text-primary mb-2">Tour Coordinator</p>
              <p className="text-gray-300 text-sm">
                With a background in tourism and a passion for cycling, Ayse ensures every tour is 
                perfectly planned and executed.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-lg shadow-lg border border-gray-800 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Ready to Experience Cappadocia on Two Wheels?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join us for an unforgettable adventure through the magical landscapes of Cappadocia. 
            Our expert guides, high-quality bikes, and carefully crafted routes ensure an experience you'll never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/routes" className="bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-lg inline-block transition-colors duration-300">
              Explore Our Tours
            </Link>
            <Link href="/contact" className="bg-transparent border border-white hover:bg-white/10 text-white py-3 px-8 rounded-lg inline-block transition-colors duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;