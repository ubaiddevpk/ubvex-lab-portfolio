import { motion } from 'framer-motion';
import { CheckCircle, Users, Scale, BarChart } from 'lucide-react';

const features = [
  { icon: CheckCircle, title: 'End-to-End Ownership', description: 'We handle everything from strategy to deployment — one team, one vision, zero handoff chaos.' },
  { icon: Users, title: 'Agile & Transparent', description: 'Weekly updates, live project boards, and open communication so you always know where things stand.' },
  { icon: Scale, title: 'Scalable Architecture', description: 'We build for today and design for tomorrow — your product can grow without expensive rewrites.' },
  { icon: BarChart, title: 'Business-First Thinking', description: "We don't just write code. We understand your market, your users, and what it takes to succeed." },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-[#0D0D1A]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">Why Businesses Choose UBveX Lab</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We combine technical excellence with business acumen to deliver exceptional results.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="glass-card p-8 flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center shrink-0">
                  <feature.icon className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-syne text-xl font-semibold mb-2 flex items-center gap-2"><span className="text-green-400">✓</span>{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}