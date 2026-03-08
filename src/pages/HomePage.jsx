import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuredRef, featuredInView] = useInView({ triggerOnce: true });

  return (
    <>
      {/* Hero Section - Custom for Home */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
        </div>
        
        <motion.div 
          className="hero-content"
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-image-container"
            initial={{ scale: 0 }}
            animate={heroInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="hero-image">
              <span className="initials">RBK</span>
            </div>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Hi, I'm <span className="gradient-text">Ràjkumár Bısħwakarma</span>
          </motion.h1>

          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            IT Engineer | Web Developer | Tech Enthusiast
          </motion.h2>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Crafting beautiful digital experiences with modern technologies
          </motion.p>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.a 
              href="/contact"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            >
              Get In Touch
            </motion.a>
            <motion.a 
              href="/projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => { e.preventDefault(); navigate('/projects'); }}
            >
              View Projects
            </motion.a>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="social-link"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects Section - Preview (different from full Projects page) */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">Some of my recent projects</p>
          
          <div className="featured-grid">
            {[1, 2].map((item) => (
              <motion.div 
                key={item}
                className="featured-card"
                ref={featuredRef}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="featured-image">📱</div>
                <h3>Project {item}</h3>
                <p>Brief description of the project goes here...</p>
                <a href="/projects" onClick={(e) => { e.preventDefault(); navigate('/projects'); }}>
                  Learn More →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About Section - Summary (different from full About page) */}
      <section className="quick-about">
        <div className="container">
          <div className="quick-about-content">
            <h2>Who Am I?</h2>
            <p>A passionate developer with 2+ years of experience creating web solutions. I love turning ideas into reality through code.</p>
            <div className="stats-mini">
              <div className="stat-mini">
                <span className="stat-number">50+</span>
                <span>Projects</span>
              </div>
              <div className="stat-mini">
                <span className="stat-number">5+</span>
                <span>Years</span>
              </div>
              <div className="stat-mini">
                <span className="stat-number">30+</span>
                <span>Clients</span>
              </div>
            </div>
            <a href="/about" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); navigate('/about'); }}>
              Read Full Story →
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA - Brief (different from full Contact page) */}
      <section className="contact-cta">
        <div className="container">
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it.</p><br />
          <a href="/contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); navigate('/contact'); }}>
            Start Conversation
          </a>
        </div>
      </section>
    </>
  );
};

export default HomePage;