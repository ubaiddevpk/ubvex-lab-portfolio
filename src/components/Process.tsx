import { motion } from 'framer-motion';
import { Search, PenTool, Code, Bug, Rocket, Headphones } from 'lucide-react';

const phases = [
  { icon: Search, title: 'Discovery & Strategy', description: 'We dive deep into your business goals, audience, and technical requirements to build a solid project roadmap.' },
  { icon: PenTool, title: 'Design & Prototyping', description: 'Our designers craft wireframes and interactive prototypes so you see the product before a single line of code is written.' },
  { icon: Code, title: 'Development & Engineering', description: 'Agile sprints, clean code, regular demos. You stay informed at every milestone.' },
  { icon: Bug, title: 'QA & Testing', description: 'Rigorous testing across devices, browsers, and edge cases before any launch.' },
  { icon: Rocket, title: 'Launch & Deployment', description: 'Seamless deployment to production with zero downtime and full monitoring in place.' },
  { icon: Headphones, title: 'Support & Growth', description: 'Post-launch support, performance monitoring, and iterative improvements to help your product grow.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A proven delivery process that keeps projects on time, on budget, and above expectations.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div key={phase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="relative">
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <phase.icon className="w-7 h-7 text-white" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0A0A0F] border-2 border-blue-500 flex items-center justify-center text-xs font-bold">{index + 1}</span>
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="font-syne text-xl font-semibold mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{phase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}