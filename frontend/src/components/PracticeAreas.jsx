import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scale, Users, FileText, Shield, Gavel } from 'lucide-react';

const practices = [
  { icon: Building2, title: 'Наказателни дела', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: Scale, title: 'Гражданско право', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: Users, title: 'Семейно право', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: FileText, title: 'Наследство', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: Shield, title: 'Криминално право', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { icon: Gavel, title: 'Недвижимо имущество', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

const PracticeAreas = () => {
  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#123524',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    header: {
      marginBottom: '64px',
    },
    tagline: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      color: '#e2bc6f',
      marginBottom: '16px',
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
    },
    card: {
      backgroundColor: 'rgba(24, 24, 27, 0.5)',
      border: '1px solid rgba(255,255,255,0.05)',
      padding: '32px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    iconBox: {
      width: '56px',
      height: '56px',
      backgroundColor: 'rgba(97, 218, 251, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '24px',
    },
    cardTitle: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '24px',
      fontWeight: 600,
      marginBottom: '12px',
    },
    cardDesc: {
      color: '#a1a1aa',
      lineHeight: 1.6,
    },
  };

  return (
    <section id="practice" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={styles.tagline}>С какво се занимавам</p>
          <h2 style={styles.title}>Правни услуги</h2>
        </motion.div>

        <div style={styles.grid} className="practice-grid">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ borderColor: 'rgba(97, 218, 251, 0.3)' }}
            >
              <div style={styles.iconBox}>
                <practice.icon size={28} color="#e2bc6f" />
              </div>
              <h3 style={styles.cardTitle}>{practice.title}</h3>
              <p style={styles.cardDesc}>{practice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .practice-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .practice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default PracticeAreas;