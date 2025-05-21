
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-spa-forest/80"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold mb-6">
            Ready to Experience Blissful Relaxation?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Book your appointment today and take the first step towards a more relaxed and rejuvenated you.
            Our expert therapists are ready to help you unwind and feel your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/booking" 
              className="bg-spa-gold hover:bg-spa-bronze text-white text-lg py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Book Your Appointment
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent border border-white hover:bg-white/10 text-white text-lg py-3 px-8 rounded-md font-medium transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
