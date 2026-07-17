import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-colors duration-500 border-b border-transparent ${
          scrolled
            ? 'bg-[#F5ECD7]/95 backdrop-blur-md border-[#EFE0C4] shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex flex-col items-center group">
            <span className={`font-serif text-2xl tracking-wider transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-[#FAFAF5]'}`}>Ekaant</span>
            <span className={`font-devanagari text-xs tracking-[0.2em] opacity-80 mt-0.5 transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-[#FAFAF5]'}`}>एकांत</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                    scrolled ? 'text-foreground/80' : 'text-[#FAFAF5]/90'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'bg-primary text-primary-foreground hover:bg-accent'
                  : 'bg-[#FAFAF5] text-primary hover:bg-[#FAFAF5]/90'
              }`}
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5ECD7] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="font-serif text-3xl text-primary hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-sm font-medium tracking-wider hover:bg-accent transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </>
  );
}
