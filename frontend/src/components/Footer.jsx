import React from 'react';
import { Scale, ArrowUp, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#FFFAF0',
      padding: '80px 24px 24px',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '48px',
      marginBottom: '64px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '24px',
    },
    logoIcon: {
      width: '80px',
      height: '80px',
      //backgroundColor: '#123524',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
      fontFamily: 'Playfair Display, serif',
      fontSize: '20px',
      fontWeight: 700,
    },
    description: {
      color: '#a1a1aa',
      lineHeight: 1.7,
      marginBottom: '24px',
      maxWidth: '300px',
    },
    socials: {
      display: 'flex',
      gap: '12px',
    },
    socialBtn: {
      width: '40px',
      height: '40px',
      backgroundColor: '#123524',
      border: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      color: '#e2bc6f',
      textDecoration: 'none',
    },
    columnTitle: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '24px',
    },
    link: {
      display: 'block',
      color: '#71717a',
      textDecoration: 'none',
      marginBottom: '12px',
      fontSize: '14px',
    },
    bottom: {
      borderTop: '1px solid rgba(255,255,255,0.05)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    copyright: {
      color: '#52525b',
      fontSize: '14px',
    },
    scrollTop: {
      width: '40px',
      height: '40px',
      backgroundColor: '#123524',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    signature: {
      textAlign: 'center',
      marginTop: '40px',
      paddingTop: '24px',
      borderTop: '1px solid rgba(7, 6, 6, 0.05)',
    },
    signatureLink: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
      color: '#141414',
      fontSize: '14px',
      transition: 'color 0.3s ease',
    },
    signatureImg: {
      width: '70px',
      height: '50px',
      objectFit: 'contain',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid} className="footer-grid">
          <div>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <img src="/img/logo5.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
              </div>
              <span style={styles.logoText}>
                Имилиана <span style={{ color: '#123524' }}>Цонева</span>
              </span>
            </div>
            <p style={styles.description}>
              Адвокат посветен на защитата на вашите права и осигуряването на резултатите, които заслужавате.
            </p>
            <div style={styles.socials}>
              <a href="https://www.facebook.com/p/%D0%90%D0%B4%D0%B2%D0%BE%D0%BA%D0%B0%D1%82-%D0%98%D0%BC%D0%B8%D0%BB%D0%B8%D0%B0%D0%BD%D0%B0-%D0%A6%D0%BE%D0%BD%D0%B5%D0%B2%D0%B0-100057331124747/?locale=bg_BG" style={styles.socialBtn}><Facebook size={18} /></a>
              <a href="#" style={styles.socialBtn}><Twitter size={18} /></a>
              <a href="#" style={styles.socialBtn}><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h4 style={styles.columnTitle}>Правни услуги</h4>
            <a href="#practice" style={styles.link}>Наказателни дела</a>
            <a href="#practice" style={styles.link}>Гражданско право</a>
            <a href="#practice" style={styles.link}>Семейно право</a>
            <a href="#practice" style={styles.link}>Наследство</a>
          </div>

          <div>
            <h4 style={styles.columnTitle}>Информация</h4>
            <a href="#about" style={styles.link}>За нас</a>
            <a href="#team" style={styles.link}>Нашия екип</a>
            <a href="#contact" style={styles.link}>Контакти</a>
            <a href="/privacy-policy" style={styles.link}>Политика за поверителност</a>
          </div>

          <div>
            <h4 style={styles.columnTitle}>Контакти</h4>
            <p style={styles.link}>ул. ”Карл Маркс” 2</p>
            <p style={styles.link}>гр. Карнобат</p>
            <p style={styles.link}>0894/335 770</p>
          </div>
        </div>

      <style>{`
        @media (max-width: 968px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
              <div style={styles.bottom}>
          <p style={styles.copyright}>© 2026 Всички права запазени.</p>
          <button style={styles.scrollTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ArrowUp size={18} color="#000" />
          </button>
        </div>
        {/* Signature */}
        <div style={styles.signature}>
          <a href="https://mary-peteva.vercel.app/" style={styles.signatureLink} target="_blank" rel="noopener noreferrer">
            <span>Made by</span>
            <img 
              src="/img/Maria Peteva Dimitrova.png" 
              alt="Maria Peteva Dimitrova" 
              style={styles.signatureImg} 
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;