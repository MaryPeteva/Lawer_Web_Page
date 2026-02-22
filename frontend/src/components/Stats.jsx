import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, DollarSign, Briefcase, TrendingUp, Euro } from 'lucide-react';

const stats = [
  { icon: Trophy, value: '98%', label: 'Процент на успеваемост' },
  { icon: Euro, value: '€25k+', label: 'Възстановени средства' },
  { icon: Briefcase, value: '5,000+', label: 'Обработени дела' },
  { icon: TrendingUp, value: '150+', label: 'Корпоративни клиенти' },
];

const Stats = () => {
  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#FFFAF0',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px',
    },
    tagline: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      color: '#123524',
      marginBottom: '16px',
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(32px, 5vw, 48px)',
      fontWeight: 700,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '24px',
    },
    card: {
      backgroundColor: '#123524',
      border: '1px solid rgba(255,255,255,0.05)',
      padding: '32px',
      textAlign: 'center',
    },
    iconBox: {
      width: '56px',
      height: '56px',
      backgroundColor: 'rgba(97, 218, 251, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
    },
    value: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '40px',
      fontWeight: 700,
      marginBottom: '8px',
    },
    label: {
      color: '#e2bc6f',
      fontWeight: 600,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={styles.title}>Резултати, които говорят</h2>
        </motion.div>

        <div style={styles.grid} className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div style={styles.iconBox}>
                <stat.icon size={28} color="#e2bc6f" />
              </div>
              <p style={styles.value}>{stat.value}</p>
              <p style={styles.label}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .stats-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default Stats;