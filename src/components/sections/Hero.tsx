
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 animate-fade-in-up opacity-100">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-lg font-mono text-teal mb-4">Hi, my name is</h1>
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-4">
            Parth Kale.
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-lightSlate mb-6">
            Electronics & Programming Enthusiast
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            Blending hardware and software to build innovative IoT, Embedded-Systems, and Robotics solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              asChild 
              className="bg-transparent hover:bg-teal/10 text-teal border border-teal px-6 py-4"
            >
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button 
              asChild 
              variant="ghost" 
              className="flex items-center gap-2 hover:text-teal"
            >
              <a href="#about">
                Explore <ArrowDown size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
