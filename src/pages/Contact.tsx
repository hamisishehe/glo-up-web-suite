
import { useState } from "react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-spa-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-spa-forest mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-spa-earth mb-0">
              We'd love to hear from you. Reach out with any questions or to book your appointment.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ContactCard 
              icon={<MapPin className="h-12 w-12 text-spa-moss" />}
              title="Our Location"
              content={<>
                <p className="mb-1">123 Serenity Lane</p>
                <p className="mb-1">Wellness City, WC 12345</p>
                <p>United States</p>
              </>}
            />
            
            <ContactCard 
              icon={<Phone className="h-12 w-12 text-spa-moss" />}
              title="Phone & Fax"
              content={<>
                <p className="mb-1">Phone: (123) 456-7890</p>
                <p className="mb-1">Fax: (123) 456-7891</p>
                <p>Toll Free: 1-800-SPA-GLOW</p>
              </>}
            />
            
            <ContactCard 
              icon={<Mail className="h-12 w-12 text-spa-moss" />}
              title="Email & Support"
              content={<>
                <p className="mb-1">info@serenityspa.com</p>
                <p className="mb-1">bookings@serenityspa.com</p>
                <p>support@serenityspa.com</p>
              </>}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair font-bold text-spa-forest mb-6">
                Send Us a Message
              </h2>
              <p className="text-spa-earth mb-8">
                Have a question or want to book an appointment? Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="pricing">Pricing Question</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={cn(
                      "btn-primary w-full md:w-auto",
                      isLoading && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
            
            {/* Opening Hours & Map */}
            <div>
              <div className="bg-spa-cream p-8 rounded-xl mb-8">
                <h2 className="text-2xl font-playfair font-bold text-spa-forest mb-6">
                  Opening Hours
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-spa-beige pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-spa-beige pb-2">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-spa-beige pb-2">
                    <span className="font-medium">Sunday</span>
                    <span>10:00 AM - 5:00 PM</span>
                  </div>
                </div>
                
                <div className="mt-6 text-spa-earth">
                  <p className="mb-2">
                    <strong>Note:</strong> Appointments recommended. Walk-ins welcomed based on availability.
                  </p>
                  <p>
                    We are closed on major holidays.
                  </p>
                </div>
              </div>
              
              {/* Embedded Map */}
              <div className="rounded-xl overflow-hidden shadow-md h-[350px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1620205880894!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="SerenityGlo Spa Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-spa-beige">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-spa-earth max-w-3xl mx-auto">
              Find answers to common questions about our services and policies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem 
              question="How far in advance should I book my appointment?"
              answer="We recommend booking at least 1-2 weeks in advance for optimal availability, especially for weekend appointments. For special occasions or group bookings, please contact us 3-4 weeks in advance."
            />
            
            <FaqItem 
              question="What is your cancellation policy?"
              answer="We require 24-hour notice for cancellations or rescheduling. Cancellations with less than 24-hour notice may be subject to a cancellation fee equivalent to 50% of the service price."
            />
            
            <FaqItem 
              question="Do you offer gift certificates?"
              answer="Yes! Gift certificates are available for purchase in any denomination and can be used for services or products. They can be purchased online or in-person at our spa."
            />
            
            <FaqItem 
              question="What should I do to prepare for my spa appointment?"
              answer="We recommend arriving 15 minutes before your scheduled appointment. Please avoid heavy meals, alcohol, and caffeine before your visit. For massage services, we suggest showering beforehand."
            />
            
            <FaqItem 
              question="Do you offer packages for special occasions?"
              answer="Yes, we offer a variety of packages for special occasions including weddings, birthdays, and anniversaries. We also create custom packages for groups. Please contact us for details."
            />
            
            <FaqItem 
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, cash, and gift certificates. We also offer digital payment options for your convenience."
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="mb-8 text-spa-earth">
              Can't find the answer you're looking for? Feel free to reach out to us directly.
            </p>
            <a 
              href="/booking" 
              className="btn-primary"
            >
              Book Your Appointment
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactCard = ({ icon, title, content }: ContactCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold text-spa-forest mb-4">
        {title}
      </h3>
      <div className="text-spa-earth">
        {content}
      </div>
    </div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-lg font-medium text-spa-forest mb-3">
        {question}
      </h3>
      <p className="text-spa-earth">
        {answer}
      </p>
    </div>
  );
};

export default Contact;
