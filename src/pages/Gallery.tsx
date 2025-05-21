
import { useState } from 'react';
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";

// Gallery Categories
const categories = [
  { id: "all", name: "All Photos" },
  { id: "spa", name: "Spa Facilities" },
  { id: "massage", name: "Massage" },
  { id: "facial", name: "Facial & Skincare" },
  { id: "hair", name: "Hair Styling" },
  { id: "nails", name: "Nail Care" },
];

// Gallery Images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Spa relaxation room with candles",
    category: "spa",
    featured: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Massage treatment in progress",
    category: "massage",
    featured: false,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Facial treatment with mask",
    category: "facial",
    featured: true,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    alt: "Hair styling session",
    category: "hair",
    featured: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Hot stone massage treatment",
    category: "massage",
    featured: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1604902396830-aca29e19b067?ixlib=rb-1.2.1&auto=format&fit=crop&w=2833&q=80",
    alt: "Manicure treatment close-up",
    category: "nails",
    featured: true,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1596178060810-72c766767768?ixlib=rb-1.2.1&auto=format&fit=crop&w=2069&q=80",
    alt: "Aromatherapy oils and treatments",
    category: "spa",
    featured: false,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Facial treatment with modern technology",
    category: "facial",
    featured: false,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Pedicure treatment in progress",
    category: "nails",
    featured: false,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80",
    alt: "Spa waiting area with plants",
    category: "spa",
    featured: true,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    alt: "Deep tissue massage treatment",
    category: "massage",
    featured: false,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80",
    alt: "Men's haircut in progress",
    category: "hair",
    featured: false,
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);
  
  const handleImageClick = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };
  
  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === "ArrowLeft") {
      navigateImage("prev");
    } else if (e.key === "ArrowRight") {
      navigateImage("next");
    } else if (e.key === "Escape") {
      closeModal();
    }
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-spa-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-spa-forest mb-6">
              Our Gallery
            </h1>
            <p className="text-lg md:text-xl text-spa-earth mb-8">
              Take a visual journey through our spa facilities and services. Experience the 
              peaceful atmosphere and premium care we provide.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Gallery Filter */}
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
      
      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={cn(
                    "relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group",
                    image.featured && "lg:col-span-2 lg:row-span-2"
                  )}
                  onClick={() => handleImageClick(image.id)}
                  style={{ 
                    height: image.featured ? "500px" : "300px",
                    animationDelay: `${index * 100}ms`,
                  }}
                  data-aos="fade-up"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No images found</h3>
              <p className="text-muted-foreground">
                Please try another category.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="relative max-w-5xl mx-auto p-4 h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white hover:text-spa-gold z-10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Previous Button */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-spa-gold z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Image */}
            <div className="w-full h-full flex items-center justify-center">
              {filteredImages.find(img => img.id === selectedImage) && (
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
            
            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-spa-gold z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Caption */}
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <p className="text-lg font-medium">
                {filteredImages.find(img => img.id === selectedImage)?.alt}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Call to Action */}
      <section className="py-16 bg-spa-beige">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-lg text-spa-earth mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover the SerenityGlo difference. Our expert staff
            is ready to help you relax, rejuvenate, and glow.
          </p>
          <a 
            href="/booking" 
            className="btn-primary"
          >
            Book Your Visit
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
