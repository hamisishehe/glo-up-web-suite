
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 md:py-6 bg-background/90 backdrop-blur-md sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-spa-forest font-playfair text-2xl font-bold">
          Serenity<span className="text-spa-gold">Spa</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <NavLinks />
          <Link to="/booking" className="btn-primary">
            Book Now
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-spa-forest"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-300 border-t border-spa-beige",
        isMenuOpen ? "opacity-100 h-auto py-4" : "opacity-0 h-0 py-0 overflow-hidden"
      )}>
        <div className="container-custom flex flex-col space-y-4">
          <NavLinksMobile toggleMenu={toggleMenu} />
          <Link 
            to="/booking" 
            className="btn-primary text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <Link to="/" className="text-foreground hover:text-spa-forest transition-colors">
      Home
    </Link>
    <Link to="/services" className="text-foreground hover:text-spa-forest transition-colors">
      Services
    </Link>
    <Link to="/gallery" className="text-foreground hover:text-spa-forest transition-colors">
      Gallery
    </Link>
    <Link to="/about" className="text-foreground hover:text-spa-forest transition-colors">
      About
    </Link>
    <Link to="/contact" className="text-foreground hover:text-spa-forest transition-colors">
      Contact
    </Link>
  </>
);

const NavLinksMobile = ({ toggleMenu }: { toggleMenu: () => void }) => (
  <>
    <Link 
      to="/" 
      className="text-foreground hover:text-spa-forest transition-colors py-2 px-4"
      onClick={toggleMenu}
    >
      Home
    </Link>
    <Link 
      to="/services" 
      className="text-foreground hover:text-spa-forest transition-colors py-2 px-4"
      onClick={toggleMenu}
    >
      Services
    </Link>
    <Link 
      to="/gallery" 
      className="text-foreground hover:text-spa-forest transition-colors py-2 px-4"
      onClick={toggleMenu}
    >
      Gallery
    </Link>
    <Link 
      to="/about" 
      className="text-foreground hover:text-spa-forest transition-colors py-2 px-4"
      onClick={toggleMenu}
    >
      About
    </Link>
    <Link 
      to="/contact" 
      className="text-foreground hover:text-spa-forest transition-colors py-2 px-4"
      onClick={toggleMenu}
    >
      Contact
    </Link>
  </>
);

export default Navbar;
