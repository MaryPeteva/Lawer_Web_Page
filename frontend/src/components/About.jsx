import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const values = [
  'Неотклонна ангажираност към успеха на клиентите',
  'Прозрачна комуникация на всеки етап',
  'Десетилетия комбиниран юридически опит',
  'Персонализиран стратегически подход',
];

const About = () => {
  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#FFFAF0',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center',
    },
    imageWrapper: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '500px',
      objectFit: 'cover',
    },
    yearsBadge: {
      position: 'absolute',
      bottom: '-24px',
      right: '-24px',
      backgroundColor: '#e2bc6f',
      padding: '24px',
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
      marginBottom: '24px',
    },
    text: {
      color: '#5d5d64',
      lineHeight: 1.8,
      marginBottom: '32px',
    },
    valuesList: {
      display: 'grid',
      gap: '16px',
    },
    valueItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      color: '#3c3c42',
    },
  };

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container} className="about-grid">
        <motion.div
          style={styles.imageWrapper}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="about-image"
        >
          <img
            src="/img/trent-erwin-UgA3Xvi3SkA-unsplash.jpg"
            alt="Legal Team"
            style={styles.image}
          />
          <div style={styles.yearsBadge}>
            <p style={{ fontFamily: 'Playfair Display', fontSize: '36px', fontWeight: 700, color: '#000' }}>15+</p>
            <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.7)', textTransform: 'uppercase' }}>Години</p>
            <p style={{ fontSize: '12px', color: 'rgba(0,0,0,0.7)', textTransform: 'uppercase' }}>опит</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p style={styles.tagline}>За кантората</p>
          <h2 style={styles.title}>Завет от правна компетентност</h2>
          <p style={styles.text}>
            Основана на принципите на почтеност и всеотдайност, катгората се е утвърдила като водеща правна институция. С десетилетия опит в различни области на практиката.
          </p>
          <div style={styles.valuesList}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                style={styles.valueItem}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CheckCircle size={20} color="#e2bc6f" />
                <span>{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .about-image { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default About;