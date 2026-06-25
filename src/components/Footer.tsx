import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';

const footerLinks = {
  Company: [{ name: 'About Us', href: '#about' }, { name: 'Careers', href: '#' }, { name: 'Blog', href: '#blog' }, { name: 'Press', href: '#' }],
  Services: [{ name: 'Web Development', href: '#services' }, { name: 'Mobile Apps', href: '#services' }, { name: 'AI/ML', href: '#services' }, { name: 'UI/UX Design', href: '#services' }, { name: 'Cloud/DevOps', href: '#services' }],
  Work: [{ name: 'Portfolio', href: '#portfolio' }, { name: 'Case Studies', href: '#portfolio' }, { name: 'Testimonials', href: '#testimonials' }],
  Connect: [{ name: 'Contact', href: '#contact' }, { name: 'LinkedIn', href: 'https://linkedin.com' }, { name: 'GitHub', href: 'https://github.com' }, { name: 'Twitter', href: 'https://twitter.com' }],
};

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0D1A] border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-syne text-3xl md:text-5xl font-bold mb-8">Ready to Build? <span className="gradient-text">Let's Talk.</span></motion.h3>
          <motion.a initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25">Start Your Project <ArrowRight className="w-5 h-5" /></motion.a>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}><h4 className="font-semibold mb-4 text-white">{title}</h4><ul className="space-y-3">{links.map((link) => (<li key={link.name}><a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-sm text-gray-400 hover:text-white transition-colors">{link.name}</a></li>))}</ul></div>
            ))}
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm">Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by UBveX Lab</div>
            <div className="flex items-center gap-6 text-sm text-gray-400"><span>© {new Date().getFullYear()} UBveX Lab. All rights reserved.</span><a href="#" className="hover:text-white transition-colors">Privacy Policy</a><a href="#" className="hover:text-white transition-colors">Terms</a></div>
          </div>
        </div>
      </div>
    </footer>
  );
}