
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const packages = [
  {
    id: "relaxation",
    name: "Ultimate Relaxation",
    description: "A full day of pampering with our most popular treatments.",
    price: 299,
    duration: "5 hours",
    includes: [
      "Deep Tissue Massage (60 min)",
      "Rejuvenating Facial (60 min)",
      "Spa Manicure & Pedicure",
      "Aromatherapy Session",
      "Complimentary Lunch",
    ],
    color: "bg-spa-moss",
    featured: true,
  },
  {
    id: "couple",
    name: "Couple's Retreat",
    description: "Share a relaxing experience with your special someone.",
    price: 349,
    duration: "3 hours",
    includes: [
      "Couple's Massage (90 min)",
      "Private Jacuzzi Session",
      "Champagne & Chocolates",
      "Hand & Foot Treatment",
    ],
    color: "bg-spa-forest",
    featured: false,
  },
  {
    id: "detox",
    name: "Detox & Renew",
    description: "Cleanse your body and mind with our detoxifying treatments.",
    price: 249,
    duration: "4 hours",
    includes: [
      "Body Scrub & Wrap",
      "Detoxifying Facial",
      "Lymphatic Drainage Massage",
      "Infrared Sauna Session",
      "Detox Tea Service",
    ],
    color: "bg-spa-bronze",
    featured: false,
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-20 bg-spa-beige">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title text-spa-forest">Featured Packages</h2>
          <p className="section-subtitle text-spa-earth">
            Indulge in our carefully crafted spa packages designed to provide a 
            complete relaxation experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services/packages" 
            className="btn-primary"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

interface PackageCardProps {
  pkg: {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
    includes: string[];
    color: string;
    featured: boolean;
  };
  index: number;
}

const PackageCard = ({ pkg, index }: PackageCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 animate-fade-up",
        pkg.featured && "lg:scale-105 z-10 ring-2 ring-spa-gold"
      )}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {pkg.featured && (
        <div className="bg-spa-gold text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className={cn("h-2", pkg.color)}></div>
      <div className="p-8">
        <h3 className="text-2xl font-playfair font-semibold mb-2 text-spa-forest">
          {pkg.name}
        </h3>
        <p className="text-muted-foreground mb-4">
          {pkg.description}
        </p>
        <div className="flex justify-between items-center mb-6">
          <span className="text-3xl font-playfair font-bold text-spa-moss">
            ${pkg.price}
          </span>
          <span className="text-sm text-muted-foreground">
            {pkg.duration}
          </span>
        </div>
        
        <h4 className="font-medium text-spa-forest mb-3">Includes:</h4>
        <ul className="space-y-2 mb-8">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start">
              <svg className="h-5 w-5 text-spa-moss mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={`/booking?package=${pkg.id}`} 
          className={cn(
            "block text-center py-3 px-6 rounded-md font-medium transition-all duration-300 w-full",
            pkg.featured 
              ? "bg-spa-moss hover:bg-spa-forest text-white" 
              : "bg-white border border-spa-moss text-spa-moss hover:bg-spa-moss hover:text-white"
          )}
        >
          Book This Package
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackages;
