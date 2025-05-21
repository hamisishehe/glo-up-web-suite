
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Regular Client",
    quote: "The massage therapy at SerenityGlo Spa was the most relaxing experience I've ever had. The therapist was attentive to my needs and the ambiance was perfect.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Visitor",
    quote: "I was blown away by the exceptional service. The facial treatment left my skin glowing for days. I've already booked my next appointment!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Monthly Member",
    quote: "Their spa packages are worth every penny. The staff is professional, the facilities are pristine, and I always leave feeling completely renewed.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "Corporate Client",
    quote: "We booked a corporate wellness day for our team, and everyone was impressed. The customized treatments and attention to detail made it a perfect team-building experience.",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  
  const nextTestimonial = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [nextTestimonial]);
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="section-title text-spa-forest">What Our Clients Say</h2>
          <p className="section-subtitle text-spa-earth">
            Don't just take our word for it. Hear from our satisfied clients about their
            experience at SerenityGlo Spa & Wellness.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[350px] sm:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute top-0 left-0 right-0 transition-all duration-700 ease-in-out",
                  index === active 
                    ? "opacity-100 translate-x-0" 
                    : index < active 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <div className="bg-spa-cream rounded-xl p-8 md:p-10 text-center shadow-md">
                  <div className="mx-auto w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-lg italic text-spa-earth mb-6">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="font-playfair font-bold text-xl text-spa-forest">
                    {testimonial.name}
                  </h4>
                  <p className="text-spa-moss">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === active 
                    ? "bg-spa-moss w-8" 
                    : "bg-spa-sage opacity-50 hover:opacity-75"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
