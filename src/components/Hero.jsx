import React from 'react';
import { Download, Mail, ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 75;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-height) + 2rem);
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-badge {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--primary);
          padding: 0.35rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          width: fit-content;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1.25rem, 2vw, 1.8rem);
          font-weight: 600;
          color: var(--text-secondary);
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: var(--text-secondary);
          max-width: 600px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .hero-socials {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-top: 0.5rem;
        }

        .hero-social-btn {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
        }

        .hero-social-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          background: rgba(139, 92, 246, 0.05);
          transform: translateY(-3px);
        }

        /* Metrics Bar */
        .metrics-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .metric-item {
          display: flex;
          flex-direction: column;
        }

        .metric-value {
          font-family: 'Poppins', sans-serif;
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        /* Hero Image Panel */
        .hero-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-avatar-frame {
          width: 320px;
          height: 320px;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          background: linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%);
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.35);
          animation: morph 8s ease-in-out infinite;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .hero-avatar-placeholder {
          color: white;
          font-size: 6rem;
          font-weight: 800;
          font-family: 'Poppins', sans-serif;
          user-select: none;
          text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        .hero-avatar-glow {
          position: absolute;
          width: 360px;
          height: 360px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%);
          filter: blur(20px);
          z-index: -1;
          animation: pulse-slow 4s infinite alternate;
        }

        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 60%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }

        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }
          .hero-badge {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-text {
            align-items: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .metrics-bar {
            width: 100%;
            max-width: 600px;
          }
          .hero-avatar-frame {
            width: 260px;
            height: 260px;
          }
        }

        @media (max-width: 576px) {
          .metrics-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }
        }
      `}</style>

      <section id="hero" className="hero-section container">
        <div className="hero-grid">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-text"
          >
            <motion.div variants={itemVariants} className="hero-badge">
              Available for Full-Time Roles
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              Chamundeswari <br className="desktop-break" />
              <span className="text-gradient">Ammisetty</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="hero-subtitle">
              MERN Stack & Full Stack Developer
            </motion.h2>

            <motion.p variants={itemVariants} className="hero-tagline">
              Building scalable, high-performance, and user-friendly web applications using React.js, Node.js, Express.js, and MongoDB. Committed to clean code, component reusability, and professional UI/UX standards.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <a
                href="/Resume.pdf"
                download="Resume.pdf"
                className="btn btn-primary"
              >
                <Download size={18} />
                Download Resume
              </a>
              <button
                onClick={scrollToContact}
                className="btn btn-secondary"
              >
                <Mail size={18} />
                Contact Me
              </button>

              <div className="hero-socials">
                <a href="https://github.com/Ammisettychamu33" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287" target="_blank" rel="noopener noreferrer" className="hero-social-btn" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="metrics-bar">
              <div className="metric-item">
                <span className="metric-value">8.39</span>
                <span className="metric-label">B.Tech CGPA</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3</span>
                <span className="metric-label">Internships</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">12+</span>
                <span className="metric-label">Certifications</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">8+</span>
                <span className="metric-label">Projects Built</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="hero-image-wrapper"
          >
            <div className="hero-avatar-glow"></div>
            <div className="hero-avatar-frame">
              <div className="hero-avatar-placeholder">
                CA
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
