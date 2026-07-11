import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('submitting');
    // Simulate API Submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <>
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 4rem;
          align-items: stretch;
        }

        .contact-info-panel {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          justify-content: space-between;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .contact-icon-box {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(139, 92, 246, 0.05);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .contact-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .contact-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          word-break: break-all;
        }

        .contact-social-row {
          display: flex;
          gap: 1rem;
        }

        /* Contact Form */
        .contact-form-panel {
          padding: 2.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .form-input {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 0.85rem 1rem;
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          transition: var(--transition-fast);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
          background: rgba(255, 255, 255, 0.04);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          width: 100%;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .form-status-alert {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          margin-top: 1rem;
        }

        .alert-success {
          background: rgba(34, 197, 94, 0.05);
          border: 1px solid rgba(34, 197, 94, 0.2);
          color: #4ade80;
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.05);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #f87171;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <section id="contact" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's connect! Reach out directly or send a message using the form below.</p>
        </div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="glass-panel contact-info-panel"
          >
            <div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                Contact Information
              </h3>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-label">Email Address</div>
                    <a href="mailto:ammisettychamundeswari0@gmail.com" className="contact-value">
                      ammisettychamundeswari0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="contact-label">Location</div>
                    <div className="contact-value">Andhra Pradesh, India</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="contact-label">Social Connections</div>
              <div className="contact-social-row">
                <a href="https://github.com/Ammisettychamu33" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="glass-panel contact-form-panel"
          >
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-input form-textarea"
                  placeholder="Specify details about your opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn btn-primary form-submit-btn"
              >
                <Send size={16} />
                {status === 'submitting' ? 'Sending Message...' : 'Submit Message'}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="form-status-alert alert-success"
                  >
                    <CheckCircle size={18} />
                    <span>Your message has been sent successfully. I will get back to you soon!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="form-status-alert alert-error"
                  >
                    <AlertTriangle size={18} />
                    <span>Please fill in all the fields before submitting.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
