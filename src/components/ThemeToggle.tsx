import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-[60] p-3 rounded-full backdrop-blur-md bg-white/20 text-indigo-600 hover:bg-white/30 transition-colors shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </motion.button>
  );
};

export default ThemeToggle;