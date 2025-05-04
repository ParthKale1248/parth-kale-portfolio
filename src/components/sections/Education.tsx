
import React from 'react';
import { Calendar, GraduationCap } from 'lucide-react';

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  degree,
  institution,
  period,
  description,
}) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-navy/10 p-3 rounded-full">
          <GraduationCap className="h-6 w-6 text-navy" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{degree}</h3>
          <h4 className="text-lg text-navy">{institution}</h4>
          <div className="flex items-center gap-1 text-muted-foreground mt-1">
            <Calendar size={14} />
            <span className="text-sm">{period}</span>
          </div>
          {description && <p className="mt-3 text-muted-foreground">{description}</p>}
        </div>
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const educationItems = [
    {
      degree: "BTech, Electronics & Computer Engineering",
      institution: "SRM IST Chennai",
      period: "Aug 2024 - Jun 2028",
      description: "Focusing on the intersection of electronics hardware and computer systems with specialized courses in embedded systems design."
    },
    {
      degree: "BS, Electronic Systems",
      institution: "IIT Madras",
      period: "May 2024 - Apr 2028",
      description: "Studying advanced electronic systems with emphasis on signal processing, communication systems, and integrated circuit design."
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container">
        <h2 className="section-heading">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {educationItems.map((item, index) => (
            <EducationItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
