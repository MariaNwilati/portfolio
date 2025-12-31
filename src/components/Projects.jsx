import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  // Close project view when navigating via hash links
  useEffect(() => {
    const handleHashChange = () => {
      setSelectedProjectIndex(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const projects = [
    {
      title: 'Wallets Mobile Application',
      description:
        'Led and supervised the Wallets mobile application project from business and technical perspective. Oversaw UAT testing, managed change requests.',
      technologies: ['Project Management',  'UAT', 'UI/UX', 'Mobile App'],
      role: 'Project Manager',
      year: '2024 - Present',
      image: '/assets/projects/ewallet.jpeg',
      challenges: [
        'Identifying unique features to differentiate the wallet application in a competitive market',
        'Aligning Product Owner requirements with technical feasibility and project scope',
        'Coordinating between development teams, stakeholders, and end-users throughout the project lifecycle',
        'Managing change requests while maintaining project timelines and quality standards'
      ],
      outcomes: [
        'Delivered a user-friendly mobile wallet application that meets market needs',
        'Improved overall app usability based on continuous UX feedback and iterative enhancements',
        'Achieved high quality releases through rigorous UAT planning and execution',
        'Introduced features that positioned the app competitively within the market'
      ],
      lessonsLearned: [
        'Prioritization is critical when balancing new features with ongoing improvements',
        'Acting as a bridge between business and technical teams ensures smoother delivery',
        'Listening to stakeholders early prevents costly changes later in the project'
      ]
    },
    {
      title: 'Anti-Money Laundering (AML) System',
      description:
        'Managed the AML system project, supervising all testing activities including UAT planning, execution, and defect tracking. Worked closely with Compliance Department to gather regulatory requirements.',
      technologies: ['Compliance', 'UAT', 'Regulatory', 'Project Management', 'Testing'],
      role: 'Project Manager',
      year: '2025',
      image: '/assets/projects/aml.jpeg',
      challenges: [
        'Working with an initially undefined project scope that evolved over time',
        'Adapting testing strategies to meet strict regulatory standards',
        'Coordinating between compliance, development, and QA teams effectively'
      ],
      outcomes: [
        'Delivered a compliant AML system that passed all regulatory checks',
        'Built a structured UAT process that improved defect detection rates',
        'Enabled the Compliance Department with a reliable tool for monitoring and reporting'
      ],
      lessonsLearned: [
        'Documentation and traceability are essential in regulated environments',
        'Scope definition should be done early, even when requirements are uncertain',
        'Continuous testing and validation reduce risks during final delivery'
      ]
    },
    {
      title: 'Bank Integration Projects',
      description:
        'Led and supervised integration between Al-Fouad system and more than six banks. Managed full-cycle API-based integrations, oversaw projects end-to-end from planning to production launch.',
      technologies: ['API Integration', 'Banking', 'Project Management', 'Testing', 'Deployment'],
      role: 'Project Manager',
      year: '2024 - Present',
      image: '/assets/projects/_.jpeg',
      challenges: [
        'Working with different banks that use varying API standards and protocols',
        'Managing multiple stakeholders and timelines across parallel integration tracks',
        'Ensuring system stability and data integrity during go-live phases'
      ],
      outcomes: [
        'Achieved seamless data exchange between Al-Fouad system and partner banks',
        'Reduced post-launch issues through proactive testing and monitoring',
        'Created reusable integration patterns that accelerated future bank onboarding'
      ],
      lessonsLearned: [
        'Clear API documentation and communication with external partners are essential',
        'Early-stage testing of edge cases prevents critical failures at launch',
        'Strong coordination skills are needed when managing parallel workstreams'
      ]
    },
    {
      title: 'Al-Tahhan Center Application',
      description:
        'Played a crucial role in requirement gathering, collaborating closely with clients to understand their needs. Designed the user interface and user experience, and developed part of the dashboard using React.',
      technologies: ['React', 'UI/UX Design', 'Requirements Analysis', 'Figma'],
      role: 'Software Analyst & Frontend Developer',
      year: '2024',
      image: '/assets/projects/altahhan.jpeg',
      challenges: [
        'Translating client needs into clear, actionable technical requirements',
        'Designing an intuitive UI/UX that serves users with varying technical backgrounds',
        'Ensuring design consistency between Figma prototypes and React implementation'
      ],
      outcomes: [
        'Delivered an intuitive dashboard that streamlined center operations',
        "Enabled efficient booking and management for the center's services",
        'Produced clean, responsive interfaces that improved user engagement'
      ],
      lessonsLearned: [
        'Prototyping in Figma before development saves time and reduces rework',
        'Clear requirement documentation leads to smoother handoffs between design and development'
      ]
    },
    {
      title: 'Lughati Hawiyati App',
      description:
        'Analyzed test results and prepared detailed reports to track progress and provide insights for future development cycles. Ensured quality standards were met through comprehensive software testing.',
      technologies: ['Software Testing', 'QA', 'Test Reports', 'Quality Assurance'],
      role: 'Software Tester',
      year: '2024',
      image: '/assets/projects/alphapet.jpeg',
      challenges: [
        'Developing comprehensive test coverage',
        'Identifying edge cases and potential issues',
        'Creating clear and actionable test reports'
      ],
      outcomes: [
        'Achieved 95% test coverage',
        'Identified and resolved critical bugs before release',
        'Established testing documentation standards'
      ],
      lessonsLearned: [
        'Systematic approach to software testing',
        'Importance of detailed documentation',
        'Effective bug reporting and tracking'
      ]
    },
    {
      title: 'A TO Z Travel Application',
      description:
        'A university project specializing in all aspects related to travel, including bookings and dining options. Selected Flutter for mobile development and created an engaging UI/UX design.',
      technologies: ['Flutter', 'Dart', 'UI/UX Design', 'Mobile Development'],
      role: 'Front-End Developer',
      year: '2023',
      image: '/assets/projects/A2Z.jpeg',
      challenges: [
        'Building an application from scratch with no existing codebase or templates',
        'Learning and applying Flutter/Dart within a limited academic timeline',
        'Designing a cohesive UI/UX that covers bookings, dining, and travel logistics'
      ],
      outcomes: [
        'Delivered a functional travel application covering key travel services',
        'Gained hands-on experience with Flutter and responsive mobile UI/UX',
        'Completed a full development cycle from concept to working prototype'
      ],
      lessonsLearned: [
        'Academic projects can provide real-world experience when approached seriously',
        'Choosing the right framework early impacts long-term maintainability'
      ]
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20  to-transparent" />

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
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
              onClick={() => setSelectedProjectIndex(index)}
            >
              <motion.div
                className="card overflow-hidden h-full"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {/* Project Image Header */}
                <div className="relative h-48 bg-gray-700 overflow-hidden border-b border-gray-600">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => e.target.style.display = 'none'}
                  />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-4 py-2 bg-gray-900/90 backdrop-blur-sm rounded-full shadow-sm">
                    <span className="text-gray-200 text-sm font-medium">{project.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500  transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-pink-400 text-sm font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full" />
                    {project.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-gray-700/50 text-gray-300 text-xs rounded-full font-medium border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 bg-gray-800 text-gray-500 text-xs rounded-full border border-gray-700">
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

      {/* Full Screen Project View */}
      <AnimatePresence>
        {selectedProjectIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Main Content */}
            <motion.div
              key={selectedProjectIndex}
              className="h-full overflow-y-auto pb-32"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-5xl mx-auto px-6 pt-20 pb-8">
                {/* Back Button */}
                <div className="mb-6">
                  <button
                    onClick={() => setSelectedProjectIndex(null)}
                    className="w-10 h-10 rounded-full border border-gray-700 hover:border-pink-500 flex items-center justify-center text-gray-400 hover:text-pink-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>

                {/* Image + Info Row */}
                <div className="flex flex-col md:flex-row gap-6 mb-10">
                  {/* Image */}
                  <div className="relative w-full md:w-64 flex-shrink-0 aspect-[4/3] md:aspect-square rounded-xl overflow-hidden bg-gray-800">
                    <img
                      src={projects[selectedProjectIndex].image}
                      alt={projects[selectedProjectIndex].title}
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>

                  {/* Project Info - Right Side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-pink-500 text-sm font-medium">{projects[selectedProjectIndex].year}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 text-sm">{projects[selectedProjectIndex].role}</span>
                    </div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {projects[selectedProjectIndex].title}
                    </h1>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {projects[selectedProjectIndex].description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProjectIndex].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Insights - Three Column Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Challenges */}
                  {projects[selectedProjectIndex].challenges && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-pink-500 rounded-full" />
                        <h4 className="text-white font-semibold">Challenges</h4>
                      </div>
                      <ul className="space-y-3">
                        {projects[selectedProjectIndex].challenges.map((challenge, index) => (
                          <li key={index} className="text-gray-400 text-sm leading-relaxed">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcomes */}
                  {projects[selectedProjectIndex].outcomes && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-pink-500 rounded-full" />
                        <h4 className="text-white font-semibold">Outcomes</h4>
                      </div>
                      <ul className="space-y-3">
                        {projects[selectedProjectIndex].outcomes.map((outcome, index) => (
                          <li key={index} className="text-gray-400 text-sm leading-relaxed">
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Lessons Learned */}
                  {projects[selectedProjectIndex].lessonsLearned && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-4 bg-pink-500 rounded-full" />
                        <h4 className="text-white font-semibold">Lessons Learned</h4>
                      </div>
                      <ul className="space-y-3">
                        {projects[selectedProjectIndex].lessonsLearned.map((lesson, index) => (
                          <li key={index} className="text-gray-400 text-sm leading-relaxed">
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Bottom Navigation - Project Thumbnails */}
            <div className="fixed bottom-0 left-0 right-0 z-20 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
              <div className="px-6 py-4">
                <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {projects.map((project, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProjectIndex(index)}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        index === selectedProjectIndex
                          ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-gray-900'
                          : 'opacity-50 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.classList.add('bg-gray-800');
                        }}
                      />
                      {index === selectedProjectIndex && (
                        <div className="absolute inset-0 bg-pink-500/20" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
