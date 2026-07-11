import React from 'react';
import { ArrowUp, Github, Linkedin, Code } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style>{`
        .footer-container {
          background: rgba(7, 5, 15, 0.9);
          border-top: 1px solid rgba(139, 92, 246, 0.08);
          padding: 3rem 0;
          margin-top: 4rem;
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
        }

        .footer-text {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .footer-social-links {
          display: flex;
          gap: 1rem;
        }

        .footer-btn-top {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.05);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .footer-btn-top:hover {
          color: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer-actions {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>

      <footer className="footer-container">
        <div className="container footer-inner">
          <div>
            <div className="footer-brand">
              <Code size={18} className="text-gradient" />
              <span>Chamundeswari Ammisetty</span>
            </div>
            <p className="footer-text" style={{ marginTop: '0.25rem' }}>
              MERN Stack Developer | Full Stack Developer
            </p>
          </div>

          <div className="footer-actions">
            <div className="footer-social-links">
              <a href="https://github.com/Ammisettychamu33" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/chamundeswari-ammisetty-371676287" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

            <p className="footer-text">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <button
              onClick={scrollToTop}
              className="footer-btn-top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
