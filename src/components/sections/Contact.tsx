
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon, label, href, external = true }) => {
  return (
    <a 
      href={href} 
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 text-navy hover:text-teal transition-colors py-2"
    >
      <div className="contact-icon">
        {icon}
      </div>
      <span>{label}</span>
    </a>
  );
};

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, handle form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
            <p className="mb-6 text-muted-foreground">
              I'm always open to discussing new projects, opportunities, or just chatting about electronics and programming.
            </p>
            
            <div className="space-y-4 mt-8">
              <ContactLink 
                icon={<Mail size={16} />} 
                label="parthkale8759@gmail.com" 
                href="mailto:parthkale8759@gmail.com" 
                external={false}
              />
              <ContactLink 
                icon={<Phone size={16} />} 
                label="+91 99938 37251" 
                href="tel:+919993837251" 
                external={false}
              />
              <ContactLink 
                icon={<Linkedin size={16} />} 
                label="linkedin.com/in/parth-kale-3865ab1b2" 
                href="https://linkedin.com/in/parth-kale-3865ab1b2" 
              />
              <ContactLink 
                icon={<Github size={16} />} 
                label="github.com/ParthKale1248" 
                href="https://github.com/ParthKale1248" 
              />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can I help you?" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="min-h-32" 
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-teal text-navy hover:bg-teal/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
