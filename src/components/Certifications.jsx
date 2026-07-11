import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const certificationsList = [
  { title: 'NodeJS Essentials', issuer: 'Infosys Springboard', category: 'backend' },
  { title: 'MongoDB Certification', issuer: 'Infosys Springboard', category: 'database' },
  { title: 'TypeScript Certification', issuer: 'Infosys Springboard', category: 'frontend' },
  { title: 'Angular Intermediate', issuer: 'Infosys Springboard', category: 'frontend' },
  { title: 'Python Foundation', issuer: 'Infosys Springboard', category: 'languages' },
  
  { title: 'Node.js Certification', issuer: 'NxtWave', category: 'backend' },
  { title: 'JavaScript Essentials', issuer: 'NxtWave', category: 'languages' },
  { title: 'Responsive Web Design', issuer: 'NxtWave', category: 'frontend' },
  { title: 'Database Fundamentals', issuer: 'NxtWave', category: 'database' },
  
  { title: 'Full Stack Web Development', issuer: 'GeeksforGeeks SkillUp', category: 'fullstack' },
  { title: 'SQL Basic', issuer: 'HackerRank', category: 'database' },
  { title: 'AWS Cloud Computing', issuer: 'APSSDC', category: 'cloud' }
];

export default function Certifications() {
  const [filter, setFilter] = useState('all');

  const filteredCerts = certificationsList.filter(cert => {
    if (filter === 'all') return true;
    if (filter === 'infosys') return cert.issuer.includes('Infosys');
    if (filter === 'nxtwave') return cert.issuer.includes('NxtWave');
    if (filter === 'others') return !cert.issuer.includes('Infosys') && !cert.issuer.includes('NxtWave');
    return true;
  });

  const getIssuerColor = (issuer) => {
    if (issuer.includes('Infosys')) return 'rgba(139, 92, 246, 0.15)'; // Violet
    if (issuer.includes('NxtWave')) return 'rgba(6, 182, 212, 0.15)'; // Cyan
    if (issuer.includes('HackerRank')) return 'rgba(34, 197, 94, 0.15)'; // Green
    return 'rgba(249, 115, 22, 0.15)'; // Orange
  };

  const getIssuerTextColor = (issuer) => {
    if (issuer.includes('Infosys')) return '#a78bfa';
    if (issuer.includes('NxtWave')) return '#22d3ee';
    if (issuer.includes('HackerRank')) return '#4ade80';
    return '#fb923c';
  };

  return (
    <>
      <style>{`
        .certs-filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .certs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .cert-card {
          padding: 1.5rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          position: relative;
        }

        .cert-icon-container {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(139, 92, 246, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary);
        }

        .cert-info {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .cert-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .cert-issuer-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          width: fit-content;
          text-transform: uppercase;
          letter-spacing: 0.02em;
        }

        .cert-verified {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        @media (max-width: 992px) {
          .certs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .certs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="certifications" className="section container">
        <div className="section-title-wrapper">
          <h2 className="section-title">Professional Certifications</h2>
          <p className="section-subtitle">A collection of industry-recognized certifications across developer disciplines.</p>
        </div>

        <div className="certs-filter-bar">
          <button
            onClick={() => setFilter('all')}
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          >
            All (12)
          </button>
          <button
            onClick={() => setFilter('infosys')}
            className={`filter-btn ${filter === 'infosys' ? 'active' : ''}`}
          >
            Infosys Springboard
          </button>
          <button
            onClick={() => setFilter('nxtwave')}
            className={`filter-btn ${filter === 'nxtwave' ? 'active' : ''}`}
          >
            NxtWave
          </button>
          <button
            onClick={() => setFilter('others')}
            className={`filter-btn ${filter === 'others' ? 'active' : ''}`}
          >
            Others
          </button>
        </div>

        <motion.div layout className="certs-grid">
          {filteredCerts.map((cert, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="glass-panel cert-card"
            >
              <div className="cert-icon-container">
                <Award size={20} />
              </div>
              <div className="cert-info">
                <h3 className="cert-card-title">{cert.title}</h3>
                <span
                  className="cert-issuer-badge"
                  style={{
                    backgroundColor: getIssuerColor(cert.issuer),
                    color: getIssuerTextColor(cert.issuer)
                  }}
                >
                  {cert.issuer}
                </span>
                <span className="cert-verified">
                  <ShieldCheck size={12} className="text-gradient" />
                  Verified Credential
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}
