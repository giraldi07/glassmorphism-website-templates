import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Home, Users, Briefcase, Phone, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: '/', icon: Home, text: 'Home' },
    { path: '/about', icon: Building2, text: 'About' },
    { path: '/team', icon: Users, text: 'Team' },
    { path: '/services', icon: Briefcase, text: 'Services' },
    { path: '/contact', icon: Phone, text: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {links.map(({ path, icon: Icon, text }) => (
              <Link
                key={path}
                to={path}
                onMouseEnter={() => setIsHovered(path)}
                onMouseLeave={() => setIsHovered(null)}
                className="relative"
              >
                <motion.div
                  className={`flex items-center space-x-2 text-white ${
                    location.pathname === path ? 'opacity-100' : 'opacity-70'
                  } hover:opacity-100 transition-opacity`}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon size={20} />
                  <span className={`${isHovered === path ? 'opacity-100' : 'opacity-0'} 
                    transition-opacity duration-200`}>
                    {text}
                  </span>
                </motion.div>
                {location.pathname === path && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between items-center">
            <Link to="/" className="text-white text-xl font-bold">BlossomBiz</Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 backdrop-blur-md bg-white/10 rounded-2xl p-4 shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                {links.map(({ path, icon: Icon, text }) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 p-3 rounded-lg ${
                      location.pathname === path
                        ? 'bg-white/20 text-white'
                        : 'text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <Icon size={20} />
                    <span>{text}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;