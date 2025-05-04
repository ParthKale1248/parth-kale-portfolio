
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
      title: "Autonomous Line-Following Robot",
      description: "8-sensor QTRA array, TB6612 driver, PID steering for sharp 90° turns",
      technologies: ["Arduino", "PID Control", "Motor Drivers", "Sensors"]
    },
    {
      title: "IoT-Enabled Smart Container",
      description: "ESP32 + MQTT server on Raspberry Pi 5, web dashboard for real-time fill-level & temperature monitoring",
      technologies: ["ESP32", "MQTT", "Raspberry Pi", "Web Dashboard"]
    },
    {
      title: "Kalman-Filtered Multi-Sensor Fusion System",
      description: "Raspberry Pi Pico, LM35 temp, SW420 vibration, BMP180 pressure; Python plots of raw vs filtered vs fused data",
      technologies: ["Raspberry Pi Pico", "Python", "Kalman Filter", "Data Visualization"]
    },
    {
      title: "RTOS-Based Maze-Solving Bot",
      description: "FreeRTOS on STM32, ultrasonic and IR sensors, Dijkstra path-planning, backtracking logic",
      technologies: ["FreeRTOS", "STM32", "Path Planning", "Sensors"]
    },
    {
      title: "Over-The-Air (OTA) Reflashing Pipeline",
      description: "Custom OTA protocol for ESP32 network; blockchain-backed update logs; auto-disconnect on security breach",
      technologies: ["ESP32", "OTA Updates", "Blockchain", "Security"]
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
