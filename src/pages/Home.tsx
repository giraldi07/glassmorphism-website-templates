import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-6xl font-bold text-white mb-6">
            Innovate. Create. Elevate.
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            We transform ideas into digital excellence, creating solutions that drive success
            and inspire growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-md bg-white/20 text-white px-8 py-3 rounded-full 
              flex items-center space-x-2 mx-auto hover:bg-white/30 transition-colors"
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white/30 rounded-full"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: Math.random() * window.innerWidth,
                top: Math.random() * window.innerHeight,
              }}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <GlassCard delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
            <p className="text-white/80">
              Pushing boundaries with cutting-edge technology and creative solutions.
            </p>
          </GlassCard>
          <GlassCard delay={0.4}>
            <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
            <p className="text-white/80">
              Dedicated professionals with years of industry experience.
            </p>
          </GlassCard>
          <GlassCard delay={0.6}>
            <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
            <p className="text-white/80">
              Serving clients worldwide with localized solutions and support.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Home;