import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Innovation Street, Tech City, TC 12345',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@company.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="pt-40 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business.
          </p>
        </motion.div>
      </div>

      {/* Contact Form & Info */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/40"
                    placeholder="Your message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <GlassCard key={info.title} delay={index * 0.1}>
                  <div className="flex items-start space-x-4">
                    <Icon className="w-6 h-6 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      <p className="text-white/80">{info.details}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;