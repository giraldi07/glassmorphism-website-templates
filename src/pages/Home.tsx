import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import project1Image  from '../assets/images/project1.jpg';
import project2Image  from '../assets/images/project2.jpg';
import project3Image  from '../assets/images/project3.jpg';
import blog1Image from '../assets/images/blog1.jpg';
import blog2Image from '../assets/images/blog2.jpg';
import blog3Image from '../assets/images/blog3.jpg';
import team1Image from '../assets/images/ge.jpg';
import team2Image from '../assets/images/tyo.jpg';
import team3Image from '../assets/images/chrls.jpg';
import team4Image from '../assets/images/cat.png';





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
      <div className="py-2 px-4">
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

      {/* Portfolio Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard delay={0.2}>
              <img src={project1Image} alt="Project 1" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Project Alpha</h3>
              <p className="text-white/80">A cutting-edge platform for digital transformation.</p>
            </GlassCard>
            <GlassCard delay={0.4}>
              <img src={project2Image} alt="Project 2" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Project Beta</h3>
              <p className="text-white/80">Revolutionizing the way businesses interact with customers.</p>
            </GlassCard>
            <GlassCard delay={0.6}>
              <img src={project3Image} alt="Project 3" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Project Gamma</h3>
              <p className="text-white/80">An AI-driven solution for predictive analytics.</p>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Latest from Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard delay={0.2}>
              <img src={blog1Image} alt="Blog 1" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">The Future of AI</h3>
              <p className="text-white/80">Exploring how AI is shaping the future of industries.</p>
              <a href="#" className="text-white font-bold mt-4 inline-block hover:underline">Read More</a>
            </GlassCard>
            <GlassCard delay={0.4}>
              <img src={blog2Image} alt="Blog 2" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Digital Transformation</h3>
              <p className="text-white/80">Key strategies for successful digital transformation.</p>
              <a href="#" className="text-white font-bold mt-4 inline-block hover:underline">Read More</a>
            </GlassCard>
            <GlassCard delay={0.6}>
              <img src={blog3Image} alt="Blog 3" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Cybersecurity Trends</h3>
              <p className="text-white/80">Top cybersecurity trends to watch in 2023.</p>
              <a href="#" className="text-white font-bold mt-4 inline-block hover:underline">Read More</a>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <GlassCard delay={0.2}>
              <img src={team1Image} alt="Team Member 1" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">John Doe</h3>
              <p className="text-white/80">CEO & Founder</p>
            </GlassCard>
            <GlassCard delay={0.4}>
              <img src={team2Image} alt="Team Member 2" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Jane Smith</h3>
              <p className="text-white/80">CTO</p>
            </GlassCard>
            <GlassCard delay={0.6}>
              <img src={team3Image} alt="Team Member 3" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Mike Johnson</h3>
              <p className="text-white/80">Lead Developer</p>
            </GlassCard>
            <GlassCard delay={0.8}>
              <img src={team4Image} alt="Team Member 4" className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Sarah Lee</h3>
              <p className="text-white/80">UX/UI Designer</p>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard delay={0.2}>
              <p className="text-white/80 italic">
                "Their innovative approach helped us scale our business like never before. Highly recommended!"
              </p>
              <p className="text-white font-bold mt-4">- John Doe, CEO of Company X</p>
            </GlassCard>
            <GlassCard delay={0.4}>
              <p className="text-white/80 italic">
                "The team is incredibly professional and delivered beyond our expectations."
              </p>
              <p className="text-white font-bold mt-4">- Jane Smith, CTO of Company Y</p>
            </GlassCard>
            <GlassCard delay={0.6}>
              <p className="text-white/80 italic">
                "We've seen a significant improvement in our digital presence since working with them."
              </p>
              <p className="text-white font-bold mt-4">- Mike Johnson, Founder of Company Z</p>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-20 bg-black/10 rounded-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/80 mb-8">Let's build something amazing together. Get in touch with us today!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="backdrop-blur-md bg-white/20 text-white px-8 py-3 rounded-full 
              flex items-center space-x-2 mx-auto hover:bg-white/30 transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;