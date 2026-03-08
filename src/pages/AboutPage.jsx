import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <section className="about-page">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">About Me</h1>
          
          <div className="about-full-content">
            <div className="about-story">
              <h2>My Journey</h2>
              <p>I started coding when I was 15, building simple websites for fun. Today, I lead development teams building enterprise applications. My passion for technology has only grown stronger over the years.</p>
              <p>After graduating with a Computer Science degree from Stanford University, I worked at several tech startups before starting my freelance career. This diverse experience has given me a unique perspective on software development.</p>
              <p>When I'm not coding, you'll find me hiking, reading sci-fi novels, or experimenting with new technologies.</p>
            </div>

            <div className="about-personal">
              <h2>Beyond the Code</h2>
              <ul>
                <li>📍 Based in San Francisco, CA</li>
                <li>🎓 Stanford University CS Graduate</li>
                <li>📚 Love reading technical books</li>
                <li>🏃 Marathon runner</li>
                <li>☕ Coffee enthusiast</li>
              </ul>
            </div>

            <div className="about-values">
              <h2>My Values</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Quality</h3>
                  <p>I believe in writing clean, maintainable code that stands the test of time.</p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>Always learning and applying the latest technologies to solve problems.</p>
                </div>
                <div className="value-card">
                  <h3>Collaboration</h3>
                  <p>Great products come from great teamwork and communication.</p>
                </div>
              </div>
            </div>

            <div className="about-achievements">
              <h2>Achievements</h2>
              <ul>
                <li>🏆 Winner of Hackathon 2023</li>
                <li>📝 Published author on Dev.to</li>
                <li>🎤 Speaker at React Conf 2022</li>
                <li>💼 Built apps for Fortune 500 companies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;