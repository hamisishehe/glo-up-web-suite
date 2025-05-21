
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight mb-6">
            Experience True Relaxation & Rejuvenation
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Indulge in premium spa treatments designed to relax your body, 
            refresh your mind, and restore your spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="bg-spa-moss hover:bg-spa-forest text-white text-lg py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Book Now
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white text-lg py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
