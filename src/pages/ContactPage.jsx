import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGithub, FaLinkedin, FaTwitter, 
  FaTelegram, FaWhatsapp, FaCalendarAlt 
} from 'react-icons/fa';

const ContactPage = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '', budget: '', timeline: '' });
  };

  return (
    <section className="contact-page">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Let's discuss your next project</p>

          <div className="contact-grid">
            <div className="contact-info-full">
              <h2>Let's Connect</h2>
              <p>I'm always excited to hear about new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <FaEnvelope className="contact-icon-large" />
                  <div>
                    <h3>Email</h3>
                    <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                    <p>Response within 24 hours</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaPhone className="contact-icon-large" />
                  <div>
                    <h3>Phone</h3>
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    <p>Mon-Fri, 9am-6pm PST</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaMapMarkerAlt className="contact-icon-large" />
                  <div>
                    <h3>Location</h3>
                    <p>San Francisco, CA</p>
                    <p>Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="contact-method">
                  <FaCalendarAlt className="contact-icon-large" />
                  <div>
                    <h3>Schedule a call</h3>
                    <a href="#">Book a meeting</a>
                    <p>30-minute consultation</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3>Connect on Social Media</h3>
                <div className="social-grid">
                  <a href="#" className="social-item">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="#" className="social-item">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="social-item">
                    <FaTwitter />
                    <span>Twitter</span>
                  </a>
                  <a href="#" className="social-item">
                    <FaTelegram />
                    <span>Telegram</span>
                  </a>
                  <a href="#" className="social-item">
                    <FaWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="availability">
                <h3>Current Availability</h3>
                <div className="status">
                  <span className="status-dot"></span>
                  <span>Available for freelance work</span>
                </div>
                <p>Starting from March 2024</p>
              </div>
            </div>

            <div className="contact-form-full">
              <h2>Send a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select budget</option>
                      <option value="< $5k">Less than $5,000</option>
                      <option value="$5k - $10k">$5,000 - $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k - $50k">$25,000 - $50,000</option>
                      <option value="> $50k">More than $50,000</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Timeline</label>
                    <select name="timeline" value={formData.timeline} onChange={handleChange}>
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6+ months">6+ months</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>

                <p className="form-note">
                  * Required fields. I'll respond within 24 hours.
                </p>
              </form>
            </div>
          </div>

          <div className="map-section">
            <h2>Visit My Office</h2>
            <div className="map-placeholder">
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d-122.43759999999999!3d37.7577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '20px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;