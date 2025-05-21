
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/use-toast";

// Booking steps
const STEPS = {
  SERVICE: 0,
  DATE_TIME: 1,
  DETAILS: 2,
  CONFIRMATION: 3,
};

// Sample service categories and services
const serviceCategories = [
  { id: "massage", name: "Massage" },
  { id: "facial", name: "Facial" },
  { id: "hair", name: "Hair" },
  { id: "nails", name: "Nails" },
  { id: "spa", name: "Spa Packages" },
];

const services = [
  // Massage Services
  {
    id: "swedish-massage",
    name: "Swedish Massage",
    category: "massage",
    duration: "60 min",
    price: 85,
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue Massage",
    category: "massage",
    duration: "60 min",
    price: 95,
  },
  {
    id: "hot-stone",
    name: "Hot Stone Massage",
    category: "massage",
    duration: "75 min",
    price: 110,
  },
  {
    id: "aromatherapy",
    name: "Aromatherapy Massage",
    category: "massage",
    duration: "60 min",
    price: 90,
  },
  
  // Facial Services
  {
    id: "classic-facial",
    name: "Classic Facial",
    category: "facial",
    duration: "45 min",
    price: 75,
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Facial",
    category: "facial",
    duration: "60 min",
    price: 95,
  },
  
  // Hair Services
  {
    id: "womens-haircut",
    name: "Women's Haircut & Style",
    category: "hair",
    duration: "45 min",
    price: 65,
  },
  {
    id: "mens-haircut",
    name: "Men's Haircut",
    category: "hair",
    duration: "30 min",
    price: 45,
  },
  
  // Nail Services
  {
    id: "manicure",
    name: "Spa Manicure",
    category: "nails",
    duration: "45 min",
    price: 40,
  },
  {
    id: "pedicure",
    name: "Deluxe Pedicure",
    category: "nails",
    duration: "60 min",
    price: 55,
  },
  
  // Spa Packages
  {
    id: "day-of-bliss",
    name: "Day of Bliss Package",
    category: "spa",
    duration: "4 hours",
    price: 275,
  },
  {
    id: "stress-relief",
    name: "Stress Relief Package",
    category: "spa",
    duration: "2 hours",
    price: 180,
  },
];

// Sample time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 19; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      if (hour === 19 && minute > 0) continue; // Don't add times past 7:00 PM
      
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const period = hour < 12 ? 'AM' : 'PM';
      const formattedMinute = minute === 0 ? '00' : minute;
      
      slots.push(`${formattedHour}:${formattedMinute} ${period}`);
    }
  }
  return slots;
};

const timeSlots = generateTimeSlots();

// Sample staff members
const staffMembers = [
  { id: "staff1", name: "Emma Johnson", specialty: "Massage Therapist" },
  { id: "staff2", name: "Michael Chen", specialty: "Hair Stylist" },
  { id: "staff3", name: "Sarah Williams", specialty: "Esthetician" },
  { id: "staff4", name: "David Rodriguez", specialty: "Nail Technician" },
  { id: "staff5", name: "Jessica Lee", specialty: "Massage Therapist" },
];

const Booking = () => {
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(STEPS.SERVICE);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedStaff, setSelectedStaff] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  
  // Handle URL parameters (if coming from a service page)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceId = params.get("service");
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedCategory(service.category);
        setSelectedService(serviceId);
      }
    }
  }, [location.search]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    if (currentStep === STEPS.SERVICE && !selectedService) {
      toast({
        title: "Please select a service",
        description: "You need to select a service to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === STEPS.DATE_TIME && (!selectedDate || !selectedTime)) {
      toast({
        title: "Please select a date and time",
        description: "You need to select both date and time to continue.",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === STEPS.DETAILS) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        toast({
          title: "Please fill in all required fields",
          description: "First name, last name, email, and phone are required.",
          variant: "destructive",
        });
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return;
      }
      
      // Simple phone validation (at least 10 digits)
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length < 10) {
        toast({
          title: "Invalid phone number",
          description: "Please enter a valid phone number with at least 10 digits.",
          variant: "destructive",
        });
        return;
      }
    }
    
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setCurrentStep(prev => Math.max(0, prev - 1));
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setCurrentStep(STEPS.CONFIRMATION);
      window.scrollTo(0, 0);
      
      // Clear form data
      setSelectedCategory(null);
      setSelectedService(null);
      setSelectedDate("");
      setSelectedTime(null);
      setSelectedStaff(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        notes: "",
      });
      
      toast({
        title: "Booking Confirmed!",
        description: "Your appointment has been successfully booked.",
      });
    }, 1500);
  };
  
  const getSelectedServiceDetails = () => {
    return selectedService 
      ? services.find(service => service.id === selectedService) 
      : null;
  };
  
  const getStepTitle = () => {
    switch (currentStep) {
      case STEPS.SERVICE:
        return "Select a Service";
      case STEPS.DATE_TIME:
        return "Choose Date & Time";
      case STEPS.DETAILS:
        return "Your Information";
      case STEPS.CONFIRMATION:
        return "Booking Confirmed!";
      default:
        return "";
    }
  };
  
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-spa-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-spa-forest mb-6">
              Book Your Appointment
            </h1>
            <p className="text-lg text-spa-earth mb-8">
              Schedule your next wellness experience with us. Follow the simple steps
              below to secure your appointment.
            </p>
            
            {/* Progress Steps */}
            <div className="flex justify-between items-center max-w-xl mx-auto mb-8">
              {Object.values(STEPS).slice(0, 4).map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2",
                      currentStep === step
                        ? "bg-spa-moss text-white"
                        : currentStep > step
                          ? "bg-spa-gold text-white"
                          : "bg-spa-beige text-spa-earth"
                    )}
                  >
                    {index + 1}
                  </div>
                  <span className={cn(
                    "text-sm hidden md:block",
                    currentStep === step
                      ? "text-spa-forest font-medium"
                      : "text-muted-foreground"
                  )}>
                    {index === 0 && "Service"}
                    {index === 1 && "Date & Time"}
                    {index === 2 && "Details"}
                    {index === 3 && "Confirmation"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Booking Form */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-spa-forest mb-8 text-center">
              {getStepTitle()}
            </h2>
            
            {/* Step 1: Service Selection */}
            {currentStep === STEPS.SERVICE && (
              <div className="space-y-8">
                {/* Service Categories */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Select a Category:</h3>
                  <div className="flex flex-wrap gap-3">
                    {serviceCategories.map(category => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setSelectedService(null); // Reset selected service when changing category
                        }}
                        className={cn(
                          "px-4 py-2 rounded-md transition-all duration-300",
                          selectedCategory === category.id
                            ? "bg-spa-moss text-white"
                            : "bg-spa-beige text-spa-earth hover:bg-spa-sage hover:text-white"
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Services */}
                {selectedCategory && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select a Service:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services
                        .filter(service => service.category === selectedCategory)
                        .map(service => (
                          <div
                            key={service.id}
                            onClick={() => setSelectedService(service.id)}
                            className={cn(
                              "border rounded-lg p-4 cursor-pointer transition-all duration-300",
                              selectedService === service.id
                                ? "border-spa-moss bg-spa-moss/5 shadow-md"
                                : "border-muted hover:border-spa-moss"
                            )}
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h4 className="text-spa-forest font-medium mb-1">
                                  {service.name}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  {service.duration}
                                </p>
                              </div>
                              <div className="text-spa-moss font-semibold">
                                ${service.price}
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
                
                <div className="flex justify-end mt-8">
                  <button
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next: Choose Date & Time
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 2: Date and Time Selection */}
            {currentStep === STEPS.DATE_TIME && (
              <div className="space-y-8">
                {/* Selected Service Summary */}
                {getSelectedServiceDetails() && (
                  <div className="bg-spa-cream p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Selected Service:</h3>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-spa-forest font-medium">{getSelectedServiceDetails()?.name}</p>
                        <p className="text-sm text-muted-foreground">{getSelectedServiceDetails()?.duration}</p>
                      </div>
                      <p className="text-spa-moss font-semibold">${getSelectedServiceDetails()?.price}</p>
                    </div>
                  </div>
                )}
                
                {/* Date Selection */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Select a Date:</h3>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]} // Prevent selecting past dates
                    className="w-full border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                  />
                </div>
                
                {/* Time Selection */}
                {selectedDate && (
                  <div>
                    <h3 className="text-lg font-medium mb-4">Select a Time:</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                      {timeSlots.map((time, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            "py-2 px-3 rounded-md text-sm transition-all duration-300",
                            selectedTime === time
                              ? "bg-spa-moss text-white"
                              : "bg-spa-beige text-spa-earth hover:bg-spa-sage hover:text-white"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Staff Selection (Optional) */}
                {selectedTime && (
                  <div>
                    <h3 className="text-lg font-medium mb-2">Select a Staff Member (Optional):</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you have no preference, we'll assign the best available staff member.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {staffMembers
                        .filter(staff => {
                          // Filter staff based on service category (simplified logic)
                          if (!selectedCategory) return true;
                          
                          if (selectedCategory === "massage" && staff.specialty === "Massage Therapist") return true;
                          if (selectedCategory === "facial" && staff.specialty === "Esthetician") return true;
                          if (selectedCategory === "hair" && staff.specialty === "Hair Stylist") return true;
                          if (selectedCategory === "nails" && staff.specialty === "Nail Technician") return true;
                          if (selectedCategory === "spa") return true;
                          
                          return false;
                        })
                        .map(staff => (
                          <div
                            key={staff.id}
                            onClick={() => setSelectedStaff(staff.id)}
                            className={cn(
                              "border rounded-lg p-4 cursor-pointer transition-all duration-300 flex items-center",
                              selectedStaff === staff.id
                                ? "border-spa-moss bg-spa-moss/5"
                                : "border-muted hover:border-spa-moss"
                            )}
                          >
                            <div className="w-10 h-10 rounded-full bg-spa-beige flex items-center justify-center mr-3">
                              {staff.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="text-spa-forest font-medium">{staff.name}</h4>
                              <p className="text-sm text-muted-foreground">{staff.specialty}</p>
                            </div>
                          </div>
                        ))}
                      
                      {/* No Preference Option */}
                      <div
                        onClick={() => setSelectedStaff(null)}
                        className={cn(
                          "border rounded-lg p-4 cursor-pointer transition-all duration-300 flex items-center",
                          selectedStaff === null
                            ? "border-spa-moss bg-spa-moss/5"
                            : "border-muted hover:border-spa-moss"
                        )}
                      >
                        <div className="w-10 h-10 rounded-full bg-spa-beige flex items-center justify-center mr-3">
                          ?
                        </div>
                        <div>
                          <h4 className="text-spa-forest font-medium">No Preference</h4>
                          <p className="text-sm text-muted-foreground">Any available staff</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Next: Your Information
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 3: Personal Details */}
            {currentStep === STEPS.DETAILS && (
              <div className="space-y-8">
                {/* Booking Summary */}
                <div className="bg-spa-cream p-5 rounded-lg">
                  <h3 className="font-medium mb-4 border-b border-spa-beige pb-2">Booking Summary:</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{getSelectedServiceDetails()?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {new Date(selectedDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    {selectedStaff && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Staff:</span>
                        <span className="font-medium">
                          {staffMembers.find(staff => staff.id === selectedStaff)?.name}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between pt-2 border-t border-spa-beige mt-2">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold text-spa-moss">${getSelectedServiceDetails()?.price}</span>
                    </div>
                  </div>
                </div>
                
                {/* Personal Information Form */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Your Information:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium mb-2">
                      Special Requests or Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border border-spa-beige rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-spa-moss"
                    ></textarea>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={prevStep}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={cn(
                      "btn-primary",
                      isLoading && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isLoading ? "Processing..." : "Confirm Booking"}
                  </button>
                </div>
              </div>
            )}
            
            {/* Step 4: Confirmation */}
            {currentStep === STEPS.CONFIRMATION && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-spa-moss/20 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-12 h-12 text-spa-moss" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold text-spa-forest">
                  Thank You for Your Booking!
                </h3>
                
                <p className="text-lg">
                  Your appointment has been successfully scheduled.
                </p>
                
                <div className="bg-spa-cream p-5 rounded-lg max-w-md mx-auto text-left mt-8">
                  <p className="mb-3">
                    A confirmation email has been sent to your email address with all the details of your appointment.
                  </p>
                  <p>
                    If you need to make any changes to your appointment, please contact us at{" "}
                    <a href="tel:+11234567890" className="text-spa-moss hover:underline">(123) 456-7890</a> or{" "}
                    <a href="mailto:info@serenityspa.com" className="text-spa-moss hover:underline">info@serenityspa.com</a>
                  </p>
                </div>
                
                <div className="mt-8">
                  <a
                    href="/"
                    className="btn-primary"
                  >
                    Return to Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
