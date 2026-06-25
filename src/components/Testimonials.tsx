import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, Testimonial } from '../lib/supabase';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase.from('testimonials').select('*').order('order_index', { ascending: true });
      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setInterval(next, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Don't take our word for it.</p>
          </motion.div>
          {loading ? (<div className="text-center text-gray-400">Loading testimonials...</div>) : testimonials.length > 0 ? (
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="glass-card p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 text-blue-600/30 mx-auto mb-6" />
                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-8">"{testimonials[current].quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonials[current].author_name}</p>
                    <p className="text-sm text-gray-400">{testimonials[current].author_title}{testimonials[current].company && `, ${testimonials[current].company}`}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              {testimonials.length > 1 && (
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={prev} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                  <div className="flex items-center gap-2">{testimonials.map((_, index) => (<button key={index} onClick={() => setCurrent(index)} className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-blue-500 w-6' : 'bg-white/20 hover:bg-white/40'}`} />))}</div>
                  <button onClick={next} className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5" /></button>
                </div>
              )}
            </div>
          ) : (<div className="text-center text-gray-400">No testimonials available.</div>)}
        </div>
      </div>
    </section>
  );
}