import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiGraphql,
  SiNextdotjs,
  SiFirebase,
  SiFigma
} from 'react-icons/si';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  
  return (
    <div className="app">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero scale={scale} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// Navbar Component
const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">Portfolio</span>
        </motion.div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.div 
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = ({ scale }) => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
      </div>
      
      <motion.div 
        className="hero-content"
        style={{ scale }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-image-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="hero-image">
            {/* Add your image here */}
            <span className="initials">JD</span>
          </div>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hi, I'm <span className="gradient-text">John Doe</span>
        </motion.h1>

        <motion.h2 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Full Stack Developer & UI/UX Enthusiast
        </motion.h2>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Crafting beautiful digital experiences with modern technologies
        </motion.p>

        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="#projects" 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        <motion.div 
          className="social-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
  );
};

// About Section
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="about">
      <motion.div 
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-description">
              I'm a passionate Full Stack Developer with over 5 years of experience 
              in creating innovative web solutions. I love turning complex problems 
              into simple, beautiful, and intuitive designs.
            </p>
            
            <div className="about-stats">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Completed' },
                { value: '30+', label: 'Happy Clients' },
                { value: '10+', label: 'Technologies' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-frame">
              <div className="image-placeholder">
                <span className="initials-large">JD</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 90 },
        { name: 'TypeScript', icon: SiTypescript, level: 85 },
        { name: 'JavaScript', icon: SiJavascript, level: 95 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 88 },
        { name: 'Next.js', icon: SiNextdotjs, level: 82 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 88 },
        { name: 'Python', icon: FaPython, level: 85 },
        { name: 'Java', icon: FaJava, level: 75 },
        { name: 'GraphQL', icon: SiGraphql, level: 80 },
        { name: 'MongoDB', icon: SiMongodb, level: 85 }
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'AWS', icon: FaAws, level: 78 },
        { name: 'Docker', icon: FaDocker, level: 75 },
        { name: 'Firebase', icon: SiFirebase, level: 85 },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
        { name: 'Figma', icon: SiFigma, level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.div 
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h3 className="category-title">{category.title}</h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: (catIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-header">
                      <skill.icon className="skill-icon" />
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (catIndex * 0.2) + (skillIndex * 0.1) }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Experience Section
const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Lead developer for multiple enterprise applications, managing a team of 5 developers. Implemented microservices architecture and improved performance by 40%.'
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained 10+ client websites and applications. Collaborated with UI/UX designers to create responsive and intuitive user interfaces.'
    },
    {
      company: 'StartUp Hub',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Assisted in developing MVP for 3 successful startups. Gained hands-on experience with modern web technologies and agile methodologies.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <motion.div 
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">{exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="position">{exp.position}</h4>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning insights for e-commerce businesses.',
      image: '📊',
      tags: ['React', 'Python', 'TensorFlow', 'D3.js'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Eco-Friendly Marketplace',
      description: 'Sustainable products marketplace with carbon footprint tracking and green logistics.',
      image: '🌱',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Virtual Event Platform',
      description: 'Immersive virtual event platform with real-time interaction and networking features.',
      image: '🎥',
      tags: ['React', 'WebRTC', 'Socket.io', 'Redis'],
      demo: '#',
      code: '#'
    },
    {
      title: 'Health & Fitness Tracker',
      description: 'Mobile-first fitness app with personalized workout plans and progress tracking.',
      image: '🏃',
      tags: ['React Native', 'Firebase', 'Redux'],
      demo: '#',
      code: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div 
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <motion.a 
                    href={project.demo} 
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.code} 
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <motion.div 
        className="container"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="contact-subtitle">Let's work together</h3>
            <p className="contact-description">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Feel free to reach out if you'd like to collaborate!
            </p>
            
            <div className="contact-details">
              {[
                { icon: FaEnvelope, text: 'john.doe@example.com' },
                { icon: FaPhone, text: '+1 (555) 123-4567' },
                { icon: FaMapMarkerAlt, text: 'San Francisco, CA' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                >
                  <item.icon className="contact-icon" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary btn-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default App;