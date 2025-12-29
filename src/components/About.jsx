import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    },
  };


  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent " />

      <motion.div
        ref={ref}
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.span
            className="section-subtitle"
            whileHover={{ scale: 1.05 }}
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Get To Know <span className="text-gradient">Me Better</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="card p-10 mb-16 relative"
          >
            {/* Decorative Quote */}
            <motion.div
              className="absolute -top-4 left-8 text-6xl text-pink-200  font-serif"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              "
            </motion.div>

            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              As a Software Engineer and Project Manager, I align business goals with technical
              execution to deliver impactful solutions. I am proficient in gathering requirements,
              translating business needs into actionable tasks, and prioritizing features based on
              value and strategic goals.
            </motion.p>
            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-6"
              variants={itemVariants}
            >
              I collaborate closely with stakeholders to ensure successful project outcomes, while
              focusing on planning, analyzing, and optimizing processes to deliver high-quality
              products and continuously enhance performance.
            </motion.p>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed italic"
              variants={itemVariants}
            >
              I am passionate about expanding my knowledge and gaining experience to grow further
              in this field.
            </motion.p>

            {/* Decorative Line */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-pink-300  to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default About;
