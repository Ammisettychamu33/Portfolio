import React, { useState } from 'react';
import { Github, ExternalLink, Music, MapPin, AlertTriangle, Gamepad2, ShieldAlert, Award, Grid, Compass, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsList = [
  {
    id: 1,
    title: 'Muzik - MERN Music Streaming Platform',
    category: 'fullstack',
    badge: 'Full-Stack',
    desc: 'A full-stack music streaming application that allows users to browse albums, artists, and songs with an interactive user interface. Engineered REST APIs for audio streaming and database queries.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    icon: <Music size={32} className="project-preview-icon text-gradient" />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  },
  {
    id: 2,
    title: 'Clean Street - Civic Issue Tracker',
    category: 'fullstack',
    badge: 'Infosys Internship',
    desc: 'A web application that helps citizens report and track local civic issues. Developed custom UI designs, modular frontend state, and API routing as part of the Infosys Springboard internship.',
    tech: ['React.js', 'MongoDB', 'REST APIs', 'UI/UX Design'],
    icon: <MapPin size={32} className="project-preview-icon text-gradient" />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  },
  {
    id: 3,
    title: 'Smart Complaint Management System',
    category: 'frontend',
    badge: 'Database Project',
    desc: 'A robust administration system designed to submit, log, track, and manage organizational complaints efficiently with an interactive dashboard and backend query processing.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SQL'],
    icon: <ShieldAlert size={32} className="project-preview-icon text-gradient" />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  },
  {
    id: 4,
    title: 'Interactive Match Game',
    category: 'utility',
    badge: 'Frontend Skill-builder',
    desc: 'A classic grid memory game built to showcase advanced React state management, performance rendering, and clean micro-animations.',
    tech: ['React.js', 'JavaScript', 'CSS3'],
    icon: <Gamepad2 size={28} className="project-preview-icon" style={{ color: 'var(--secondary)' }} />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  },
  {
    id: 5,
    title: 'Secure Password Generator',
    category: 'utility',
    badge: 'Utility Tool',
    desc: 'A client-side security utility featuring custom password parameters, copy-to-clipboard APIs, and strength assessment meters.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: <Award size={28} className="project-preview-icon" style={{ color: 'var(--accent)' }} />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  },
  {
    id: 6,
    title: 'Multi-Unit Converter',
    category: 'utility',
    badge: 'Utility Tool',
    desc: 'A responsive conversion application handling real-time unit translation calculations for weight, length, and temperature.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: <RefreshCw size={28} className="project-preview-icon" style={{ color: 'var(--secondary)' }} />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  },
  {
    id: 7,
    title: 'Interactive Quiz Application',
    category: 'utility',
    badge: 'Frontend Skill-builder',
    desc: 'A fully interactive quiz application designed with countdown timers, dynamic score tabulations, and performance reviews.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: <Compass size={28} className="project-preview-icon" style={{ color: 'var(--primary)' }} />,
    github: 'https://github.com/Ammisettychamu33',
    demo: '#'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projectsList.filter(proj => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <>
      <style>{`
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          transition: var(--transition-normal);
        }

        .filter-btn:hover {
          color: var(--text-primary);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: white;
          box-shadow: 0 4px 15px var(--primary-glow);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          padding: 1.75rem;
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          opacity: 0;
          transition: var(--transition-normal);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .project-icon-box {
          width: 60px;
          height: 60px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .project-badge {
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.2);
          color: var(--primary);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          font-size: 0.75rem;
          font-weight: 500;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.25rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          color: var(--text-secondary);
          transition: var(--transition-fast);
        }

        .project-link:hover {
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="projects" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A showcase of full-stack MERN systems, database-driven models, and interactive utility applications.</p>
        </div>

        <div className="filter-bar">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          >
            MERN / Full-Stack
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
          >
            Databases
          </button>
          <button
            onClick={() => setFilter('utility')}
            className={`filter-btn ${filter === 'utility' ? 'active' : ''}`}
          >
            Utilities
          </button>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel project-card"
              >
                <div className="project-header">
                  <div className="project-icon-box">
                    {proj.icon}
                  </div>
                  <span className="project-badge">{proj.badge}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>

                <div className="project-tech-list">
                  {proj.tech.map((tag, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={16} />
                    Source Code
                  </a>
                  <a href={proj.demo} className="project-link">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
