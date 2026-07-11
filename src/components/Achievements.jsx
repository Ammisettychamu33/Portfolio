import React from 'react';
import { Award, Zap, Code, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const achievementsList = [
  {
    icon: <Zap size={30} className="ach-icon text-gradient" />,
    title: '30 Days of Code Challenge',
    desc: 'Successfully completed intensive coding marathons focusing on complex data structures, algorithms, and daily code commits.',
    metric: '100% Completion'
  },
  {
    icon: <Code size={30} className="ach-icon text-gradient" />,
    title: 'Full Stack & Frontend Applications',
    desc: 'Built and deployed a collection of scalable MERN projects, database trackers, and client-side utilities representing standard development scopes.',
    metric: '8+ Active Projects'
  },
  {
    icon: <Award size={30} className="ach-icon text-gradient" />,
    title: 'Research Work Presentations',
    desc: 'Participated in academic and technical panels, presenting research on software practices and emerging computing trends in conferences.',
    metric: 'Conference Presenter'
  }
];

export default function Achievements() {
  return (
    <>
      <style>{`
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .ach-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1.25rem;
        }

        .ach-icon-container {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-sm);
          background: rgba(139, 92, 246, 0.03);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ach-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .ach-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .ach-metric {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          background: rgba(6, 182, 212, 0.05);
          border: 1px solid rgba(6, 182, 212, 0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          margin-top: auto;
        }

        @media (max-width: 900px) {
          .achievements-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="achievements" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Milestones & Achievements</h2>
          <p className="section-subtitle">Key technical milestones, coding accomplishments, and presentations.</p>
        </div>

        <div className="achievements-grid">
          {achievementsList.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel ach-card"
            >
              <div className="ach-icon-container">
                {ach.icon}
              </div>
              <h3 className="ach-title">{ach.title}</h3>
              <p className="ach-desc">{ach.desc}</p>
              <span className="ach-metric">{ach.metric}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
