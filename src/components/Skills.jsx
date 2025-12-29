import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Management',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      skills: ['Project Planning', 'Agile / Scrum', 'Requirements Gathering', 'UAT Planning', 'Stakeholder Management', 'Risk Management', 'Resource Allocation'],
    },
    {
      title: 'Technical',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['React', 'Flutter', 'HTML/CSS', 'Figma', 'Jira', 'UI/UX Design', 'API Integration', 'Git'],
    },
    {
      title: 'Soft Skills',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Time Management', 'Attention to Detail', 'Leadership', 'Critical Thinking'],
    },
  ];

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    },
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <motion.div
        ref={ref}
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-5">
          <motion.span
            className="section-subtitle"
            whileHover={{ scale: 1.05 }}
          >
            My Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        {/* Languages */}
        <motion.div variants={cardVariants} className="flex justify-center gap-4 text-center mb-5">
          {languages.map((lang, index) => (
            <motion.span
              key={lang.name}
              className="px-5 py-2.5 rounded-full border border-gray-700/30 text-gray-300 text-sm font-medium bg-gray-800/60"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: '#ec4899' }}
            >
              {lang.name} <span className="text-pink-500">• {lang.level}</span>
            </motion.span>
          ))}
        </motion.div>
        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="group"
            >
              <motion.div
                className="card p-8 h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-pink-500 border border-gray-600">
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-pink-500 transition-colors duration-200 cursor-default bg-gray-700/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>


      </motion.div>
    </section>
  );
};

export default Skills;
