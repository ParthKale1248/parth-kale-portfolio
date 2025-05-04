
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-lightSlate py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-display font-bold">
              <span className="text-teal">P</span>K
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">
              &copy; {currentYear} Parth Kale. All rights reserved.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Electronics & Programming Enthusiast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
