
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Gallery images
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Luxury car detailing",
    title: "Premium Detailing",
    category: "Detailing"
  },
  {
    src: "https://media.gettyimages.com/id/176712668/photo/auto-repair-shop-car-garage.jpg?s=612x612&w=gi&k=20&c=Y78HWy8tQjC8H3t1WQ-QuFuVtIj6-nr0xbEdPlz7Vbs=",
    alt: "Engine maintenance",
    title: "Engine Performance",
    category: "Maintenance"
  },
  {
    src: "https://images.unsplash.com/photo-1622185135505-2d795003994a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Wheel alignment",
    title: "Precision Alignment",
    category: "Service"
  },
  {
    src: "https://images.unsplash.com/photo-1600706215753-15e538705190?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Interior detailing",
    title: "Interior Restoration",
    category: "Detailing"
  },
  {
    src: "https://images.unsplash.com/photo-1615906944252-3b6e82b99aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Vehicle diagnostic",
    title: "Advanced Diagnostics",
    category: "Maintenance"
  },
  {
    src: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    alt: "Performance upgrade",
    title: "Performance Tuning",
    category: "Service"
  }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

  const categories = ['All', 'Detailing', 'Maintenance', 'Service'];

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 fade-in-section"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our gallery to see the premium quality and attention to detail that goes into every vehicle we service.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-secondary hover:bg-secondary/80 text-foreground/70"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              ref={el => imageRefs.current[index] = el}
              className="fade-in-section group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="image-overlay flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-80">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
