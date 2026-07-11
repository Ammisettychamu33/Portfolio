import React from 'react';
import { Layout, Server, Database, Settings, Terminal, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Layout size={20} className="skill-cat-icon text-gradient" />,
    skills: [
      { name: 'React.js', level: '90%' },
      { name: 'JavaScript (ES6+)', level: '85%' },
      { name: 'TypeScript', level: '75%' },
      { name: 'HTML5 / CSS3', level: '95%' },
      { name: 'Bootstrap', level: '90%' }
    ]
  },
  {
    category: 'Backend & APIs',
    icon: <Server size={20} className="skill-cat-icon text-gradient" />,
    skills: [
      { name: 'Node.js', level: '80%' },
      { name: 'Express.js', level: '85%' },
      { name: 'RESTful APIs', level: '90%' },
      { name: 'JWT Authentication', level: '80%' }
    ]
  },
  {
    category: 'Database Management',
    icon: <Database size={20} className="skill-cat-icon text-gradient" />,
    skills: [
      { name: 'MongoDB', level: '85%' },
      { name: 'SQL', level: '80%' }
    ]
  },
  {
    category: 'Developer Tools',
    icon: <Terminal size={20} className="skill-cat-icon text-gradient" />,
    skills: [
      { name: 'Git & GitHub', level: '85%' },
      { name: 'VS Code', level: '90%' },
      { name: 'Postman', level: '85%' },
      { name: 'Responsive Web Design', level: '95%' }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .skill-group-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-group-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
        }

        .skill-group-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-items-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .skill-item-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.35rem;
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .skill-percentage {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--secondary);
        }

        .skill-bar-bg {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
          position: relative;
        }

        .skill-bar-fill {
          height: 100%;
          border-radius: 3px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          position: absolute;
          left: 0;
          top: 0;
          transition: width 1s ease-in-out;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="skills" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">A granular overview of my frontend, backend, database, and dev-tool capabilities.</p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="skills-grid"
        >
          {skillsData.map((group, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="glass-panel skill-group-card"
            >
              <div className="skill-group-header">
                {group.icon}
                <h3 className="skill-group-title">{group.category}</h3>
              </div>
              <div className="skill-items-list">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-item-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}</span>
                    </div>
                    <div className="skill-bar-bg">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
