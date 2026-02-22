import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  { quote: "Много добра адвокатка ! Свърши ми работата, спечелихме делото по много труден казус, за който другите адвокати при които ходих не можаха да ми помогнат ! Много съм доволен, препоръчвам !", author: "Радослав Великов" },
  { quote: "Изключително много съм доволна от професионализма на адвокат Имилиана Цонева. Бях загубила надежда но тя ми я върна като спечели делото. Препоръчвам !", author: "Silvia Velikova"},
  { quote: "Много добър адвокат ! Държи се любезно и професионално с клиентите ! Спечели делото ми !", author: "Simona Stoyanova"},
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const styles = {
    section: {
      padding: '120px 24px',
      backgroundColor: '#123524',
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '64px',
      flexWrap: 'wrap',
      gap: '24px',
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
    nav: {
      display: 'flex',
      gap: '12px',
    },
    navBtn: {
      width: '48px',
      height: '48px',
      border: '1px solid #cecedd',
      backgroundColor: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-start',
    },
    quoteIcon: {
      width: '80px',
      height: '80px',
      backgroundColor: 'rgba(97, 218, 251, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    stars: {
      display: 'flex',
      gap: '4px',
      marginBottom: '24px',
    },
    quote: {
      fontFamily: 'Playfair Display, serif',
      fontSize: 'clamp(20px, 3vw, 32px)',
      lineHeight: 1.4,
      marginBottom: '32px',
    },
    authorLine: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
    },
    authorName: {
      fontWeight: 600,
    },
    authorPos: {
      color: '#cdcdd4',
      fontSize: '14px',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <div>
            <p style={styles.tagline}>Мнения на клиенти</p>
            <h2 style={styles.title}>Какво казват нашите клиенти</h2>
          </div>
          <div style={styles.nav}>
            <button style={styles.navBtn} onClick={() => setCurrent((current - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft size={20} />
            </button>
            <button style={styles.navBtn} onClick={() => setCurrent((current + 1) % testimonials.length)}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={styles.content}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="testimonial-content"
          >
            <div style={styles.quoteIcon} className="quote-icon">
              <Quote size={40} color="#e2bc6f" />
            </div>
            <div>
              <div style={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#e2bc6f" color="#e2bc6f" />
                ))}
              </div>
              <p style={styles.quote}>"{testimonials[current].quote}"</p>
              <div style={styles.authorLine}>
                <div style={{ width: '48px', height: '1px', backgroundColor: '#e2bc6f' }} />
                <div>
                  <p style={styles.authorName}>{testimonials[current].author}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonial-content { flex-direction: column !important; }
          .quote-icon { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;