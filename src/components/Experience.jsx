import React from 'react';
import { Calendar, Briefcase, ChevronRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const internships = [
  {
    role: 'Development Intern – Internship 6.0 (B2)',
    company: 'Infosys Springboard',
    duration: 'Sep 2025 – Nov 2025',
    project: 'Civic Issue Reporting & Tracking Application',
    bulletPoints: [
      'Contributed to a Civic Issue Reporting & Tracking Application for registering and tracking civic complaints.',
      'Designed responsive UI screens and developed reusable React.js components for the application frontend.',
      'Contributed to frontend application workflows and integration with project APIs and data requirements.'
    ]
  },
  {
    role: 'Front-End Development Intern',
    company: 'InLighnX Global Pvt. Ltd.',
    duration: 'Jul 2025 – Aug 2025',
    bulletPoints: [
      'Developed a responsive portfolio website with dark/light mode, smooth scrolling, project showcase, contact form, and Google Maps integration, hosted on GitHub Pages.',
      'Built a responsive To-Do List application and an Interactive Quiz application with task management, real-time scoring, and restart functionality.'
    ]
  },
  {
    role: 'AWS Cloud & DevOps Intern',
    company: 'Datavalley India Pvt. Ltd.',
    duration: 'Dec 2025',
    bulletPoints: [
      'Selected for an internship focused on AWS Cloud & DevOps, gaining practical exposure to cloud technologies, containerization, and deployment workflows.'
    ]
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <style>{`
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 2.5rem;
        }

        .timeline-line {
          position: absolute;
          left: 8px;
          top: 8px;
          bottom: 8px;
          width: 3px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 50%, rgba(139, 92, 246, 0.05) 100%);
          border-radius: 2px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3.5rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -39px;
          top: 6px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 4px solid var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
          z-index: 10;
          transition: var(--transition-normal);
        }

        .timeline-item:hover .timeline-marker {
          border-color: var(--secondary);
          box-shadow: 0 0 15px var(--secondary-glow);
          transform: scale(1.1);
        }

        .timeline-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .timeline-role {
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .timeline-company {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary);
          margin-top: 0.15rem;
        }

        .timeline-duration {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
        }

        .timeline-project-info {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.03);
          border: 1px dashed rgba(6, 182, 212, 0.2);
          width: fit-content;
        }

        .timeline-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .timeline-bullet {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .timeline-bullet-icon {
          color: var(--primary);
          margin-top: 0.25rem;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .timeline-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-role {
            font-size: 1.15rem;
          }
          .timeline-container {
            padding-left: 1.75rem;
          }
          .timeline-marker {
            left: -32px;
            width: 16px;
            height: 16px;
            border-width: 3px;
          }
          .timeline-line {
            left: 5px;
          }
        }
      `}</style>

      <section id="experience" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">A chronological record of web development and software engineering internships.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="timeline-container"
        >
          <div className="timeline-line" />

          {internships.map((job, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="timeline-item"
            >
              <div className="timeline-marker" />

              <div className="glass-panel timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <h4 className="timeline-company">
                      {job.company} {job.program ? `| ${job.program}` : ''}
                    </h4>
                  </div>
                  <div className="timeline-duration">
                    <Calendar size={14} />
                    <span>{job.duration}</span>
                  </div>
                </div>

                {job.project && (
                  <div className="timeline-project-info">
                    <Award size={16} />
                    <span>Project: {job.project}</span>
                  </div>
                )}

                <div className="timeline-bullets">
                  {job.bulletPoints.map((point, bIdx) => (
                    <div key={bIdx} className="timeline-bullet">
                      <ChevronRight size={16} className="timeline-bullet-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
