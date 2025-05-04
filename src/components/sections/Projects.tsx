
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  image,
  github,
  link,
}) => {
  return (
    <div className="project-card group">
      <div className="relative h-48 bg-navy/5 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover card-hover" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy/10 to-teal/10 card-hover">
            <h3 className="font-mono text-xl text-navy">{title.substring(0, 2).toUpperCase()}</h3>
          </div>
        )}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            {github && (
              <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-teal transition-colors"
                aria-label="View GitHub repository"
              >
                <Github size={24} />
              </a>
            )}
            {link && (
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-teal transition-colors"
                aria-label="Visit project website"
              >
                <ExternalLink size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs font-mono bg-navy/5 text-navy px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Maze Solver Robot",
      description: "13 analog sensors arranged in two rows for precise line detection, PID-based control loop, implements multiple pathfinding algorithms like wall-following and Dijkstra for efficient maze navigation",
      technologies: ["PID Control", "Pathfinding Algorithms", "Sensors", "Microcontrollers"]
    },
    {
      title: "Line Follower Robot",
      description: "Array of 16 digital IR sensors for line tracking, high-torque 4000 RPM DC motors, fine-tuned PID for smooth cornering and speed regulation",
      technologies: ["IR Sensors", "DC Motors", "PID Control", "Electronics"]
    },
    {
      title: "OTA-Based Microcontroller System",
      description: "ESP32-based architecture with secure over-the-air firmware update pipeline, digital signatures and checksum validation for integrity",
      technologies: ["ESP32", "OTA Updates", "Security", "Firmware"]
    },
    {
      title: "Secure Electronics for Cyber Threat Protection",
      description: "Local mesh network of ESP devices storing sensor logs on a private blockchain, real-time anomaly detection and auto-disconnect on breach",
      technologies: ["Mesh Network", "Blockchain", "Security", "IoT"]
    },
    {
      title: "Smart Inventory Management System",
      description: "Load-cell integration with microcontroller, publishes weight data to MQTT broker, web dashboard displays real-time inventory levels with alert thresholds",
      technologies: ["MQTT", "Load Cells", "Web Dashboard", "Real-time Monitoring"]
    },
    {
      title: "Motion Analyser",
      description: "MPU6050 IMU sensor paired with Raspberry Pi Pico, Python scripts for data capture, real-time plotting and motion parameter analytics",
      technologies: ["Raspberry Pi Pico", "Python", "IMU Sensors", "Data Analytics"]
    },
    {
      title: "Stock Market Trading Simulator App",
      description: "Android application built with Java and XML layouts, utilizes Firebase for authentication and backend, simulates trading scenarios with virtual currency",
      technologies: ["Android", "Java", "Firebase", "UI/UX"]
    },
    {
      title: "Anti-COVID Door",
      description: "IR temperature sensor at entry point, Arduino-based control logic to grant or deny access and send alerts if fever threshold is exceeded",
      technologies: ["Arduino", "IR Sensors", "Automation", "Health Tech"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container">
        <h2 className="section-heading">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="bg-navy text-white hover:bg-navy/80"
          >
            <a href="https://github.com/ParthKale1248" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View More Projects <Github size={16} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
