import React, { useState } from 'react';
import { Github, ExternalLink, Music, MapPin, AlertTriangle, Gamepad2, ShieldAlert, Award, Grid, Compass, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsList = [
  {
    id: 1,
    title: 'Muzic – Music Streaming Platform',
    category: 'fullstack',
    badge: 'Core MERN Project',
    desc: 'Developed and deployed a full-stack music streaming application with the MERN stack, using responsive React.js interfaces and reusable components. Implemented JWT authentication, protected routes, and user-specific features including music playback, search, and collections. Built album and artist management backed by MongoDB and integrated RESTful APIs with Express.js tested via Postman.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Postman'],
    icon: <Music size={32} className="project-preview-icon text-gradient" />,
    github: 'https://github.com/Ammisettychamu33/Muzic_WebApplication',
    demo: 'https://github.com/Ammisettychamu33/Muzic_WebApplication'
  },
  {
    id: 2,
    title: 'Enterprise CMS & Dynamic Content Platform',
    category: 'fullstack',
    badge: 'Decoupled Architecture',
    desc: 'Built a full-stack content management platform with a decoupled architecture: separate Admin CMS, Public Web Application, and Express REST API service. Developed frontends with React.js and Redux Toolkit with dynamic content block rendering. Implemented JWT authentication and CRUD APIs with Node.js/Express and MongoDB/Mongoose, containerized with Docker & Docker Compose.',
    tech: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Docker', 'Postman'],
    icon: <Grid size={32} className="project-preview-icon text-gradient" />,
    github: 'https://github.com/Ammisettychamu33/Enterprise-CMS-Dynamic-Content-Platform',
    demo: 'https://github.com/Ammisettychamu33/Enterprise-CMS-Dynamic-Content-Platform'
  },
  {
    id: 3,
    title: 'Civic Issue Reporting & Tracking Application',
    category: 'fullstack',
    badge: 'Infosys Springboard',
    desc: 'Contributed to a Civic Issue Reporting & Tracking Application for registering and tracking civic complaints. Designed responsive UI screens and developed reusable React.js components for the application frontend, integrating application workflows with project APIs and data requirements.',
    tech: ['React.js', 'REST APIs', 'UI/UX Design', 'Modular Components'],
    icon: <MapPin size={32} className="project-preview-icon text-gradient" />,
    github: 'https://github.com/Ammisettychamu33',
    demo: 'https://github.com/Ammisettychamu33'
  },
  {
    id: 4,
    title: 'Interactive Quiz Application',
    category: 'utility',
    badge: 'InLighnX Global Intern',
    desc: 'Built a responsive interactive quiz application featuring dynamic countdown timers, task management, real-time score calculation, and instant restart functionality. Hosted live on GitHub Pages.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    icon: <Compass size={28} className="project-preview-icon" style={{ color: 'var(--primary)' }} />,
    github: 'https://github.com/Ammisettychamu33/Interactive-Quiz-Application',
    demo: 'https://ammisettychamu33.github.io/Interactive-Quiz-Application/'
  },
  {
    id: 5,
    title: 'Responsive To-Do List Application',
    category: 'utility',
    badge: 'InLighnX Global Intern',
    desc: 'Developed a task management and organization tool with real-time status updates, task filtering, clean responsive styling, and persistent browser storage. Hosted live on GitHub Pages.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    icon: <Award size={28} className="project-preview-icon" style={{ color: 'var(--secondary)' }} />,
    github: 'https://github.com/Ammisettychamu33/To-Do-List-Application',
    demo: 'https://ammisettychamu33.github.io/To-Do-List-Application/'
  },
  {
    id: 6,
    title: 'Responsive Portfolio Website',
    category: 'frontend',
    badge: 'Live Showcase',
    desc: 'Developed a modern, responsive portfolio website featuring dark/light aesthetics, smooth scrolling navigation, project showcases, interactive contact workflow, and Google Maps integration.',
    tech: ['React.js', 'Vite', 'Framer Motion', 'Lucide React', 'GitHub Pages'],
    icon: <RefreshCw size={28} className="project-preview-icon" style={{ color: 'var(--secondary)' }} />,
    github: 'https://github.com/Ammisettychamu33/Portfolio',
    demo: 'https://ammisettychamu33.github.io/Portfolio/'
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
