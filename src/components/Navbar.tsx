
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'py-3 bg-background/95 backdrop-blur-sm shadow-sm' : 'py-5'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold text-navy">
          <span className="text-teal">P</span>K
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NavLinks.map((link, index) => (
            <a key={index} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 border border-teal text-teal rounded-md hover:bg-teal/10 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-navy"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          'fixed inset-0 bg-background/98 backdrop-blur-md flex flex-col items-center justify-center space-y-6 transition-transform duration-300 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {NavLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-xl nav-link"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="px-5 py-2 border border-teal text-teal rounded-md hover:bg-teal/10 transition-colors mt-4"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
