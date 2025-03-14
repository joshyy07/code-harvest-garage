import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Clock, MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const formContainerRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (formContainerRef.current) {
      observer.observe(formContainerRef.current);
    }

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (formContainerRef.current) {
        observer.unobserve(formContainerRef.current);
      }
      if (infoRef.current) {
        observer.unobserve(infoRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Appointment Request Sent",
        description: "We'll contact you shortly to confirm your appointment.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="pt-12 pb-24">
      <div className="section-container">
        <div 
          ref={sectionRef} 
          className="text-center mb-16 fade-in-section"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule your service appointment or contact us with any questions. We're here to provide the premium care your vehicle deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            ref={formContainerRef}
            className="fade-in-section rounded-xl overflow-hidden shadow-lg backdrop-blur-card p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Service Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    required
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service">Service Type</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="repair">Repair</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="detailing">Detailing</option>
                    <option value="performance">Performance Tuning</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your vehicle and service needs..."
                  rows={4}
                  className="input-field"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Appointment"}
              </Button>
            </form>
          </div>

          <div 
            ref={infoRef}
            className="fade-in-section"
          >
            <div className="rounded-xl overflow-hidden h-72 mb-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215281233507!2d-73.9875!3d40.758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzI4LjgiTiA3M8KwNTknMTUuMCJX!5e0!3m2!1sen!2sus!4v1625068500000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
                title="Premium Auto Garage Location"
              ></iframe>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-muted-foreground">123 Luxury Lane, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-muted-foreground">(212) 555-1234</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-muted-foreground">service@premiumautogarage.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Working Hours</h4>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mt-1 mr-3" />
                  <div>
                    <h4 className="font-medium">Appointment Only</h4>
                    <p className="text-muted-foreground">We service by appointment to ensure each client receives our full attention.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
