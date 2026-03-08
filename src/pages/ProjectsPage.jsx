import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true });

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights for e-commerce businesses. Features predictive analytics, customer segmentation, and sales forecasting.',
      fullDescription: 'Built for a Fortune 500 retail company, this dashboard processes millions of data points daily to provide actionable insights. The ML models predict customer behavior with 85% accuracy.',
      image: '📊',
      category: 'web',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js', 'AWS'],
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Customer segmentation',
        'Automated reporting',
        'Custom dashboard builder'
      ],
      demo: '#',
      code: '#',
      date: '2024'
    },
    {
      id: 2,
      title: 'Eco-Friendly Marketplace',
      description: 'Sustainable products marketplace with carbon footprint tracking and green logistics integration.',
      fullDescription: 'A platform connecting eco-conscious consumers with sustainable brands. Includes carbon offset calculations, eco-certification verification, and green shipping options.',
      image: '🌱',
      category: 'ecommerce',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'GraphQL'],
      features: [
        'Carbon footprint tracker',
        'Sustainable product verification',
        'Green logistics API',
        'Blockchain supply chain tracking',
        'Community forums'
      ],
      demo: '#',
      code: '#',
      date: '2023'
    },
    {
      id: 3,
      title: 'Virtual Event Platform',
      description: 'Immersive virtual event platform with real-time interaction, networking, and engagement features.',
      fullDescription: 'Created during the pandemic, this platform hosted over 50 virtual conferences with 100,000+ attendees. Features virtual booths, networking lounges, and live streaming.',
      image: '🎥',
      category: 'web',
      tech: ['React', 'WebRTC', 'Socket.io', 'Redis', 'FFmpeg'],
      features: [
        'HD video streaming',
        'Virtual networking rooms',
        'Interactive Q&A',
        'Analytics dashboard',
        'Sponsor booths'
      ],
      demo: '#',
      code: '#',
      date: '2023'
    },
    {
      id: 4,
      title: 'Health & Fitness Tracker',
      description: 'Mobile-first fitness app with personalized workout plans, nutrition tracking, and progress analytics.',
      fullDescription: 'Downloaded 500,000+ times, this app helps users achieve their fitness goals with AI-powered workout recommendations and meal planning.',
      image: '🏃',
      category: 'mobile',
      tech: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
      features: [
        'Personalized workout plans',
        'Nutrition tracking',
        'Progress photos',
        'Social challenges',
        'Wearable integration'
      ],
      demo: '#',
      code: '#',
      date: '2024'
    },
    {
      id: 5,
      title: 'Smart Home Automation',
      description: 'IoT platform for controlling and monitoring smart home devices with voice commands and automation rules.',
      image: '🏠',
      category: 'iot',
      tech: ['Vue.js', 'Node.js', 'MQTT', 'InfluxDB', 'Raspberry Pi'],
      features: [
        'Device management',
        'Automation rules',
        'Energy monitoring',
        'Voice control',
        'Mobile alerts'
      ],
      demo: '#',
      code: '#',
      date: '2022'
    },
    {
      id: 6,
      title: 'Crypto Portfolio Tracker',
      description: 'Real-time cryptocurrency portfolio tracker with price alerts, tax reporting, and DeFi integration.',
      image: '📈',
      category: 'web',
      tech: ['React', 'Web3.js', 'Express', 'PostgreSQL', 'Redis'],
      features: [
        'Multi-exchange support',
        'Tax reporting',
        'Price alerts',
        'DeFi portfolio tracking',
        'NFT gallery'
      ],
      demo: '#',
      code: '#',
      date: '2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'iot', label: 'IoT' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects-page">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">My Projects</h1>
          <p className="page-subtitle">A showcase of my work</p>

          <div className="project-filters">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              className="projects-grid-full"
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="project-card-full"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="project-header">
                    <span className="project-emoji-large">{project.image}</span>
                    <div className="project-links-full">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                  
                  <div className="project-content-full">
                    <h2 className="project-title-full">{project.title}</h2>
                    <p className="project-description-full">{project.description}</p>
                    
                    <div className="project-tech-full">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span key={i} className="tech-badge">{tech}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-badge">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    <details className="project-details">
                      <summary>View Details</summary>
                      <div className="details-content">
                        <p>{project.fullDescription}</p>
                        <h4>Key Features:</h4>
                        <ul>
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                        <p className="project-date">Completed: {project.date}</p>
                      </div>
                    </details>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;