import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Wallets Mobile Application',
      description:
        'Led and supervised the Wallets mobile application project from business and technical perspective. Oversaw UAT testing, managed change requests, and acted as Product Owner identifying solutions based on UX and market analysis.',
      technologies: ['Product Owner', 'UAT', 'UI/UX', 'Project Management', 'Mobile App'],
      role: 'Product Owner & Project Manager',
      year: '2024 - Present',
      image: '/assets/projects/ewallet.jpeg',
    },
    {
      title: 'Anti-Money Laundering (AML) System',
      description:
        'Managed the AML system project, supervising all testing activities including UAT planning, execution, and defect tracking. Worked closely with Compliance Department to gather regulatory requirements.',
      technologies: ['Compliance', 'UAT', 'Regulatory', 'Project Management', 'Testing'],
      role: 'Project Manager',
      year: '2025',
      image: '/assets/projects/aml.jpeg',
    },
    {
      title: 'Bank Integration Projects',
      description:
        'Led and supervised integration between Al-Fouad system and more than six banks. Managed full-cycle API-based integrations, oversaw projects end-to-end from planning to production launch.',
      technologies: ['API Integration', 'Banking', 'Project Management', 'Testing', 'Deployment'],
      role: 'Project Lead',
      year: '2024 - Present',
      image: '/assets/projects/_.jpeg',
    },
    {
      title: 'Al-Tahhan Center Application',
      description:
        'Played a crucial role in requirement gathering, collaborating closely with clients to understand their needs. Designed the user interface and user experience, and developed part of the dashboard using React.',
      technologies: ['React', 'UI/UX Design', 'Requirements Analysis', 'Figma'],
      role: 'Software Analyst & Frontend Developer',
      year: '2024',
      image: '/assets/projects/altahhan.jpeg',
    },
    {
      title: 'Lughati Hawiyati App',
      description:
        'Analyzed test results and prepared detailed reports to track progress and provide insights for future development cycles. Ensured quality standards were met through comprehensive software testing.',
      technologies: ['Software Testing', 'QA', 'Test Reports', 'Quality Assurance'],
      role: 'Software Tester',
      year: '2024',
      image: '/assets/projects/alphapet.jpeg',
    },
    {
      title: 'A TO Z Travel Application',
      description:
        'A university project specializing in all aspects related to travel, including bookings and dining options. Selected Flutter for mobile development and created an engaging UI/UX design.',
      technologies: ['Flutter', 'Dart', 'UI/UX Design', 'Mobile Development'],
      role: 'Front-End Developer',
      year: '2023',
      image: '/assets/projects/A2Z.jpeg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 dark:via-gray-900/50 to-transparent" />

      <motion.div
        ref={ref}
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <motion.span
            className="section-subtitle"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto mt-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative cursor-pointer"
              variants={cardVariants}
              onClick={() => setSelectedProject(project)}
            >
              <motion.div
                className="card overflow-hidden h-full"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Project Image Header */}
                <div className="relative h-48 bg-white dark:bg-gray-700 overflow-hidden border-b border-pink-200/50 dark:border-gray-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => e.target.style.display = 'none'}
                  />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-sm">
                    <span className="text-gray-700 dark:text-gray-200 text-sm font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-500 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-pink-500 dark:text-pink-400 text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                    {project.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-white dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium border border-pink-200/50 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-500 text-xs rounded-full border border-pink-200/50 dark:border-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 dark:bg-gray-900/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-pink-500 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image */}
              <div className="relative h-64 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-2 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm font-medium rounded-full border border-pink-200 dark:border-pink-800">
                    {selectedProject.year}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  {selectedProject.title}
                </h3>

                <p className="text-pink-500 dark:text-pink-400 font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full" />
                  {selectedProject.role}
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-3">Technologies & Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full font-medium border border-gray-200 dark:border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
