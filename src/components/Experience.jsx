import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Project Manager, Product Owner & UAT Coordinator',
      company: 'AlFouad Money Transfer',
      duration: '2024 - Present',
      icon: '🏦',
      projects: [
        {
          name: 'Wallets Mobile Application',
          tasks: [
            'Led and supervised the project from business and technical perspective',
            'Acted as Product Owner, identifying solutions based on UX and market analysis',
            'Oversaw UAT testing, change requests management, and UI/UX design',
            'Defined project phases, milestones, and priorities',
          ],
        },
        {
          name: 'Anti-Money Laundering (AML) System',
          tasks: [
            'Managed project as Project Manager, supervising all testing activities',
            'Worked with Compliance Department to gather regulatory requirements',
            'Translated compliance requirements into technical specifications',
          ],
        },
        {
          name: 'Bank Integration Projects (6+ Banks)',
          tasks: [
            'Led full-cycle API-based integrations with external banking systems',
            'Managed end-to-end from planning to production launch',
            'Ensured secure and compliant integrations with banking standards',
          ],
        },
      ],
    },
    {
      title: 'Software Analyst & Frontend Developer',
      company: 'Al-Tahhan Center Application',
      duration: '2024',
      icon: '💻',
      responsibilities: [
        'Led requirement gathering phase, collaborating closely with clients',
        'Designed user interface and user experience for the application',
        'Developed dashboard components using React',
      ],
    },
    {
      title: 'Software Tester',
      company: 'Lughati Hawiyati Application',
      duration: '2024',
      icon: '📱',
      responsibilities: [
        'Analyzed test results and prepared detailed reports',
        'Tracked progress and provided insights for future development cycles',
        'Ensured quality standards through comprehensive testing',
      ],
    },
    {
      title: 'Front-End Developer',
      company: 'A TO Z Travel Application - Damascus University',
      duration: '2023',
      icon: '✈️',
      responsibilities: [
        'Selected Flutter for mobile app development',
        'Created engaging UI/UX design to enhance user experience',
        'Developed features for travel bookings and dining options',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div
        className="absolute top-40 right-10 w-20 h-20 bg-pink-500/10 rounded-full blur-xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-32 h-32 bg-rose-500/10 rounded-full blur-xl"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

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
            My Journey
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <motion.div
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{ background: 'linear-gradient(to bottom, #f48fb1, #f8bbd9)', originY: 0 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={itemVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring', stiffness: 200 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #f48fb1 0%, #f8bbd9 100%)' }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {exp.icon}
                  </motion.div>
                </motion.div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <motion.div
                    className="card p-6 relative overflow-hidden group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative z-10">
                      <motion.span
                        className="section-subtitle !mb-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        {exp.duration}
                      </motion.span>
                      <h3 className="text-xl font-bold text-gray-800 text-white mb-1">{exp.title}</h3>
                      <p className="text-pink-500 font-medium mb-4">{exp.company}</p>

                      {/* Projects with sub-tasks */}
                      {exp.projects ? (
                        <div className="space-y-4">
                          {exp.projects.map((project, projectIndex) => (
                            <div
                              key={projectIndex}
                              className="rounded-xl p-4 border border-gray-700/50 bg-gray-800/50"
                            >
                              <h4 className="font-semibold text-pink-400 mb-2 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                                {project.name}
                              </h4>
                              <ul className="space-y-2 ml-4">
                                {project.tasks.map((task, taskIndex) => (
                                  <li
                                    key={taskIndex}
                                    className="flex items-start gap-2 text-gray-400 text-sm"
                                  >
                                    <svg className="w-4 h-4 text-pink-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>{task}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <motion.li
                              key={respIndex}
                              className="flex items-start gap-3 text-gray-400"
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: 0.8 + index * 0.2 + respIndex * 0.1 }}
                            >
                              <motion.span
                                className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center flex-shrink-0 mt-0.5"
                                whileHover={{ scale: 1.3 }}
                              >
                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                              </motion.span>
                              <span>{resp}</span>
                            </motion.li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Decorative Corner */}
                    <motion.div
                      className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-10 blur-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
