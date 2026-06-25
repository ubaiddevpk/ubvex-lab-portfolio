import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { supabase, PortfolioProject } from '../lib/supabase';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI' },
  { id: 'design', label: 'Design' },
];

const placeholderImages = [
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
  'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
  'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg',
  'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg',
  'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg',
];

export default function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => { fetchProjects(); }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase.from('portfolio_projects').select('*').order('order_index', { ascending: true });
      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A selection of products we've designed, built, and launched.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button key={category.id} onClick={() => setActiveFilter(category.id)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeFilter === category.id ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'}`}>
                {category.label}
              </button>
            ))}
          </motion.div>
          {loading ? (<div className="text-center text-gray-400">Loading projects...</div>) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="group relative overflow-hidden rounded-xl bg-[#0D0D1A] border border-white/10">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.image_url || placeholderImages[index % placeholderImages.length]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.industry && (<span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded mb-2">{project.industry}</span>)}
                      <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                      <a href="#contact" className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors">View Case Study <ArrowUp className="w-4 h-4 rotate-45" /></a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-syne text-xl font-semibold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (<span key={tech} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded">{tech}</span>))}
                      {project.technologies.length > 3 && (<span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded">+{project.technologies.length - 3}</span>)}
                    </div>
                  </div>
                  {project.featured && (<div className="absolute top-4 right-4 px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded">Featured</div>)}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}