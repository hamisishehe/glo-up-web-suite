
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "massage",
    name: "Massage Therapy",
    description: "Relieve tension and stress with our therapeutic massage treatments.",
    icon: "🧖‍♀️",
    color: "bg-spa-sage",
    link: "/services/massage",
  },
  {
    id: "facial",
    name: "Facial Treatments",
    description: "Revitalize your skin with our rejuvenating facial treatments.",
    icon: "✨",
    color: "bg-spa-moss",
    link: "/services/facial",
  },
  {
    id: "hair",
    name: "Hair Styling",
    description: "Transform your look with our expert hair styling services.",
    icon: "💇‍♀️",
    color: "bg-spa-forest",
    link: "/services/hair",
  },
  {
    id: "nails",
    name: "Nail Care",
    description: "Pamper your hands and feet with our professional nail care.",
    icon: "💅",
    color: "bg-spa-earth",
    link: "/services/nails",
  },
  {
    id: "spa",
    name: "Spa Packages",
    description: "Indulge in complete relaxation with our comprehensive spa packages.",
    icon: "🌿",
    color: "bg-spa-bronze",
    link: "/services/spa",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="py-20 bg-spa-cream">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title text-spa-forest">Our Premium Services</h2>
          <p className="section-subtitle text-spa-earth">
            Discover our range of luxurious treatments designed to help you relax, 
            rejuvenate, and feel your absolute best.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services" 
            className="btn-secondary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    link: string;
  };
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <Link 
      to={service.link} 
      className={cn(
        "group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl animate-fade-up",
        `animation-delay-${index * 100}`
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn("h-2", service.color)}></div>
      <div className="p-8">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-playfair font-semibold mb-3 text-spa-forest group-hover:text-spa-moss transition-colors">
          {service.name}
        </h3>
        <p className="text-muted-foreground mb-4">
          {service.description}
        </p>
        <span className="text-spa-moss font-medium inline-flex items-center">
          Learn more 
          <svg 
            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default ServiceHighlights;
