import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Clock } from 'lucide-react';
import { supabase, BlogPost } from '../lib/supabase';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchPosts(); }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase.from('blog_posts').select('*').eq('published', true).order('published_at', { ascending: false }).limit(3);
      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog" className="py-24 bg-[#0D0D1A]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">Insights from UBveX Lab</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We share what we know.</p>
          </motion.div>
          {loading ? (<div className="text-center text-gray-400">Loading articles...</div>) : (
            <div className="grid md:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card-hover overflow-hidden group cursor-pointer">
                  {post.category && (<div className="px-6 pt-6"><span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">{post.category}</span></div>)}
                  <div className="p-6">
                    <h3 className="font-syne text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                    {post.excerpt && (<p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>)}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{post.read_time} min read</span></div>
                      {post.author_name && (<span>By {post.author_name}</span>)}
                    </div>
                    <a href={`#${post.slug}`} className="inline-flex items-center gap-1 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors">Read Article <ArrowUp className="w-4 h-4 rotate-45 group-hover:translate-x-0.5 transition-transform" /></a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}