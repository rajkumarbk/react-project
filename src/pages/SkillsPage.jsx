import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaAws, FaDocker, 
  FaFigma, FaGit, FaJira 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiTailwindcss, 
  SiMongodb, SiPostgresql, SiGraphql, SiNextdotjs,
  SiFirebase, SiRedux, SiVuedotjs, SiDjango, SiFlask,
  SiKubernetes, SiJenkins, SiTerraform, SiPrometheus
} from 'react-icons/si';

const SkillsPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', icon: FaReact, level: 90, exp: '5 years' },
        { name: 'Vue.js', icon: SiVuedotjs, level: 75, exp: '3 years' },
        { name: 'Next.js', icon: SiNextdotjs, level: 85, exp: '3 years' },
        { name: 'TypeScript', icon: SiTypescript, level: 85, exp: '4 years' },
        { name: 'JavaScript', icon: SiJavascript, level: 95, exp: '6 years' },
        { name: 'Redux', icon: SiRedux, level: 88, exp: '4 years' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90, exp: '3 years' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 88, exp: '5 years' },
        { name: 'Python', icon: FaPython, level: 85, exp: '4 years' },
        { name: 'Django', icon: SiDjango, level: 80, exp: '3 years' },
        { name: 'Flask', icon: SiFlask, level: 75, exp: '2 years' },
        { name: 'GraphQL', icon: SiGraphql, level: 82, exp: '3 years' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, exp: '4 years' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 83, exp: '4 years' },
        { name: 'Firebase', icon: SiFirebase, level: 87, exp: '3 years' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: '☁️',
      skills: [
        { name: 'AWS', icon: FaAws, level: 78, exp: '3 years' },
        { name: 'Docker', icon: FaDocker, level: 82, exp: '3 years' },
        { name: 'Kubernetes', icon: SiKubernetes, level: 70, exp: '2 years' },
        { name: 'Jenkins', icon: SiJenkins, level: 75, exp: '2 years' },
        { name: 'Terraform', icon: SiTerraform, level: 65, exp: '1 year' },
        { name: 'Prometheus', icon: SiPrometheus, level: 60, exp: '1 year' }
      ]
    },
    {
      title: 'Tools & Methods',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: FaGit, level: 92, exp: '6 years' },
        { name: 'Figma', icon: FaFigma, level: 75, exp: '3 years' },
        { name: 'Jira', icon: FaJira, level: 85, exp: '4 years' },
        { name: 'Agile/Scrum', level: 90, exp: '5 years' },
        { name: 'CI/CD', level: 80, exp: '3 years' },
        { name: 'Testing', level: 85, exp: '4 years' }
      ]
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'MongoDB Certified Developer',
    'Google Professional Cloud Developer',
    'Scrum Master Certified',
    'Meta Frontend Developer'
  ];

  return (
    <section className="skills-page">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-subtitle">Technologies I work with</p>

          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              className="skill-category-full"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h2 className="category-title-full">
                <span className="category-icon">{category.icon}</span>
                {category.title}
              </h2>
              
              <div className="skills-grid-full">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-card-header">
                      {skill.icon && <skill.icon className="skill-card-icon" />}
                      <h3>{skill.name}</h3>
                    </div>
                    <div className="skill-card-details">
                      <div className="skill-bar">
                        <motion.div 
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                        />
                      </div>
                      <div className="skill-meta">
                        <span className="skill-level">{skill.level}%</span>
                        {skill.exp && <span className="skill-exp">{skill.exp}</span>}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="certifications-section">
            <h2>Certifications</h2>
            <div className="cert-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index}
                  className="cert-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                >
                  <span className="cert-badge">🏅</span>
                  <p>{cert}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="languages-section">
            <h2>Languages</h2>
            <div className="lang-grid">
              <div className="lang-item">
                <span className="lang-name">English</span>
                <span className="lang-level">Native</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">Spanish</span>
                <span className="lang-level">Professional</span>
              </div>
              <div className="lang-item">
                <span className="lang-name">German</span>
                <span className="lang-level">Conversational</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;