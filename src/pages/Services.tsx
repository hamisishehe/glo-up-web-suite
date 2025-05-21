
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

// Service Categories
const categories = [
  { id: "all", name: "All Services" },
  { id: "massage", name: "Massage" },
  { id: "facial", name: "Facial" },
  { id: "hair", name: "Hair" },
  { id: "nails", name: "Nails" },
  { id: "spa", name: "Spa Packages" },
];

// Service Data
const services = [
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    category: "massage",
    description: "A gentle full body massage designed to relax muscles and improve circulation.",
    duration: "60 min",
    price: 85,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    category: "massage",
    description: "Targets deeper layers of muscle to release chronic tension and stress.",
    duration: "60 min",
    price: 95,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "hot-stone",
    name: "Hot Stone Massage",
    category: "massage",
    description: "Smooth, heated stones are placed on the body to promote deeper relaxation.",
    duration: "75 min",
    price: 110,
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "aromatherapy",
    name: "Aromatherapy Massage",
    category: "massage",
    description: "Essential oils enhance a gentle massage to balance your body and mind.",
    duration: "60 min",
    price: 90,
    image: "https://images.unsplash.com/photo-1596178060810-72c766767768?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "classic-facial",
    name: "Classic Facial",
    category: "facial",
    description: "A refreshing facial that cleanses, exfoliates, and hydrates your skin.",
    duration: "45 min",
    price: 75,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Facial",
    category: "facial",
    description: "Targets fine lines and wrinkles for a more youthful appearance.",
    duration: "60 min",
    price: 95,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "womens-haircut",
    name: "Women's Haircut & Style",
    category: "hair",
    description: "Professional haircut and styling to refresh your look.",
    duration: "45 min",
    price: 65,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
  },
  {
    id: "mens-haircut",
    name: "Men's Haircut",
    category: "hair",
    description: "Precision cut tailored to enhance your natural features.",
    duration: "30 min",
    price: 45,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "manicure",
    name: "Spa Manicure",
    category: "nails",
    description: "Rejuvenate your hands with our luxurious manicure treatment.",
    duration: "45 min",
    price: 40,
    image: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=2833&q=80",
  },
  {
    id: "pedicure",
    name: "Deluxe Pedicure",
    category: "nails",
    description: "Pamper your feet with our premium pedicure experience.",
    duration: "60 min",
    price: 55,
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "day-of-bliss",
    name: "Day of Bliss Package",
    category: "spa",
    description: "Full day of pampering including massage, facial, and nail care.",
    duration: "4 hours",
    price: 275,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "stress-relief",
    name: "Stress Relief Package",
    category: "spa",
    description: "Combination of massage and aromatherapy to melt away tension.",
    duration: "2 hours",
    price: 180,
    image: "https://images.unsplash.com/photo-1611072337226-1660d4053967?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-spa-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-spa-forest mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-spa-earth mb-8">
              Explore our comprehensive range of beauty and wellness services designed 
              to help you look and feel your best.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Category Filters */}
      <section className="py-10 bg-white sticky top-16 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-spa-moss text-white"
                    : "bg-spa-beige text-spa-earth hover:bg-spa-sage hover:text-white"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No services found</h3>
              <p className="text-muted-foreground">
                Please try another category or check back later.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-spa-cream">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-6">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg text-spa-earth mb-8 max-w-2xl mx-auto">
            Our skilled professionals are ready to provide you with an exceptional experience.
            Book your appointment now.
          </p>
          <Link 
            to="/booking" 
            className="btn-primary"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    category: string;
    description: string;
    duration: string;
    price: number;
    image: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold mb-2 text-spa-forest">
          {service.name}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {service.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-spa-moss font-semibold">${service.price}</span>
          <span className="text-sm text-muted-foreground">{service.duration}</span>
        </div>
        <Link
          to={`/booking?service=${service.id}`}
          className="block text-center py-2 px-4 bg-spa-beige hover:bg-spa-sage text-spa-forest hover:text-white rounded transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Services;
