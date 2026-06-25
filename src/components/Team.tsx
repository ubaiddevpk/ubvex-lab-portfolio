import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';
import { supabase, TeamMember } from '../lib/supabase';

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchTeam(); }, []);

  const fetchTeam = async () => {
    try {
      const { data, error } = await supabase.from('team_members').select('*').order('order_index', { ascending: true });
      if (error) throw error;
      setTeam(data || []);
    } catch (error) {
      console.error('Error fetching team:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="team" className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">The Team Behind the Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A collective of engineers, designers, and strategists obsessed with building great products.</p>
          </motion.div>
          {loading ? (<div className="text-center text-gray-400">Loading team...</div>) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div key={member.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card-hover p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center text-3xl font-syne font-bold">{member.name.split(' ').map(n => n[0]).join('')}</div>
                  <h3 className="font-syne text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-3">
                    {member.linkedin_url && (<a href={member.linkedin_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><Linkedin className="w-4 h-4 text-gray-400 hover:text-white" /></a>)}
                    {member.github_url && (<a href={member.github_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><Github className="w-4 h-4 text-gray-400 hover:text-white" /></a>)}
                    {member.twitter_url && (<a href={member.twitter_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"><Twitter className="w-4 h-4 text-gray-400 hover:text-white" /></a>)}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}