import React from 'react';
import { GraduationCap, Award, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const relevantCoursework = [
  'Data Structures & Algorithms',
  'Database Management Systems (DBMS)',
  'Object-Oriented Programming (Java/Python)',
  'Software Engineering Principles',
  'Web Technologies & REST APIs',
  'Computer Networks & Operating Systems'
];

export default function Education() {
  return (
    <>
      <style>{`
        .education-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .education-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: relative;
        }

        .edu-badge-icon {
          position: absolute;
          right: 2rem;
          top: 2rem;
          color: rgba(139, 92, 246, 0.08);
          pointer-events: none;
        }

        .edu-degree {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .edu-field {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--secondary);
        }

        .edu-institution {
          font-size: 1rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .edu-timeline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        /* GPA Circle */
        .gpa-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1rem;
          min-height: 250px;
        }

        .gpa-circle-container {
          position: relative;
          width: 140px;
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.03);
          border: 4px dashed rgba(139, 92, 246, 0.2);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.05);
        }

        .gpa-value {
          font-family: 'Poppins', sans-serif;
          font-size: 2.2rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--text-primary) 30%, var(--primary) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gpa-max {
          font-size: 0.9rem;
          color: var(--text-muted);
          position: absolute;
          bottom: 25px;
        }

        /* Coursework */
        .coursework-section {
          margin-top: 1.5rem;
        }

        .coursework-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .coursework-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .coursework-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .coursework-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--secondary);
        }

        @media (max-width: 900px) {
          .education-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .gpa-card {
            min-height: auto;
          }
        }
      `}</style>

      <section id="education" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">Formal higher education foundation in Computer Science & Engineering.</p>
        </div>

        <div className="education-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="glass-panel education-card"
          >
            <GraduationCap size={120} className="edu-badge-icon" />

            <div>
              <h3 className="edu-degree">Bachelor of Technology (B.Tech)</h3>
              <h4 className="edu-field">Computer Science & Engineering</h4>
            </div>

            <div className="edu-institution">
              <BookOpen size={18} className="text-gradient" />
              <span>Narasaraopeta Engineering College (Autonomous)</span>
            </div>

            <div className="edu-timeline">
              <Clock size={16} />
              <span>Graduation Expected: 2026</span>
            </div>

            <div className="coursework-section">
              <h4 className="coursework-title">
                <Award size={16} className="text-gradient" />
                Key Academic Coursework
              </h4>
              <div className="coursework-grid">
                {relevantCoursework.map((course, idx) => (
                  <div key={idx} className="coursework-item">
                    <span className="coursework-bullet" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel gpa-card"
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>Academic Performance</h3>
            <div className="gpa-circle-container">
              <span className="gpa-value">8.39</span>
              <span className="gpa-max">/ 10 CGPA</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', maxWidth: '200px' }}>
              Maintained a high GPA focusing on standard engineering paradigms.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
