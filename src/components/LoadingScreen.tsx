import { motion } from 'framer-motion';
import loadingGIF from '../assets/images/loading.gif';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 5 }} // Animasi fade out setelah 5 detik
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.5 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/10"
      >
        {/* GIF Loading */}
        <motion.div
          className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, ease: 'linear' }} // Rotasi lebih lambat
        >
          <img
            src={loadingGIF} // Path ke GIF Anda
            alt="Loading"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text with Gradient */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 text-2xl font-bold text-center"
        >
          Welcome to our company...
        </motion.p>

        {/* Subtle Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex justify-center space-x-2 mt-4"
        >
          {[1, 2, 3].map((dot) => (
            <motion.div
              key={dot}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: dot * 0.2,
              }}
              className="w-2 h-2 bg-purple-400 rounded-full"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;