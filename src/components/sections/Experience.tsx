
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  isLast?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  location,
  period,
  description,
  isLast = false,
}) => {
  return (
    <div className="relative pl-12">
      {!isLast && <div className="timeline-connector"></div>}
      <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-teal flex items-center justify-center border-4 border-background z-10">
        <div className="w-1 h-1 rounded-full bg-navy"></div>
      </div>
      <div className="mb-10">
        <h3 className="text-xl font-semibold">{title}</h3>
        <h4 className="text-lg font-medium text-navy">{company}</h4>
        <div className="flex flex-wrap items-center gap-x-4 text-muted-foreground my-2">
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span className="text-sm">{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "SSUP Research Intern",
      company: "Sony Research India",
      location: "Chennai, TN",
      period: "Jan 2025 - Present",
      description: "Working on cutting-edge research projects in electronics and IoT applications, contributing to Sony's innovation ecosystem."
    },
    {
      title: "Member & Project Assistant",
      company: "IEEE RAS, IEEE SRMIST Student Branch",
      location: "Chennai, TN",
      period: "Oct 2024 - Present",
      description: "Assisting with robotics projects, workshops, and technical events as part of the IEEE Robotics and Automation Society student branch."
    },
    {
      title: "Electronics & IoT Member",
      company: "Aakash Research Labs",
      location: "Chennai, TN",
      period: "Sep 2024 - Present",
      description: "Developing IoT solutions and contributing to electronics research projects in collaboration with other lab members."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              description={exp.description}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
