
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-spa-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-spa-forest mb-6">
              About SerenityGlo
            </h1>
            <p className="text-lg md:text-xl text-spa-earth mb-0">
              Discover our story, mission, and the team dedicated to your wellness journey.
            </p>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-6">
                Our Story
              </h2>
              <p className="text-spa-earth mb-6 leading-relaxed">
                Founded in 2005 by wellness enthusiast Maria Rodrigues, SerenityGlo Spa & Wellness began as a small massage studio with a vision to create a sanctuary where people could escape from the stresses of everyday life.
              </p>
              <p className="text-spa-earth mb-6 leading-relaxed">
                What started as a passion project quickly grew into a premier wellness destination. Maria's commitment to quality services, authentic care, and a holistic approach to wellness resonated with clients, allowing SerenityGlo to expand its offerings and locations.
              </p>
              <p className="text-spa-earth leading-relaxed">
                Today, SerenityGlo spans three beautiful locations, offering a comprehensive range of services from massage therapy and skincare to hair styling and nail care. Despite our growth, we remain true to our founding principles: providing personalized care, using premium products, and creating a tranquil environment where wellness is at the center of everything we do.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-96 lg:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80" 
                  alt="Spa interior with plants and relaxation area" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-spa-beige">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-8">
              Our Mission & Values
            </h2>
            
            <div className="bg-white p-8 rounded-xl shadow-md mb-12">
              <h3 className="text-2xl font-playfair font-semibold text-spa-moss mb-4">Our Mission</h3>
              <p className="text-lg text-spa-earth">
                To provide an exceptional wellness experience that nurtures body, mind, and spirit, 
                helping our clients achieve balance and rejuvenation in their busy lives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-playfair font-semibold text-spa-forest mb-3">Holistic Wellness</h3>
                <p className="text-spa-earth">
                  We believe in treating the whole person, not just symptoms, focusing on complete wellness.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-playfair font-semibold text-spa-forest mb-3">Exceptional Service</h3>
                <p className="text-spa-earth">
                  We strive to exceed expectations with personalized care and attentive service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-4xl mb-4">🌎</div>
                <h3 className="text-xl font-playfair font-semibold text-spa-forest mb-3">Sustainability</h3>
                <p className="text-spa-earth">
                  We're committed to eco-friendly practices and products that respect our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-spa-earth max-w-3xl mx-auto">
              Our skilled professionals bring years of experience and a passion for wellness to every service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember 
              name="Maria Rodrigues" 
              role="Founder & Lead Therapist" 
              image="https://randomuser.me/api/portraits/women/65.jpg" 
              bio="With over 20 years of experience in wellness therapy, Maria founded SerenityGlo with a vision to create a true sanctuary for relaxation."
            />
            
            <TeamMember 
              name="David Chen" 
              role="Senior Massage Therapist" 
              image="https://randomuser.me/api/portraits/men/32.jpg" 
              bio="Specializing in deep tissue and sports massage, David's therapeutic techniques have helped countless clients recover from injuries."
            />
            
            <TeamMember 
              name="Sophie Williams" 
              role="Lead Esthetician" 
              image="https://randomuser.me/api/portraits/women/45.jpg" 
              bio="With a background in dermatology, Sophie brings scientific knowledge and a gentle touch to all her facial treatments."
            />
            
            <TeamMember 
              name="James Rodriguez" 
              role="Hair Stylist" 
              image="https://randomuser.me/api/portraits/men/67.jpg" 
              bio="A creative visionary in hair design, James has worked with top salons internationally before joining our team."
            />
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-spa-earth max-w-3xl mx-auto mb-8">
              Our entire team is certified, experienced, and passionate about helping you look and feel your best. 
              We regularly participate in continuing education to stay at the forefront of wellness practices.
            </p>
            
            <a 
              href="/booking" 
              className="btn-primary"
            >
              Book with Our Team
            </a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-spa-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-spa-forest mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial 
              quote="The entire experience at SerenityGlo was exceptional. The staff was attentive, the atmosphere was calming, and my massage was exactly what I needed."
              author="Jessica L."
              location="Regular Client"
            />
            
            <Testimonial 
              quote="I've been to many spas, but SerenityGlo truly stands out. The attention to detail and level of personalized care is unmatched. It's my wellness sanctuary."
              author="Michael T."
              location="Monthly Member"
            />
            
            <Testimonial 
              quote="From the moment you walk in, there's a sense of tranquility. Their facial treatments have completely transformed my skin. I won't go anywhere else!"
              author="Samantha K."
              location="Client Since 2018"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamMember = ({ name, role, image, bio }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-spa-forest mb-1">
          {name}
        </h3>
        <p className="text-spa-moss mb-3">{role}</p>
        <p className="text-spa-earth text-sm">{bio}</p>
      </div>
    </div>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
}

const Testimonial = ({ quote, author, location }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md relative">
      <div className="text-4xl text-spa-gold absolute top-4 left-6">❝</div>
      <div className="pt-8 pb-4 px-4">
        <p className="text-spa-earth mb-6 italic">
          {quote}
        </p>
        <div>
          <p className="font-medium text-spa-forest">{author}</p>
          <p className="text-sm text-spa-moss">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
