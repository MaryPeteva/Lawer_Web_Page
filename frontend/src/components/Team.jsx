import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { 
    name: 'Имилиана Цонева', 
    role: 'Адвокат', 
    image: '/img/coneva.png',
    bio: 'Дългогодишен опит с повече от 15 години опит в правната сфера, гарантирам професионализъм, отлична теоретична подготовка и прилагане на натрупани знания и опит във всеки възложен казус !'
  },
];

const Team = () => {
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
      textAlign: 'center',
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
    card: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px',
      alignItems: 'center',
    },
    imageWrapper: {
      position: 'relative',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '500px',
      objectFit: 'cover',
    },
    content: {
      padding: '24px 0',
    },
    name: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '32px',
      fontWeight: 700,
      marginBottom: '8px',
    },
    role: {
      color: '#e2bc6f',
      fontSize: '16px',
      marginBottom: '24px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
    bio: {
      color: '#d4d4d8',
      fontSize: '16px',
      lineHeight: 1.8,
    },
  };

  return (
    <section id="team" style={styles.section}>
      <div style={styles.container}>
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
        </motion.div>

        {team.map((member, index) => (
          <motion.div
            key={member.name}
            style={styles.card}
            className="team-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div style={styles.imageWrapper}>
              <img src={member.image} alt={member.name} style={styles.image} />
            </div>
            <div style={styles.content}>
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.role}>{member.role}</p>
              <p style={styles.bio}>{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-card { 
            grid-template-columns: 1fr !important; 
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Team;