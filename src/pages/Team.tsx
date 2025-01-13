import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Team = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

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
          <h1 className="text-5xl font-bold text-white mb-6">Our Team</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the talented individuals who make innovation possible.
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative mb-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-white/80 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <a href={member.social.linkedin} className="text-white/80 hover:text-white">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-white/80 hover:text-white">
                      <Twitter size={20} />
                    </a>
                    <a href={member.social.github} className="text-white/80 hover:text-white">
                      <Github size={20} />
                    </a>
                  </div>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-white/80">
              We constantly push boundaries and embrace new technologies.
            </p>
          </GlassCard>
          <GlassCard delay={0.4}>
            <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
            <p className="text-white/80">
              Together we achieve more through open communication and teamwork.
            </p>
          </GlassCard>
          <GlassCard delay={0.6}>
            <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
            <p className="text-white/80">
              We strive for excellence in everything we do.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Team;