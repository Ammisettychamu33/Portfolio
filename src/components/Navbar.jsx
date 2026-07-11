import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Linkedin, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 75; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 1000;
          transition: var(--transition-normal);
          border-bottom: 1px solid transparent;
        }
        
        .navbar-container.scrolled {
          background: rgba(13, 10, 28, 0.75);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(139, 92, 246, 0.1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
        
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-logo {
          font-family: 'Poppins', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .nav-logo span {
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          padding: 0.5rem 0.25rem;
          transition: var(--transition-fast);
        }

        .nav-link-btn:hover {
          color: var(--text-primary);
        }

        .nav-link-btn.active {
          color: var(--primary);
        }

        .nav-link-btn::after {
          content: '';
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          transition: var(--transition-fast);
        }

        .nav-link-btn.active::after {
          width: 100%;
        }

        .nav-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-icon-btn {
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
        }

        .social-icon-btn:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-menu-overlay {
          position: fixed;
          top: var(--nav-height);
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(7, 5, 15, 0.95);
          backdrop-filter: blur(16px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .mobile-nav-link {
          font-family: 'Poppins', sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .mobile-nav-link:hover, .mobile-nav-link.active {
          color: var(--primary);
          transform: scale(1.05);
        }

        @media (max-width: 900px) {
          .nav-links, .nav-socials {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>

      <nav className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="nav-logo" onClick={() => scrollToSection('hero')}>
            <Code size={22} className="text-gradient" />
            <span>CA.dev</span>
          </div>

          <div className="nav-links">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`nav-link-btn ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="nav-socials">
            <a href="https://github.com/Ammisettychamu33" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-overlay"
          >
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              <a href="https://github.com/Ammisettychamu33" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub" style={{ transform: 'scale(1.3)' }}>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn" style={{ transform: 'scale(1.3)' }}>
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
