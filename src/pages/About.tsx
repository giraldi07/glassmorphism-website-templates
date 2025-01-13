import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Rocket, BookOpen, Users, Briefcase, Globe, Trophy } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineItems = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'Started with a vision to transform digital landscapes.',
      icon: BookOpen,
    },
    {
      year: '2018',
      title: 'Global Expansion',
      description: 'Opened offices in major tech hubs worldwide.',
      icon: Globe,
    },
    {
      year: '2020',
      title: 'Innovation Award',
      description: 'Recognized for breakthrough solutions in tech industry.',
      icon: Trophy,
    },
    {
      year: '2023',
      title: 'Sustainability Focus',
      description: 'Launched green initiatives and sustainable tech practices.',
      icon: Briefcase,
    },
  ];

  const stats = [
    { label: 'Years Experience', value: '8+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Global Clients', value: '200+' },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Industry Recognition',
      description: 'Multiple awards for innovation and excellence in technology solutions.',
    },
    {
      icon: Users,
      title: 'Global Reach',
      description: 'Serving clients across 30+ countries with localized solutions.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'ISO 9001:2015 certified for quality management systems.',
    },
  ];

  return (
    <div className="pt-40 md:pt-30 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">Our Story</h1>
          <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto">
            A journey of innovation, dedication, and continuous growth in creating
            digital solutions that matter.
          </p>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <GlassCard key={stat.label} delay={index * 0.1} className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-sm md:text-base text-white/80">{stat.label}</p>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <GlassCard delay={0.2}>
            <div className="flex items-start space-x-4">
              <Target className="text-white w-6 h-6 md:w-8 md:h-8 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">Our Vision</h3>
                <p className="text-sm md:text-base text-white/80">
                  To be the global leader in innovative digital solutions, driving
                  technological advancement and positive change in how businesses operate.
                  We envision a future where technology seamlessly enhances human potential.
                </p>
              </div>
            </div>
          </GlassCard>
          <GlassCard delay={0.4}>
            <div className="flex items-start space-x-4">
              <Rocket className="text-white w-6 h-6 md:w-8 md:h-8 mt-1" />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4">Our Mission</h3>
                <p className="text-sm md:text-base text-white/80">
                  Empowering businesses through cutting-edge technology solutions while
                  maintaining the highest standards of quality and innovation. We are
                  committed to delivering exceptional value to our clients through
                  sustainable and forward-thinking solutions.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Achievements */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <GlassCard key={achievement.title} delay={index * 0.2}>
                <div className="text-center">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-2 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">{achievement.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{achievement.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="max-w-4xl mx-auto px-4 mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20" />
          
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row items-center mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 px-4 md:px-6 mb-4 md:mb-0">
                  <GlassCard>
                    <div className="flex items-start space-x-2 md:space-x-4">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 md:mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-white/80">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Year Indicator */}
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 backdrop-blur-lg absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white" />
                </div>

                {/* Year Text */}
                <div className="w-full md:w-1/2 px-4 md:px-6 text-center md:text-right mt-4 md:mt-0">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            {
              title: 'Innovation',
              description: 'Constantly pushing boundaries and embracing new technologies.',
              icon: Rocket,
            },
            {
              title: 'Excellence',
              description: 'Delivering the highest quality in everything we do.',
              icon: Award,
            },
            {
              title: 'Collaboration',
              description: 'Working together to achieve extraordinary results.',
              icon: Users,
            },
            {
              title: 'Integrity',
              description: 'Maintaining the highest ethical standards in all interactions.',
              icon: Trophy,
            },
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <GlassCard key={value.title} delay={index * 0.1}>
                <div className="text-center">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white mx-auto mb-2 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">{value.title}</h3>
                  <p className="text-sm md:text-base text-white/80">{value.description}</p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;