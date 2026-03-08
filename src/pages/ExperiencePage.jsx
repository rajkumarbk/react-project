import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ExperiencePage = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const experiences = [
    {
      company: 'Tech Innovators Inc.',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      achievements: [
        'Led a team of 5 developers to build a microservices architecture serving 1M+ users',
        'Improved application performance by 40% through code optimization and caching strategies',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews'
      ],
      tech: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker']
    },
    {
      company: 'Digital Solutions Ltd.',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      location: 'New York, NY',
      achievements: [
        'Developed and maintained 15+ client websites and web applications',
        'Collaborated with UI/UX designers to create responsive interfaces',
        'Integrated third-party APIs and payment gateways',
        'Reduced bug reports by 30% through comprehensive testing'
      ],
      tech: ['Vue.js', 'Python', 'PostgreSQL', 'REST APIs', 'Firebase']
    },
    {
      company: 'StartUp Hub',
      position: 'Junior Developer',
      period: '2019 - 2020',
      location: 'Austin, TX',
      achievements: [
        'Assisted in developing MVPs for 3 successful startups',
        'Wrote clean, maintainable code following best practices',
        'Participated in daily stand-ups and sprint planning',
        'Contributed to open-source projects during hackathons'
      ],
      tech: ['JavaScript', 'jQuery', 'PHP', 'MySQL', 'Bootstrap']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'Stanford University',
      period: '2017 - 2019',
      gpa: '3.9/4.0'
    },
    {
      degree: 'B.S. in Software Engineering',
      institution: 'MIT',
      period: '2013 - 2017',
      gpa: '3.8/4.0'
    }
  ];

  return (
    <section className="experience-page">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Work Experience</h1>
          <p className="page-subtitle">My professional journey</p>

          <div className="timeline-full">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                className="timeline-item-full"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content-full">
                  <div className="timeline-header">
                    <div>
                      <h2 className="company-name">{exp.company}</h2>
                      <h3 className="position-title">{exp.position}</h3>
                    </div>
                    <div className="timeline-meta">
                      <span className="period">{exp.period}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                  
                  <div className="tech-stack">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="education-section">
            <h2>Education</h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <h3>{edu.degree}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="edu-period">{edu.period}</p>
                  <p className="gpa">GPA: {edu.gpa}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="achievements-section">
            <h2>Notable Achievements</h2>
            <div className="awards-grid">
              <div className="award-item">
                <span className="award-icon">🏆</span>
                <div>
                  <h4>Best Innovation Award 2023</h4>
                  <p>TechCrunch Disrupt</p>
                </div>
              </div>
              <div className="award-item">
                <span className="award-icon">📝</span>
                <div>
                  <h4>Published 10+ Technical Articles</h4>
                  <p>Dev.to & Medium</p>
                </div>
              </div>
              <div className="award-item">
                <span className="award-icon">🎤</span>
                <div>
                  <h4>Keynote Speaker</h4>
                  <p>React Conf 2022, JS World 2023</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePage;