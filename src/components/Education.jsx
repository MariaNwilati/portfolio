import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Generate floating dots
  const floatingDots = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" className="section-padding relative overflow-hidden">
      {/* Floating Dots Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-pink-300/40"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 15, -10, 5, 0],
              opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        ref={ref}
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span
            className="section-subtitle"
            whileHover={{ scale: 1.05 }}
          >
            Academic Background
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            <span className="text-gray-800 text-white">My </span><span className="text-gradient">Education</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Education Content */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <motion.div
            className="card p-10 text-center relative"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Bachelor's Degree in Information Technology
            </h3>
            <p className="text-pink-400 font-semibold text-lg mb-4">
              Specialization in Software Engineering
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-400 mb-6">
              <span className="font-medium">Damascus University</span>
              <span className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              <span>5 Years</span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
              Completed a comprehensive program in Information Technology with a focus on
              software development, project management, system analysis, and modern programming technologies.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
