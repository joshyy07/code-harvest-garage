
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }

      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="fade-in-section relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1613214456344-a9471d983252?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Premium Auto Garage" 
              className="object-cover w-full h-full transition-transform duration-10000 hover:scale-110"
            />
          </div>

          <div 
            ref={contentRef}
            className="fade-in-section space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Since 1995
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Excellence in Automotive Care for Over 25 Years</h2>
            <p className="text-lg text-muted-foreground">
              Premium Auto Garage was founded with a singular vision: to provide the highest standard of automotive care for luxury and high-performance vehicles. Our team of certified technicians combines decades of experience with continuous training on the latest automotive technologies.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Expert Technicians</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
            <Button className="mt-6">Our Story</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
