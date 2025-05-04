
import React from 'react';
import { Github } from 'lucide-react';

interface SkillCardProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, items, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-border hover:border-teal transition-colors duration-300">
      <div className="flex flex-col items-center mb-4">
        <div className="skill-icon mb-2">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="h-1.5 w-1.5 bg-teal rounded-full mr-2"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Import custom SVG icons for the skills
const IoTIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7V17M12 7C9.23858 7 7 9.23858 7 12M12 7C14.7614 7 17 9.23858 17 12M12 17C9.23858 17 7 14.7614 7 12M12 17C14.7614 17 17 14.7614 17 12M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PythonIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 7C16.9706 7 19 8.0198 19 11.5C19 14.9802 17.5 16 12 16M12 7C7.02944 7 5 8.0198 5 11.5C5 14.9802 6.5 16 12 16M12 7V3M12 16V20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20.5C14.0249 20.5 15 19.5 15 17.5C15 15.5 14.0249 14.5 12 14.5C9.97507 14.5 9 15.5 9 17.5C9 19.5 9.97507 20.5 12 20.5Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 4.5C14.0249 4.5 15 5.5 15 7.5C15 9.5 14.0249 10.5 12 10.5C9.97507 10.5 9 9.5 9 7.5C9 5.5 9.97507 4.5 12 4.5Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const AndroidIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9H21V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 4L12 9L17 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 15.5C8.27614 15.5 8.5 15.2761 8.5 15C8.5 14.7239 8.27614 14.5 8 14.5C7.72386 14.5 7.5 14.7239 7.5 15C7.5 15.2761 7.72386 15.5 8 15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15.5C12.2761 15.5 12.5 15.2761 12.5 15C12.5 14.7239 12.2761 14.5 12 14.5C11.7239 14.5 11.5 14.7239 11.5 15C11.5 15.2761 11.7239 15.5 12 15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 15.5C16.2761 15.5 16.5 15.2761 16.5 15C16.5 14.7239 16.2761 14.5 16 14.5C15.7239 14.5 15.5 14.7239 15.5 15C15.5 15.2761 15.7239 15.5 16 15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmbeddedIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 10L10 12L8 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 14L14 12L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ControlIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 3V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const HardwareIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 8H6.01M6 16H6.01M6 12H10M14 12H18M10 6V18C10 19.1046 10.8954 20 12 20V20C13.1046 20 14 19.1046 14 18V6C14 4.89543 13.1046 4 12 4V4C10.8954 4 10 4.89543 10 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CommunicationIcon = () => (
  <svg className="skill-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.7 10.7L4.1 6.1C4.1 6.1 3 7.3 3 9.5C3 11.7 4.1 12.9 4.1 12.9L8.7 8.3C9.1 7.9 9.1 11.1 8.7 10.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.3 10.7L19.9 6.1C19.9 6.1 21 7.3 21 9.5C21 11.7 19.9 12.9 19.9 12.9L15.3 8.3C14.9 7.9 14.9 11.1 15.3 10.7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 20C10.8954 20 10 19.1046 10 18V15C10 14.4477 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V18C14 19.1046 13.1046 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages & IDEs",
      icon: <EmbeddedIcon />,
      items: [
        "C",
        "Embedded C",
        "Python",
        "MicroPython",
        "Rust",
        "Flutter",
        "Arduino IDE",
        "Thonny",
        "VS Code",
        "Android Studio",
      ],
    },
    {
      title: "Embedded Platforms & Boards",
      icon: <HardwareIcon />,
      items: [
        "Arduino (UNO, Nano, Pro Mini, Mega, Leonardo, Nano 33 IoT)",
        "ESP8266",
        "ESP32",
        "Raspberry Pi Pico",
      ],
    },
    {
      title: "Hardware Interfacing & Prototyping",
      icon: <HardwareIcon />,
      items: [
        "Analog/Digital Sensors",
        "Displays",
        "Communication Modules",
        "Breadboarding",
        "Zero PCB Prototyping",
        "PCB Design in Altium",
        "Flux Soldering",
      ],
    },
    {
      title: "Protocols & Peripherals",
      icon: <CommunicationIcon />,
      items: [
        "UART",
        "I2C",
        "SPI",
        "MQTT",
        "BLE",
        "CAN",
        "GPIO Control",
        "Timers",
        "ADC/DAC",
        "Interrupt Handling",
      ],
    },
    {
      title: "Tools & OS",
      icon: <Github className="skill-icon" />,
      items: ["Linux (CLI & Scripting)", "Git", "GitHub"],
    },
    {
      title: "Sensors & Control",
      icon: <ControlIcon />,
      items: ["Sensor Interfacing", "Motor Control & Drivers", "PID Controllers"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container">
        <h2 className="section-heading">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              title={category.title}
              items={category.items}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
