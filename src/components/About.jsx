import React from 'react';
import { Server, Layout, Database, FileCode, CheckCircle, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const coreExpertise = [
  {
    icon: <Layout size={24} className="expertise-icon text-gradient" />,
    title: 'React & Frontend',
    desc: 'Crafting responsive, high-performance user interfaces using modular React components and modern CSS techniques.'
  },
  {
    icon: <Server size={24} className="expertise-icon text-gradient" />,
    title: 'Node & Express Backend',
    desc: 'Developing secure, scalable REST APIs, managing authentication, and structuring server middleware logic.'
  },
  {
    icon: <Database size={24} className="expertise-icon text-gradient" />,
    title: 'Database Management',
    desc: 'Designing efficient database schemas, structuring queries in MongoDB (NoSQL) and SQL.'
  },
  {
    icon: <FileCode size={24} className="expertise-icon text-gradient" />,
    title: 'RESTful API Engineering',
    desc: 'Designing clean API contracts, handling data parsing, sanitization, and seamless frontend-backend integration.'
  }
];

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: flex-start;
        }

        .about-narrative {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-p {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .about-highlight-box {
          padding: 1.5rem;
          background: rgba(139, 92, 246, 0.03);
          border-left: 4px solid var(--primary);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-style: italic;
          color: var(--text-primary);
        }

        .about-qualities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1rem;
        }

        .quality-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .quality-icon {
          color: var(--secondary);
          flex-shrink: 0;
        }

        /* Expertise Grid */
        .about-expertise-panel {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .expertise-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .expertise-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .expertise-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .about-expertise-panel {
            grid-template-columns: 1fr;
          }
          .about-qualities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="about" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief introduction to my background, engineering values, and core capabilities.</p>
        </div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="about-narrative"
          >
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700 }}>
              Engineering Scalable Solutions
            </h3>
            <p className="about-p">
              I am a Computer Science Engineering student passionate about Full Stack Development and building real-world applications using modern web technologies. My technical journey is focused on mastering the MERN stack to deliver robust solutions.
            </p>
            <div className="about-highlight-box">
              "Fascinated by the intersection of front-end responsiveness and backend reliability, I strive to design applications that provide seamless user experiences."
            </div>
            <p className="about-p">
              I emphasize writing clean, modular code, designing efficient databases, and implementing standard software design practices. Through continuous learning, I quickly adapt to new tools and frameworks.
            </p>

            <div className="about-qualities-grid">
              <div className="quality-item">
                <CheckCircle size={18} className="quality-icon" />
                <span>Continuous Learner</span>
              </div>
              <div className="quality-item">
                <CheckCircle size={18} className="quality-icon" />
                <span>Problem Solver</span>
              </div>
              <div className="quality-item">
                <CheckCircle size={18} className="quality-icon" />
                <span>MERN Specialist</span>
              </div>
              <div className="quality-item">
                <CheckCircle size={18} className="quality-icon" />
                <span>Team Collaborator</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.1 }}
            className="about-expertise-panel"
          >
            {coreExpertise.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-panel expertise-card"
              >
                {exp.icon}
                <h4 className="expertise-title">{exp.title}</h4>
                <p className="expertise-desc">{exp.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
