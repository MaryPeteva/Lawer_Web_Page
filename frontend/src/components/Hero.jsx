import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Clock, Hourglass, Gavel } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Gavel, value: '500+', label: 'Спречелени дела' },
    { icon: Users, value: '1000+', label: 'Доволни клиенти' },
    { icon: Hourglass, value: '15+', label: 'Години опит' },
  ];
  const styles = {
    section: {
      minHeight: '100vh',
      backgroundColor: '#FFFAF0',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    },
    glow: {
      position: 'absolute',
      top: '25%',
      right: 0,
      width: '600px',
      height: '600px',
      background: 'rgba(97, 218, 251, 0.05)',
      borderRadius: '50%',
      filter: 'blur(150px)',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 1,
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center',
    },
    tagline: {
      fontFamily: 'Manrope, sans-serif',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      color: '#123524',
      marginBottom: '24px',
    },
    title: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(40px, 6vw, 72px)',
      fontWeight: 700,
      lineHeight: 1.1,
      marginBottom: '32px',
    },
    accent: {
      color: '#123524',
      position: 'relative',
    },
    description: {
      fontSize: '18px',
      color: '#a1a1aa',
      lineHeight: 1.7,
      marginBottom: '40px',
      maxWidth: '500px',
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
    },
    primaryBtn: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px 32px',
      backgroundColor: '#123524',
      color: '#e2bc6f',
      fontWeight: 700,
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    secondaryBtn: {
      padding: '16px 32px',
      backgroundColor: 'transparent',
      color: '#123524',
      fontWeight: 700,
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      border: '1px solid #3f3f46',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    imageContainer: {
      position: 'relative',
    },
    image: {
      width: '100%',
      height: '600px',
      objectFit: 'cover',
    },
    badge: {
      position: 'absolute',
      bottom: '-32px',
      left: '-32px',
      backgroundColor: '#123524',
      border: '1px solid #27272a',
      padding: '24px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    badgeIcon: {
      width: '48px',
      height: '48px',
      backgroundColor: '#e2bc6f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statsRow: {
      marginTop: '80px',
      paddingTop: '48px',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '32px',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    statIcon: {
      width: '56px',
      height: '56px',
      backgroundColor: 'rgb(18, 53, 36)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statValue: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '32px',
      fontWeight: 700,
    },
    statLabel: {
      fontSize: '12px',
      color: '#e2bc6f',
      textTransform: 'uppercase',
      letterSpacing: '2px',
    },
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.glow} />
      <div style={styles.container}>
        <div style={styles.grid} className="hero-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={styles.title}>
              Справедливост
              <br />
              <span style={styles.accent}>с яснота</span>
            </h1>
            <p style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div style={styles.buttons}>
              <a href="#contact" style={styles.primaryBtn}>
                Задайте въпрос <ArrowRight size={16} />
              </a>
              <a href="#practice" style={styles.secondaryBtn}>
                Правни слуги
              </a>
            </div>
          </motion.div>

          <motion.div
            style={styles.imageContainer}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <img
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800"
              alt="Law Office"
              style={styles.image}
            />
          </motion.div>
        </div>

        <div style={styles.statsRow} className="stats-row">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              style={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div style={styles.statIcon}>
                <stat.icon size={24} color="#fcc14b" />
              </div>
              <div>
                <p style={styles.statValue}>{stat.value}</p>
                <p style={styles.statLabel}>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image { display: none !important; }
          .stats-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;