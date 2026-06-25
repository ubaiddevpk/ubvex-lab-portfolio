import { motion } from 'framer-motion';
import { Bot, Globe, Smartphone, Palette, Cloud, ShoppingCart, Shield, Link } from 'lucide-react';

const services = [
  { icon: Bot, title: 'Artificial Intelligence & ML', description: 'Custom AI models, LLM integrations, chatbots, computer vision, predictive analytics, and intelligent automation for businesses.' },
  { icon: Globe, title: 'Web Development', description: 'High-performance websites, SaaS platforms, admin dashboards, and web apps using React, Next.js, Node.js, and modern stacks.' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform iOS & Android apps using Flutter and React Native — from MVPs to enterprise-grade applications.' },
  { icon: Palette, title: 'UI/UX Design', description: 'User research, wireframing, prototyping, and full design systems that convert. We design experiences, not just screens.' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'AWS, GCP, Azure infrastructure setup, CI/CD pipelines, Docker/Kubernetes, and scalable cloud architecture.' },
  { icon: ShoppingCart, title: 'E-Commerce Development', description: 'Custom storefronts, Shopify/WooCommerce solutions, payment integrations, and conversion-optimized shopping experiences.' },
  { icon: Shield, title: 'Cybersecurity', description: 'Penetration testing, secure software architecture, vulnerability assessments, and compliance (GDPR, ISO 27001).' },
  { icon: Link, title: 'API & Integrations', description: 'RESTful and GraphQL APIs, third-party integrations, microservices architecture, and backend systems.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0D0D1A]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="font-syne text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">End-to-end digital solutions built for performance, scale, and impact.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.05 }} className="group glass-card-hover p-6 cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center mb-4 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="font-syne text-lg font-semibold mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}