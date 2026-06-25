import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', row: 1 }, { name: 'Next.js', row: 1 }, { name: 'Node.js', row: 1 }, { name: 'Python', row: 1 }, { name: 'Flutter', row: 1 }, { name: 'React Native', row: 1 },
  { name: 'TensorFlow', row: 2 }, { name: 'PyTorch', row: 2 }, { name: 'AWS', row: 2 }, { name: 'GCP', row: 2 }, { name: 'Docker', row: 2 }, { name: 'Kubernetes', row: 2 },
  { name: 'PostgreSQL', row: 1 }, { name: 'MongoDB', row: 1 }, { name: 'Redis', row: 1 }, { name: 'Figma', row: 1 }, { name: 'TypeScript', row: 2 }, { name: 'GraphQL', row: 2 }, { name: 'Supabase', row: 2 }, { name: 'Firebase', row: 2 }, { name: 'OpenAI', row: 2 }, { name: 'LangChain', row: 2 },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#0D0D1A] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">Technologies We Work With</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We choose the right tool for the job — not the trendy one.</p>
          </motion.div>
          <div className="relative">
            <div className="flex gap-8 mb-4 animate-scroll">{[...technologies.filter(t => t.row === 1), ...technologies.filter(t => t.row === 1)].map((tech, index) => (<div key={`${tech.name}-${index}`} className="shrink-0 px-6 py-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">{tech.name}</div>))}</div>
            <div className="flex gap-8 animate-scroll-reverse">{[...technologies.filter(t => t.row === 2), ...technologies.filter(t => t.row === 2)].map((tech, index) => (<div key={`${tech.name}-${index}`} className="shrink-0 px-6 py-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors whitespace-nowrap">{tech.name}</div>))}</div>
          </div>
        </div>
      </div>
    </section>
  );
}