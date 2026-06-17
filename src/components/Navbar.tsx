import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Terminal } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Leadership', id: 'leadership' },
  { label: 'Resume', id: 'resume' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to set active section and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      // Background styling changes after scroll
      setIsScrolled(window.scrollY > 20);

      // Section highlighting
      const scrollPosition = window.scrollY + 120; // offset for navbar height
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-4 bg-darkBg/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)]' 
        : 'py-6 bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="flex items-center space-x-2 text-white font-display font-extrabold text-xl tracking-tight group focus:outline-none"
        >
          <div className="p-2 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Terminal size={18} className="text-white" />
          </div>
          <span>
            DAKSH<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">GAUTAM</span>
          </span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 focus:outline-none ${
                    activeSection === item.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download="Daksh_Gautam_Resume.pdf"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] border border-white/10 transition-all duration-300 scale-100 hover:scale-[1.03] active:scale-95"
          >
            <span>Resume</span>
            <Download size={14} />
          </a>
        </div>

        {/* Mobile menu controls */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Resume button for mobile viewports */}
          <a
            href="/resume.pdf"
            download="Daksh_Gautam_Resume.pdf"
            className="flex items-center space-x-1.5 px-3.5 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_10px_rgba(99,102,241,0.3)] border border-white/10"
          >
            <span>Resume</span>
            <Download size={10} />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1.5 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-darkBg/95 backdrop-blur-lg border-t border-white/5 md:hidden animate-fade-in">
          <ul className="flex flex-col items-center justify-center space-y-6 h-[60vh]">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`text-lg font-medium tracking-wide focus:outline-none ${
                    activeSection === item.id 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 border-b border-indigo-400/50 pb-1' 
                      : 'text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
