
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="col-span-2">
            <p className="text-lg mb-4">
              I am an Electronics and Programming enthusiast. I like to learn and explore the field of electronics and programming. I am deeply interested in topics like IoT, Robotics, and Embedded Systems as these domains combine hardware and software.
            </p>
            <p className="text-lg mb-4">
              With a strong foundation in both electronics and programming, I enjoy working on projects that bridge the gap between physical hardware and intelligent software solutions. My passion lies in creating systems that interact with the real world through sensors, actuators, and communication protocols.
            </p>
            <p className="text-lg">
              Currently pursuing my education in both Electronic Systems and Electronics & Computer Engineering, I'm constantly working to deepen my knowledge and apply my skills to practical, innovative projects.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="rounded-full overflow-hidden border-4 border-teal shadow-lg h-64 w-64">
              <img 
                src="/lovable-uploads/28429b3f-6908-4c6e-ad4b-4b3b7de98540.png" 
                alt="Parth Kale" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
