import RoutesList from "@/components/routes/RoutesList";

const RoutesPage = () => {
  return (
    <section id="routes" className="pt-28 py-20 bg-[#2D2D2D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Discover Cappadocia's <span className="text-primary">Best Routes</span></h2>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">Explore our carefully designed routes that showcase the magical fairy chimneys, ancient cave churches, and stunning valleys of Cappadocia.</p>
        </div>
        
        <RoutesList />
      </div>
    </section>
  );
};

export default RoutesPage;