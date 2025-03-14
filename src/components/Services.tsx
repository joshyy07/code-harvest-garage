
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Wrench, Droplet, Battery, Gauge, Shield } from 'lucide-react';

// Service data
const services = [
  {
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostic technology to identify and resolve complex engine issues with precision.',
    icon: <Settings className="w-10 h-10 text-primary" />,
    highlight: true
  },
  {
    title: 'Premium Maintenance',
    description: 'Comprehensive maintenance packages tailored for luxury and high-performance vehicles.',
    icon: <Wrench className="w-10 h-10 text-primary" />
  },
  {
    title: 'Fluid Services',
    description: 'Complete fluid flushes and replacements using only manufacturer-recommended products.',
    icon: <Droplet className="w-10 h-10 text-primary" />
  },
  {
    title: 'Electrical Systems',
    description: 'Expert diagnostics and repair of sophisticated electrical and computer systems.',
    icon: <Battery className="w-10 h-10 text-primary" />
  },
  {
    title: 'Performance Tuning',
    description: 'Precision tuning and upgrades to optimize your vehicle's performance capabilities.',
    icon: <Gauge className="w-10 h-10 text-primary" />
  },
  {
    title: 'Warranty Service',
    description: 'Manufacturer-certified maintenance and repairs that maintain your vehicle warranty.',
    icon: <Shield className="w-10 h-10 text-primary" />
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="section-container">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 fade-in-section"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to keep your luxury vehicle performing at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`fade-in-section card-hover overflow-hidden ${
                service.highlight ? 'border-primary/20 shadow-lg' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
