
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation item click
  const handleNavItemClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="text-2xl font-bold text-primary animate-fade-in"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Justin's Auto Garage
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['services', 'about', 'gallery', 'contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item);
              }}
              className={cn(
                "text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative cursor-pointer",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary",
                "after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300",
                "animate-fade-in"
              )}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Button
            onClick={() => handleNavItemClick('contact')}
            className="animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 focus:outline-none animate-fade-in"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-white/95 backdrop-blur-lg flex flex-col items-center justify-center transition-transform duration-300 ease-in-out z-40 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 p-8">
          {['services', 'about', 'gallery', 'contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavItemClick(item);
              }}
              className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <Button
            onClick={() => handleNavItemClick('contact')}
            className="mt-4 w-full"
          >
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
