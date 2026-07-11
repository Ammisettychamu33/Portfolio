import React from 'react';
import { Calendar, Briefcase, ChevronRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const internships = [
  {
    role: 'Frontend Developer & UI Designer',
    company: 'Infosys Springboard',
    program: 'Virtual Internship 6.0',
    duration: 'Ongoing / Recent',
    project: 'Clean Street - Civic Issue Reporting Application',
    bulletPoints: [
      'Designed high-fidelity user interfaces utilizing responsive layouts to maximize mobile accessibility.',
      'Developed modular, reusable React frontend components with predictable application states.',
      'Collaborated on REST API definitions and successfully integrated UI components with data layers.'
    ]
  },
  {
    role: 'Web Development Intern',
    company: 'Elewayte',
    duration: 'June 2024 - July 2024',
    bulletPoints: [
      'Engineered interactive web components using modern ES6+ Javascript and optimized layouts.',
      'Analyzed page speed performance metrics, improving asset delivery speeds and responsiveness.',
      'Collaborated on cross-browser compatibility checks, ensuring a seamless user experience.'
    ]
  },
  {
    role: 'Python Intern',
    company: 'OctaNet',
    duration: 'April 2024 - May 2024',
    bulletPoints: [
      'Implemented foundational backend scripts, data structures, and automation utilities using Python.',
      'Built clean command line interfaces and worked on scripting file system input/output tasks.',
      'Adopted Git version control and followed professional documentation guidelines.'
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
