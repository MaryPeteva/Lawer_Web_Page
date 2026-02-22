import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Menu, X, Scale} from 'lucide-react';

const navLinks = [
    {name: 'Начало', href: '#home'},
    {name: 'Правни услуги', href: '#practice'},
    {name: 'За мен', href: '#about'},
    {name: 'Блог', href: '#team'},
    {name: 'Контакти', href: '#contact'},
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        nav:{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 50,
            padding: '0 24px',
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? '#123524' : 'transparent',
            backdropFilter: isScrolled ? 'blur(20px)' : 'none',
            borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.5)' : 'none',
        },
        container:{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            allignItems: 'center',
            justifyContent: 'space-between',
            height: '80px',
        },
        logo:{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#e2bc6f'
        },
        logoIconL:{
            backgroundColor: '#e2bc6f',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        logoText:{
            fontFamily: 'Playfair Display, serif',
            fontSize: '20px',
            fontWeight: 700,
        },
        navLinks:{
            display: 'flex',
            allignItems: 'center',
            gap: '32px',
        },
        navLink:{
           margin: '25px 0',
            color: '#123524',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'color 0.3s ease',
        },
        ctaButton: {
      padding: '12px 24px',
      backgroundColor: '#2d8158',
      color: '#000',
      fontWeight: 700,
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      border: 'none',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    mobileMenuBtn:{
        display: 'none',
        background: 'none',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
    },
    mobileMenu:{
        position: 'absolute',
        top: '80px',
        left: 0,
        right: 0,
        backgroundColor: 'rgba(15, 15, 16, 0.95)',
        backdropFilter: 'blur(20px)',
        padding:'24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },

    };

    return (
        <nav style={styles.nav}>
            <div style={styles.container}>
                <a href="#home" style={styles.logo}>
          <div>
            <img src="/img/logo5.png" alt="Logo" style={{ width: '80px', height: '80px' }} />
          </div>
          <span style={styles.logoText}>
            Правна кантора<span style={{ color: isScrolled ? '#e2bc6f' : '#123524' }}> Имилиана Цонева</span>
          </span>
        </a>

        <div style={styles.navLinks} className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={styles.navLink}>
              {link.name}
            </a>
          ))}
        </div>

        <button
          style={styles.mobileMenuBtn}
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ ...styles.navLink, fontSize: '18px' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" style={{ ...styles.ctaButton, textAlign: 'center' }}>
            Free Consultation
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
