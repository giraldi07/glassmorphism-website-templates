import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Database, Cloud, Lock } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Tailored solutions built with cutting-edge technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences.',
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Responsive and dynamic web applications.',
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Efficient and secure data management systems.',
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and solutions.',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Protecting your digital assets and data.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your business needs.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 mb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={itemVariants}>
                <GlassCard className="h-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-12 h-12 text-white mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-white/80">{service.description}</p>
                  </motion.div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 transform -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {['Discovery', 'Planning', 'Development', 'Delivery'].map((step, index) => (
              <GlassCard key={step} delay={index * 0.2}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{step}</h3>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;