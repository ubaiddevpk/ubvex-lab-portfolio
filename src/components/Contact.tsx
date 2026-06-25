import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Instagram, Zap } from 'lucide-react';
import { supabase, ContactInquiry } from '../lib/supabase';

const services = ['Web Development', 'Mobile App', 'AI/ML', 'UI/UX Design', 'Cloud/DevOps', 'E-Commerce', 'Cybersecurity', 'Other'];
const budgets = ['Under $5K', '$5K - $15K', '$15K - $50K', '$50K+'];

export default function Contact() {
  const [formData, setFormData] = useState<ContactInquiry>({ full_name: '', company_name: '', email: '', phone: '', service_needed: '', budget_range: '', project_description: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const { error: submitError } = await supabase.from('contact_inquiries').insert([formData]);
      if (submitError) throw submitError;
      setSuccess(true);
      setFormData({ full_name: '', company_name: '', email: '', phone: '', service_needed: '', budget_range: '', project_description: '' });
    } catch (err) {
      setError('Failed to send inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0A0F]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tell us about your project and we'll get back to you within 24 hours.</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium mb-2">Full Name *</label><input type="text" required value={formData.full_name} onChange={(e) => setFormData({ ...formData, full_name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="John Smith" /></div>
                  <div><label className="block text-sm font-medium mb-2">Company Name</label><input type="text" value={formData.company_name} onChange={(e) => setFormData({ ...formData, company_name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="Acme Inc." /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium mb-2">Email *</label><input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="john@company.com" /></div>
                  <div><label className="block text-sm font-medium mb-2">Phone</label><input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" placeholder="+1 (555) 000-0000" /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div><label className="block text-sm font-medium mb-2">Service Needed</label><select value={formData.service_needed} onChange={(e) => setFormData({ ...formData, service_needed: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"><option value="" className="bg-[#0A0A0F]">Select a service</option>{services.map((service) => (<option key={service} value={service} className="bg-[#0A0A0F]">{service}</option>))}</select></div>
                  <div><label className="block text-sm font-medium mb-2">Project Budget</label><select value={formData.budget_range} onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"><option value="" className="bg-[#0A0A0F]">Select budget range</option>{budgets.map((budget) => (<option key={budget} value={budget} className="bg-[#0A0A0F]">{budget}</option>))}</select></div>
                </div>
                <div><label className="block text-sm font-medium mb-2">Project Description</label><textarea rows={4} value={formData.project_description} onChange={(e) => setFormData({ ...formData, project_description: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." /></div>
                {error && (<div className="p-4 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg">{error}</div>)}
                {success && (<div className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg">Thank you! We'll get back to you within 24 hours.</div>)}
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed">{loading ? 'Sending...' : (<><Send className="w-5 h-5" />Send Message</>)}</button>
              </form>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:pl-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0"><Mail className="w-6 h-6 text-blue-400" /></div><div><h4 className="font-medium mb-1">Email Us</h4><a href="mailto:hello@ubvexlab.com" className="text-gray-400 hover:text-white transition-colors">hello@ubvexlab.com</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0"><Phone className="w-6 h-6 text-blue-400" /></div><div><h4 className="font-medium mb-1">Call Us</h4><a href="tel:+1555000000" className="text-gray-400 hover:text-white transition-colors">+1 (555) 000-0000</a></div></div>
                <div className="flex items-start gap-4"><div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0"><MapPin className="w-6 h-6 text-blue-400" /></div><div><h4 className="font-medium mb-1">Location</h4><p className="text-gray-400">Remote-first · Serving clients globally</p></div></div>
              </div>
              <div className="mt-10"><h4 className="font-medium mb-4">Connect With Us</h4><div className="flex gap-4"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5 text-gray-400 hover:text-white" /></a><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Github className="w-5 h-5 text-gray-400 hover:text-white" /></a><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Twitter className="w-5 h-5 text-gray-400 hover:text-white" /></a><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"><Instagram className="w-5 h-5 text-gray-400 hover:text-white" /></a></div></div>
              <div className="mt-10 p-4 glass-card flex items-center gap-3"><Zap className="w-5 h-5 text-yellow-400" /><span className="text-sm text-gray-300">Average response time: Under 4 hours</span></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}