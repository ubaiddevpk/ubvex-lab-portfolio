import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Team', href: '#team' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0F]/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2">
              <div className="relative">
                <Hexagon className="w-8 h-8 text-blue-500" />
                <div className="absolute inset-0 bg-blue-500/30 blur-lg animate-glow" />
              </div>
              <span className="font-syne text-xl font-bold">
                UBveX <span className="gradient-text">Lab</span>
              </span>
            </a>
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium transition-colors relative ${
                    activeSection === item.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <motion.div layoutId="activeNav" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" />
                  )}
                </a>
              ))}
            </div>
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-sm hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
              >
                Start a Project <span>→</span>
              </a>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-[#0A0A0F]/95 backdrop-blur-lg" />
            <div className="relative pt-24 px-6">
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.a key={item.name} href={item.href} onClick={(e) => handleNavClick(e, item.href)} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }} className="text-2xl font-syne font-semibold text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </motion.a>
                ))}
                <motion.a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navItems.length * 0.05 }} className="inline-flex items-center justify-center gap-2 px-6 py-4 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-center">
                  Start a Project →
                </motion.a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}