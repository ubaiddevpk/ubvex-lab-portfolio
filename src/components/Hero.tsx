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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.12)_1px,transparent_0)] bg-[size:48px_48px]" />
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute top-[20%] left-[20%] w-[500px] h-[500px]">
          <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full bg-blue-600/30 rounded-full blur-[120px]" />
        </motion.div>
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }} className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px]">
          <motion.div animate={{ x: [0, -25, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full bg-purple-600/25 rounded-full blur-[120px]" />
        </motion.div>
        <motion.div initial={{ scale: 0.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2, delay: 0.5, ease: "easeOut" }} className="absolute top-[60%] left-[10%] w-[300px] h-[300px]">
          <motion.div animate={{ x: [0, 40, 0], y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full bg-cyan-500/20 rounded-full blur-[100px]" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full" />
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} className="absolute w-1 h-1 bg-blue-400/40 rounded-full" style={{ top: `${15 + i * 15}%`, left: `${10 + i * 12}%` }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }} />
        ))}
      </div>
      <div className="relative container mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}><Sparkles className="w-4 h-4 text-blue-400" /></motion.div>
            <span className="text-sm text-gray-300">Trusted by growing businesses worldwide</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }} className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-block">We Engineer Digital Products</motion.span>{' '}
            <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="gradient-text inline-block">That Scale</motion.span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            UBveX Lab is a full-service software development company specializing in AI, Web, Mobile, and Design solutions for startups and enterprises worldwide.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }} className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium border border-white/20 hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">View Our Work<ArrowRight className="w-4 h-4" /></motion.a>
            <motion.a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 relative overflow-hidden group">
              <span className="relative z-10">Get a Free Consultation</span><ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" /><div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {trustedLogos.map((logo, index) => (
                <motion.div key={logo} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 + index * 0.08 }} whileHover={{ scale: 1.05 }} className="text-gray-500 hover:text-gray-300 transition-colors font-medium cursor-default">{logo}</motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-1.5">
          <motion.div animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}