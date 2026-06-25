import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const trustedLogos = ['DataVault', 'HealthBridge', 'FinCore', 'RetailEdge', 'PropTech', 'MediFlow'];

export default function Hero() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '-3s' }} />
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Trusted by growing businesses worldwide</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Engineer Digital Products <span className="gradient-text">That Scale</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            UBveX Lab is a full-service software development company specializing in AI, Web, Mobile, and Design solutions for startups and enterprises worldwide.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium border border-white/20 hover:bg-white/5 transition-all duration-300">
              View Our Work <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25">
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {trustedLogos.map((logo, index) => (
                <motion.div key={logo} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }} className="text-gray-600 hover:text-gray-400 transition-colors font-medium">
                  {logo}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}